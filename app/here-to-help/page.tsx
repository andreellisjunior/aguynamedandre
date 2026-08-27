'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import { Navigation } from '../components/nav';
import { DiagnosticCards } from './diagnostic-cards';
import { ContactForm } from './contact-form';
import type { InquiryType } from './diagnostic-cards';

// ─── Case study data ──────────────────────────────────────────────────────────
// Structured around problem → solution → outcome rather than "website we built"
const caseStudies = [
  {
    slug: 'ermajean',
    label: 'AI-POWERED PRODUCT',
    problem: 'Home cooks had no easy way to figure out what to make with the ingredients already in their kitchen, leading to food waste and decision fatigue.',
    solution: 'Built an AI recipe generation platform that creates meal suggestions based on what you already have on hand, with step-by-step instructions and portion control.',
    outcome: 'A live product that removes the daily friction of meal planning and reduces food waste for its growing user base.',
    url: 'https://ermajean.com',
    title: 'ermajean.com',
    accentColor: '#01B3FF',
  },
  {
    slug: 'lockworthy',
    label: 'SECURITY & LEGACY PLANNING',
    problem: "Families had no reliable way to ensure their loved ones could access critical digital accounts, passwords, and documents in an emergency or after death.",
    solution: 'Designed and built a secure digital legacy management platform with encrypted vaults, trusted contact management, and conditional access protocols.',
    outcome: 'A full-featured SaaS platform that gives families peace of mind and ensures digital assets are never lost.',
    url: 'https://lockworthy.com',
    title: 'Lockworthy',
    accentColor: '#34D399',
  },
  {
    slug: 'stillpoynt',
    label: 'PRODUCTIVITY & WELLNESS APP',
    problem: 'Productivity tools create anxiety by optimizing for volume. People needed a system that helped them do meaningful work without feeling overwhelmed.',
    solution: 'Built a mindful productivity app combining commitment tracking, journaling, a Pomodoro focus timer, and daily scripture — all in a calm, distraction-free interface.',
    outcome: 'A cross-platform PWA with offline support that shipped with full feature parity on mobile and desktop.',
    url: 'https://stillpoynt.lovable.app',
    title: 'StillPoynt',
    accentColor: '#A78BFA',
  },
];

// ─── Process steps ────────────────────────────────────────────────────────────
const processSteps = [
  {
    number: '01',
    label: 'UNDERSTAND',
    description:
      'We learn how your business works, what\'s getting in the way, and what you\'re trying to accomplish.',
  },
  {
    number: '02',
    label: 'STRATEGIZE',
    description:
      'We determine the best path forward—whether that\'s custom software, automation, AI, a website, an integration, or something simpler.',
  },
  {
    number: '03',
    label: 'BUILD',
    description:
      'We design and develop the solution, turning the strategy into something your business can actually use.',
  },
  {
    number: '04',
    label: 'IMPROVE',
    description:
      'We continue to support, refine, and evolve the technology as your business grows.',
  },
];

// ─── Shared animation variants ────────────────────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1], delay },
  }),
};

