import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

const FROM = process.env.RESEND_FROM_ADDRESS ?? 'onboarding@resend.dev';
const TO = process.env.CONTACT_EMAIL_TO ?? 'hello@aguynamedandre.com';

// Inquiry type labels for the email subject line
const INQUIRY_LABELS: Record<string, string> = {
  build: 'BUILD SOMETHING NEW',
  fix: 'FIX SOMETHING BROKEN',
  automate: 'AUTOMATE & IMPROVE',
  partner: 'TECHNOLOGY PARTNER',
  unsure: "NOT SURE YET",
};

export async function POST(req: NextRequest) {
  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    const body = await req.json();
    const { inquiryType, name, email, businessName, problem, currentProcess, timeline } = body;

    // Basic validation — all required fields must be non-empty strings
    if (
      typeof name !== 'string' || name.trim() === '' ||
      typeof email !== 'string' || email.trim() === '' ||
      typeof problem !== 'string' || problem.trim() === ''
    ) {
      return NextResponse.json(
        { error: 'Name, email, and problem are required.' },
        { status: 400 }
      );
    }

    // Loose email format check
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: 'Please provide a valid email address.' },
        { status: 400 }
      );
    }

    const label = INQUIRY_LABELS[inquiryType] ?? 'GENERAL INQUIRY';
    const subject = `[${label}] New inquiry from ${name.trim()}`;

    const html = `
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>${subject}</title>
  </head>
  <body style="margin:0;padding:0;background:#09090b;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;">
    <table width="100%" cellpadding="0" cellspacing="0" style="background:#09090b;padding:40px 20px;">
      <tr>
        <td align="center">
          <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">

            <!-- Header -->
            <tr>
              <td style="border-bottom:1px solid #27272a;padding-bottom:24px;margin-bottom:24px;">
                <p style="margin:0 0 8px;font-size:11px;font-weight:600;letter-spacing:0.18em;text-transform:uppercase;color:#01B3FF;">${label}</p>
                <h1 style="margin:0;font-size:24px;font-weight:700;color:#f4f4f5;">New Inquiry</h1>
              </td>
            </tr>

            <!-- Sender details -->
            <tr>
              <td style="padding:24px 0 0;">
                <table width="100%" cellpadding="0" cellspacing="0">
                  <tr>
                    <td style="padding:0 0 16px;">
                      <p style="margin:0 0 4px;font-size:10px;font-weight:600;letter-spacing:0.16em;text-transform:uppercase;color:#52525b;">From</p>
                      <p style="margin:0;font-size:15px;color:#e4e4e7;">${name.trim()}</p>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding:0 0 16px;">
                      <p style="margin:0 0 4px;font-size:10px;font-weight:600;letter-spacing:0.16em;text-transform:uppercase;color:#52525b;">Email</p>
                      <a href="mailto:${email.trim()}" style="margin:0;font-size:15px;color:#01B3FF;text-decoration:none;">${email.trim()}</a>
                    </td>
                  </tr>
                  ${businessName?.trim() ? `
                  <tr>
                    <td style="padding:0 0 16px;">
                      <p style="margin:0 0 4px;font-size:10px;font-weight:600;letter-spacing:0.16em;text-transform:uppercase;color:#52525b;">Business</p>
                      <p style="margin:0;font-size:15px;color:#e4e4e7;">${businessName.trim()}</p>
                    </td>
                  </tr>` : ''}
                  ${timeline?.trim() ? `
                  <tr>
                    <td style="padding:0 0 16px;">
                      <p style="margin:0 0 4px;font-size:10px;font-weight:600;letter-spacing:0.16em;text-transform:uppercase;color:#52525b;">Timeline</p>
                      <p style="margin:0;font-size:15px;color:#e4e4e7;">${timeline.trim()}</p>
                    </td>
                  </tr>` : ''}
                </table>
              </td>
            </tr>

            <!-- Divider -->
            <tr><td style="height:1px;background:#27272a;margin:8px 0;"></td></tr>

            <!-- Problem -->
            <tr>
              <td style="padding:24px 0 0;">
                <p style="margin:0 0 8px;font-size:10px;font-weight:600;letter-spacing:0.16em;text-transform:uppercase;color:#52525b;">What are they trying to accomplish?</p>
                <p style="margin:0;font-size:15px;color:#a1a1aa;line-height:1.6;white-space:pre-wrap;">${problem.trim()}</p>
              </td>
            </tr>

            ${currentProcess?.trim() ? `
            <!-- Current process -->
            <tr>
              <td style="padding:20px 0 0;">
                <p style="margin:0 0 8px;font-size:10px;font-weight:600;letter-spacing:0.16em;text-transform:uppercase;color:#52525b;">Current process</p>
                <p style="margin:0;font-size:15px;color:#a1a1aa;line-height:1.6;white-space:pre-wrap;">${currentProcess.trim()}</p>
              </td>
            </tr>` : ''}

            <!-- Footer -->
            <tr>
              <td style="padding:32px 0 0;border-top:1px solid #27272a;margin-top:32px;">
                <p style="margin:0;font-size:12px;color:#3f3f46;">Sent from aguynamedandre.com · Need a Solution?</p>
              </td>
            </tr>

          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;

    const { error } = await resend.emails.send({
      from: FROM,
      to: TO,
      replyTo: email.trim(),
      subject,
      html,
    });

    if (error) {
      console.error('[contact/route] Resend error:', error);
      return NextResponse.json(
        { error: 'Failed to send message. Please try again.' },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err) {
    console.error('[contact/route] Unexpected error:', err);
    return NextResponse.json(
      { error: 'Something went wrong. Please try again.' },
      { status: 500 }
    );
  }
}
