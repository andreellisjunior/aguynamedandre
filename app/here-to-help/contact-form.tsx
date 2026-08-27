'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, X, CheckCircle2 } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import type { InquiryType } from './diagnostic-cards';

interface FormConfig {
  title: string;
  subtitle: string;
  accentColor: string;
  inquiryLabel: string;
  placeholder: string;
}

const formConfigs: Record<InquiryType, FormConfig> = {
  build: {
    title: "Let's Build It",
    subtitle: "Tell us about what you're trying to create.",
    accentColor: '#01B3FF',
    inquiryLabel: 'BUILD SOMETHING NEW',
    placeholder: "I'm trying to build...",
  },
  fix: {
    title: 'Help Me Fix It',
    subtitle: "Tell us what's not working and how it's affecting your business.",
    accentColor: '#FF6B6B',
    inquiryLabel: 'FIX SOMETHING BROKEN',
    placeholder: "The issue I'm running into is...",
  },
  automate: {
    title: 'Find a Better Way',
    subtitle: "Describe the manual work slowing your team down.",
    accentColor: '#A78BFA',
    inquiryLabel: 'AUTOMATE & IMPROVE',
    placeholder: "Right now we're spending time manually...",
  },
  partner: {
    title: "Let's Partner",
    subtitle: "Tell us about your business and what you need someone to own.",
    accentColor: '#34D399',
    inquiryLabel: 'TECHNOLOGY PARTNER',
    placeholder: "My business does... and I need help with...",
  },
  unsure: {
    title: "Let's Figure It Out",
    subtitle: "Just tell us what's going on. No technical plan required.",
    accentColor: '#01B3FF',
    inquiryLabel: "NOT SURE YET",
    placeholder: "Here's what's happening in my business...",
  },
};

interface ContactFormProps {
  inquiryType: InquiryType;
  onClose: () => void;
}

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