export default function HereToHelpPage() {
  const [activeInquiry, setActiveInquiry] = useState<InquiryType | null>(null);

  function openForm(type: InquiryType) {
    setActiveInquiry(type);
  }

  function closeForm() {
    setActiveInquiry(null);
  }

  return (
    <div className='relative min-h-screen overflow-x-hidden bg-gradient-to-tl from-zinc-900 via-zinc-400/10 to-zinc-900'>
      <Navigation />

      {/* ── SECTION 1: HERO ─────────────────────────────────────────────────── */}
      <section className='relative flex flex-col justify-center min-h-[85vh] px-6 mx-auto max-w-5xl overflow-hidden lg:px-8 pt-32 pb-20'>
        {/* Background glow */}
        <div
          className='absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] max-w-full h-[400px] rounded-full opacity-[0.06] blur-3xl pointer-events-none'
          style={{ background: 'radial-gradient(ellipse, #01B3FF, transparent)' }}
        />

        <motion.div
          initial='hidden'
          animate='visible'
          className='relative z-10 max-w-3xl'
        >
          {/* Eyebrow */}
          <motion.span
            variants={fadeUp}
            custom={0}
            className='inline-block text-[11px] font-semibold tracking-[0.2em] uppercase text-[#01B3FF] mb-6'
          >
            Need a Solution?
          </motion.span>

          {/* Headline */}
          <motion.h1
            variants={fadeUp}
            custom={0.05}
            className='text-4xl sm:text-5xl md:text-6xl font-bold text-zinc-100 font-display leading-[1.1] tracking-tight'
          >
            You Have a Business Problem.{' '}
            <span className='text-zinc-400'>Let&apos;s Figure Out the Technology.</span>
          </motion.h1>

          {/* Supporting copy */}
          <motion.p
            variants={fadeUp}
            custom={0.1}
            className='mt-6 text-base md:text-lg text-zinc-400 leading-relaxed max-w-2xl'
          >
            We help businesses turn ideas, broken systems, and inefficient
            processes into practical technology that saves time, creates
            opportunities, and moves the business forward.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={fadeUp}
            custom={0.15}
            className='mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-4'
          >
            <button
              onClick={() => openForm('unsure')}
              className='group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-lg text-sm font-semibold tracking-widest uppercase text-black transition-all duration-200 hover:opacity-90'
              style={{ background: '#01B3FF' }}
            >
              Let&apos;s Talk
              <ArrowRight className='w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5' />
            </button>
          </motion.div>

          {/* Secondary nudge */}
          <motion.p
            variants={fadeUp}
            custom={0.2}
            className='mt-5 text-xs text-zinc-600 tracking-wide'
          >
            You don&apos;t need a technical plan. Start with the problem.
          </motion.p>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className='absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2'
        >
          <div className='w-px h-12 bg-gradient-to-b from-zinc-600 to-transparent' />
        </motion.div>
      </section>

      <div className='w-full h-px bg-zinc-800' />

      {/* ── SECTION 2: DIAGNOSTIC / SELF-SELECTION ──────────────────────────── */}
      <section className='px-6 py-20 md:py-28 mx-auto max-w-5xl lg:px-8'>
        <motion.div
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, margin: '-80px' }}
        >
          <motion.p
            variants={fadeUp}
            custom={0}
            className='text-[11px] font-semibold tracking-[0.2em] uppercase text-zinc-500 mb-4'
          >
            Start Here
          </motion.p>
          <motion.h2
            variants={fadeUp}
            custom={0.05}
            className='text-3xl md:text-4xl font-bold text-zinc-100 font-display'
          >
            What&apos;s going on?
          </motion.h2>
          <motion.p
            variants={fadeUp}
            custom={0.1}
            className='mt-4 text-zinc-400 max-w-xl leading-relaxed'
          >
            Start wherever you are. You don&apos;t need to know exactly what you
            need—we&apos;ll help you figure out the right path.
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className='mt-10'
        >
          <DiagnosticCards onSelect={openForm} />
        </motion.div>

        {/* "Not sure" secondary block */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className='mt-8 border border-zinc-800 rounded-xl p-6 md:p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-5'
        >
          <div>
            <p className='text-base font-semibold text-zinc-200'>
              Not sure what you need?
            </p>
            <p className='mt-1.5 text-sm text-zinc-500 max-w-md leading-relaxed'>
              That&apos;s okay. You don&apos;t need to figure it out before you contact
              us. Tell us what&apos;s happening in your business, and we&apos;ll help you
              determine what makes sense.
            </p>
          </div>
          <button
            onClick={() => openForm('unsure')}
            className='group shrink-0 inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-zinc-300 hover:text-white border border-zinc-700 hover:border-zinc-500 rounded-lg px-5 py-3 transition-all duration-200'
          >
            Let&apos;s Figure It Out
            <ArrowRight className='w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5' />
          </button>
        </motion.div>
      </section>

      <div className='w-full h-px bg-zinc-800' />

      {/* ── SECTION 3: THE PROCESS ──────────────────────────────────────────── */}
      <section className='px-6 py-20 md:py-28 mx-auto max-w-5xl lg:px-8'>
        <motion.div
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, margin: '-80px' }}
        >
          <motion.p
            variants={fadeUp}
            custom={0}
            className='text-[11px] font-semibold tracking-[0.2em] uppercase text-zinc-500 mb-4'
          >
            How We Work
          </motion.p>
          <motion.h2
            variants={fadeUp}
            custom={0.05}
            className='text-3xl md:text-4xl font-bold text-zinc-100 font-display'
          >
            From Problem to Solution
          </motion.h2>
          <motion.p
            variants={fadeUp}
            custom={0.1}
            className='mt-4 text-zinc-400 max-w-xl leading-relaxed'
          >
            Technology is only useful when it solves the right problem. We start
            with your business—not the technology.
          </motion.p>
        </motion.div>

        <div className='mt-12 md:mt-16 grid grid-cols-1 sm:grid-cols-2 gap-px bg-zinc-800 rounded-xl overflow-hidden border border-zinc-800'>
          {processSteps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.45, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
              className='bg-zinc-950 p-6 md:p-8 group hover:bg-zinc-900/60 transition-colors duration-300'
            >
              <div className='flex items-start gap-5'>
                <span className='text-[11px] font-bold tracking-widest text-[#01B3FF] opacity-70 pt-1 shrink-0'>
                  {step.number}
                </span>
                <div>
                  <p className='text-[10px] font-semibold tracking-[0.18em] uppercase text-zinc-500 mb-2'>
                    {step.label}
                  </p>
                  <p className='text-sm text-zinc-400 leading-relaxed group-hover:text-zinc-300 transition-colors duration-200'>
                    {step.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <div className='w-full h-px bg-zinc-800' />

      {/* ── SECTION 4: TRUST / DIFFERENTIATION ──────────────────────────────── */}
      <section className='px-6 py-20 md:py-28 mx-auto max-w-5xl lg:px-8'>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className='relative border border-zinc-800 rounded-2xl p-8 md:p-12 overflow-hidden'
        >
          {/* Subtle background glow */}
          <div
            className='absolute -top-24 -right-24 w-64 h-64 rounded-full opacity-[0.04] blur-3xl pointer-events-none'
            style={{ background: '#34D399' }}
          />

          <p className='text-[11px] font-semibold tracking-[0.2em] uppercase text-zinc-500 mb-5'>
            Our Philosophy
          </p>
          <h2 className='text-3xl md:text-4xl font-bold text-zinc-100 font-display leading-tight max-w-2xl'>
            Sometimes, You Don&apos;t Need Custom Software.
          </h2>
          <p
            className='mt-3 text-lg font-medium'
            style={{ color: '#34D399' }}
          >
            We&apos;ll tell you if there&apos;s a simpler solution.
          </p>
          <p className='mt-5 text-zinc-400 leading-relaxed max-w-2xl'>
            Not every problem requires a custom application. Sometimes the right
            answer is an existing tool, an automation, an integration, or a
            process change. We&apos;ll help you find the solution that makes the most
            sense for your business—not simply the one that creates the most
            development work.
          </p>

          <div className='mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4'>
            {[
              { label: 'Custom Software', sub: 'When nothing else fits' },
              { label: 'Automation & AI', sub: 'When manual work slows you down' },
              { label: 'Integrations & Tools', sub: 'When the right tool already exists' },
            ].map((item) => (
              <div
                key={item.label}
                className='border border-zinc-800 rounded-lg p-4 bg-zinc-900/40'
              >
                <p className='text-sm font-semibold text-zinc-200'>{item.label}</p>
                <p className='mt-1 text-xs text-zinc-500 leading-relaxed'>{item.sub}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      <div className='w-full h-px bg-zinc-800' />

      {/* ── SECTION 5: CASE STUDIES ─────────────────────────────────────────── */}
      <section className='px-6 py-20 md:py-28 mx-auto max-w-5xl lg:px-8'>
        <motion.div
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, margin: '-80px' }}
        >
          <motion.p
            variants={fadeUp}
            custom={0}
            className='text-[11px] font-semibold tracking-[0.2em] uppercase text-zinc-500 mb-4'
          >
            Proof
          </motion.p>
          <motion.h2
            variants={fadeUp}
            custom={0.05}
            className='text-3xl md:text-4xl font-bold text-zinc-100 font-display'
          >
            Problems We&apos;ve Solved
          </motion.h2>
          <motion.p
            variants={fadeUp}
            custom={0.1}
            className='mt-4 text-zinc-400 max-w-xl leading-relaxed'
          >
            Every project starts with a business problem. Here&apos;s how we&apos;ve
            approached them.
          </motion.p>
        </motion.div>

        <div className='mt-10 md:mt-14 space-y-4'>
          {caseStudies.map((study, i) => (
            <motion.div
              key={study.slug}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className='group border border-zinc-800 rounded-xl overflow-hidden hover:border-zinc-700 transition-colors duration-300'
            >
              {/* Accent top line */}
              <div
                className='h-px w-full opacity-40 group-hover:opacity-70 transition-opacity duration-300'
                style={{ background: study.accentColor }}
              />

              <div className='p-6 md:p-8'>
                <div className='flex items-center justify-between gap-4 mb-6'>
                  <span
                    className='text-[10px] font-semibold tracking-[0.18em] uppercase'
                    style={{ color: study.accentColor }}
                  >
                    {study.label}
                  </span>
                  <Link
                    href={`/projects/${study.slug}`}
                    className='text-[10px] font-semibold tracking-widest uppercase text-zinc-600 hover:text-zinc-300 transition-colors duration-200 flex items-center gap-1.5'
                  >
                    View Project
                    <ArrowRight className='w-3 h-3' />
                  </Link>
                </div>

                <h3 className='text-xl md:text-2xl font-bold text-zinc-100 font-display mb-6'>
                  {study.title}
                </h3>

                <div className='grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6'>
                  <div>
                    <p className='text-[10px] font-semibold tracking-[0.16em] uppercase text-zinc-600 mb-2'>
                      The Problem
                    </p>
                    <p className='text-sm text-zinc-400 leading-relaxed'>
                      {study.problem}
                    </p>
                  </div>
                  <div>
                    <p className='text-[10px] font-semibold tracking-[0.16em] uppercase text-zinc-600 mb-2'>
                      The Solution
                    </p>
                    <p className='text-sm text-zinc-400 leading-relaxed'>
                      {study.solution}
                    </p>
                  </div>
                  <div>
                    <p className='text-[10px] font-semibold tracking-[0.16em] uppercase text-zinc-600 mb-2'>
                      The Outcome
                    </p>
                    <p className='text-sm text-zinc-400 leading-relaxed group-hover:text-zinc-300 transition-colors duration-200'>
                      {study.outcome}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className='mt-8 text-center'
        >
          <Link
            href='/projects'
            className='inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-zinc-500 hover:text-zinc-300 transition-colors duration-200'
          >
            See All Projects
            <ArrowRight className='w-3.5 h-3.5' />
          </Link>
        </motion.div>
      </section>

      <div className='w-full h-px bg-zinc-800' />

      {/* ── SECTION 6: FINAL CTA ─────────────────────────────────────────────── */}
      <section className='relative px-6 py-24 md:py-36 mx-auto max-w-5xl lg:px-8 text-center overflow-hidden'>
        {/* Background glow */}
        <div
          className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] max-w-full h-[300px] rounded-full opacity-[0.05] blur-3xl pointer-events-none'
          style={{ background: 'radial-gradient(ellipse, #01B3FF, transparent)' }}
        />

        <motion.div
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, margin: '-80px' }}
          className='relative z-10'
        >
          <motion.h2
            variants={fadeUp}
            custom={0}
            className='text-3xl sm:text-4xl md:text-5xl font-bold text-zinc-100 font-display leading-tight'
          >
            Don&apos;t Know What You Need Yet?
          </motion.h2>

          <motion.p
            variants={fadeUp}
            custom={0.05}
            className='mt-4 text-lg text-zinc-500'
          >
            That&apos;s exactly what the conversation is for.
          </motion.p>

          <motion.p
            variants={fadeUp}
            custom={0.1}
            className='mt-3 text-base text-zinc-400 max-w-md mx-auto leading-relaxed'
          >
            Come to us with the problem. We&apos;ll help you figure out the
            solution.
          </motion.p>

          <motion.div
            variants={fadeUp}
            custom={0.15}
            className='mt-10'
          >
            <button
              onClick={() => openForm('unsure')}
              className='group inline-flex items-center gap-2.5 px-8 py-4 rounded-lg text-sm font-semibold tracking-widest uppercase text-black transition-all duration-200 hover:opacity-90'
              style={{ background: '#01B3FF' }}
            >
              Let&apos;s Talk
              <ArrowRight className='w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5' />
            </button>
          </motion.div>

          <motion.p
            variants={fadeUp}
            custom={0.2}
            className='mt-5 text-xs text-zinc-600 tracking-wide'
          >
            No technical specification required.
          </motion.p>
        </motion.div>
      </section>

      {/* ── CONTACT FORM MODAL ───────────────────────────────────────────────── */}
      <AnimatePresence>
        {activeInquiry !== null && (
          <ContactForm inquiryType={activeInquiry} onClose={closeForm} />
        )}
      </AnimatePresence>
    </div>
  );
}