export function ContactForm({ inquiryType, onClose }: ContactFormProps) {
  const config = formConfigs[inquiryType];
  const [status, setStatus] = useState<FormStatus>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    businessName: '',
    problem: '',
    currentProcess: '',
    timeline: '',
  });
  const overlayRef = useRef<HTMLDivElement>(null);

  // Close on backdrop click
  function handleBackdropClick(e: React.MouseEvent<HTMLDivElement>) {
    if (e.target === overlayRef.current) onClose();
  }

  // Close on Escape key
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose();
    }
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  // Lock body scroll while open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, []);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus('submitting');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          inquiryType,
          ...formData,
        }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data?.error ?? 'Something went wrong.');
      }

      setStatus('success');
    } catch (err) {
      console.error('[ContactForm] submit error:', err);
      setStatus('error');
    }
  }

  const inputBase =
    'w-full bg-zinc-900 border border-zinc-700 rounded-lg px-4 py-3 text-sm text-zinc-100 placeholder-zinc-600 focus:outline-none focus:border-zinc-500 transition-colors duration-200';

  const labelBase = 'block text-xs font-semibold tracking-widest uppercase text-zinc-500 mb-2';

  return (
    <motion.div
      ref={overlayRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      onClick={handleBackdropClick}
      className='fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm'
    >
      <motion.div
        initial={{ opacity: 0, y: 24, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 16, scale: 0.97 }}
        transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
        className='relative w-full max-w-lg max-h-[90vh] overflow-y-auto bg-zinc-950 border border-zinc-800 rounded-2xl shadow-2xl'
      >
        {/* Accent bar */}
        <div
          className='absolute top-0 left-0 right-0 h-px rounded-t-2xl'
          style={{ background: `linear-gradient(to right, transparent, ${config.accentColor}80, transparent)` }}
        />

        <div className='p-6 md:p-8'>
          {/* Header */}
          <div className='flex items-start justify-between mb-6'>
            <div>
              <span
                className='text-[10px] font-semibold tracking-widest uppercase block mb-2'
                style={{ color: config.accentColor }}
              >
                {config.inquiryLabel}
              </span>
              <h2 className='text-2xl font-bold text-zinc-100 font-display'>{config.title}</h2>
              <p className='mt-1 text-sm text-zinc-400'>{config.subtitle}</p>
            </div>
            <button
              onClick={onClose}
              className='ml-4 mt-1 text-zinc-600 hover:text-zinc-300 transition-colors shrink-0'
              aria-label='Close'
            >
              <X className='w-5 h-5' />
            </button>
          </div>

          {status === 'success' ? (
            <div className='flex flex-col items-center justify-center py-12 text-center gap-4'>
              <CheckCircle2 className='w-12 h-12' style={{ color: config.accentColor }} />
              <h3 className='text-xl font-bold text-zinc-100 font-display'>We got your message.</h3>
              <p className='text-sm text-zinc-400 max-w-xs'>
                We&apos;ll be in touch shortly. In the meantime, feel free to{' '}
                <a
                  href='mailto:hello@aguynamedandre.com'
                  className='underline text-zinc-300 hover:text-white'
                >
                  email us directly
                </a>
                .
              </p>
              <button
                onClick={onClose}
                className='mt-2 text-xs font-semibold tracking-widest uppercase text-zinc-500 hover:text-zinc-300 transition-colors'
              >
                Close
              </button>
            </div>
          ) : status === 'error' ? (
            <div className='flex flex-col items-center justify-center py-12 text-center gap-4'>
              <div className='w-12 h-12 rounded-full border border-red-500/40 flex items-center justify-center'>
                <X className='w-5 h-5 text-red-400' />
              </div>
              <h3 className='text-xl font-bold text-zinc-100 font-display'>Something went wrong.</h3>
              <p className='text-sm text-zinc-400 max-w-xs'>
                Your message didn&apos;t go through. Please{' '}
                <a
                  href='mailto:hello@aguynamedandre.com'
                  className='underline text-zinc-300 hover:text-white'
                >
                  email us directly
                </a>{' '}
                or try again.
              </p>
              <button
                onClick={() => setStatus('idle')}
                className='mt-2 text-xs font-semibold tracking-widest uppercase text-zinc-400 hover:text-zinc-200 border border-zinc-700 hover:border-zinc-500 rounded-lg px-5 py-2.5 transition-all duration-200'
              >
                Try Again
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className='space-y-5'>
              {/* Name + Email */}
              <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                <div>
                  <label htmlFor='name' className={labelBase}>
                    Your Name
                  </label>
                  <input
                    id='name'
                    name='name'
                    type='text'
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder='Johnathan Wick'
                    className={inputBase}
                  />
                </div>
                <div>
                  <label htmlFor='email' className={labelBase}>
                    Email Address
                  </label>
                  <input
                    id='email'
                    name='email'
                    type='email'
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder='you@yourcompany.com'
                    className={inputBase}
                  />
                </div>
              </div>

              {/* Business name */}
              <div>
                <label htmlFor='businessName' className={labelBase}>
                  Business Name <span className='text-zinc-700 normal-case font-normal tracking-normal'>(optional)</span>
                </label>
                <input
                  id='businessName'
                  name='businessName'
                  type='text'
                  value={formData.businessName}
                  onChange={handleChange}
                  placeholder='Your company or project name'
                  className={inputBase}
                />
              </div>

              {/* Main problem */}
              <div>
                <label htmlFor='problem' className={labelBase}>
                  What are you trying to accomplish?
                </label>
                <textarea
                  id='problem'
                  name='problem'
                  required
                  rows={4}
                  value={formData.problem}
                  onChange={handleChange}
                  placeholder={config.placeholder}
                  className={`${inputBase} resize-none`}
                />
              </div>

              {/* Current process */}
              <div>
                <label htmlFor='currentProcess' className={labelBase}>
                  What does your current process look like?
                </label>
                <textarea
                  id='currentProcess'
                  name='currentProcess'
                  rows={3}
                  value={formData.currentProcess}
                  onChange={handleChange}
                  placeholder="Right now we handle this by..."
                  className={`${inputBase} resize-none`}
                />
              </div>

              {/* Timeline */}
              <div>
                <label htmlFor='timeline' className={labelBase}>
                  Ideal Timeline
                </label>
                <select
                  id='timeline'
                  name='timeline'
                  value={formData.timeline}
                  onChange={handleChange}
                  className={`${inputBase} appearance-none`}
                >
                  <option value='' disabled>Select a range...</option>
                  <option value='asap'>As soon as possible</option>
                  <option value='1-2months'>1–2 months</option>
                  <option value='3-6months'>3–6 months</option>
                  <option value='6months+'>6+ months</option>
                  <option value='exploring'>Just exploring for now</option>
                </select>
              </div>

              {/* Submit */}
              <button
                type='submit'
                disabled={status === 'submitting'}
                className='w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-lg text-xs font-semibold tracking-widest uppercase transition-all duration-200 disabled:opacity-60'
                style={{
                  background: config.accentColor,
                  color: '#000',
                }}
              >
                {status === 'submitting' ? (
                  'SENDING...'
                ) : (
                  <>
                    SEND IT
                    <ArrowRight className='w-3.5 h-3.5' />
                  </>
                )}
              </button>

              <p className='text-center text-xs text-zinc-600'>
                No technical specification required.
              </p>
            </form>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}
