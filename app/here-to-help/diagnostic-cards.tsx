'use client';

import { motion, useMotionTemplate, useMotionValue, useSpring } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { PropsWithChildren } from 'react';

export type InquiryType = 'build' | 'fix' | 'automate' | 'partner' | 'unsure';

interface DiagnosticCard {
  id: InquiryType;
  label: string;
  headline: string;
  description: string;
  cta: string;
  accentColor: string;
}

const cards: DiagnosticCard[] = [
  {
    id: 'build',
    label: 'BUILD SOMETHING NEW',
    headline: 'I Need to Build Something',
    description:
      'I have an idea, process, or business need that could be solved with technology.',
    cta: "LET'S BUILD IT",
    accentColor: '#01B3FF',
  },
  {
    id: 'fix',
    label: 'FIX SOMETHING BROKEN',
    headline: "My Technology Isn't Working",
    description:
      'My website, app, system, or existing technology needs attention, improvement, or a complete overhaul.',
    cta: 'HELP ME FIX IT',
    accentColor: '#FF6B6B',
  },
  {
    id: 'automate',
    label: 'AUTOMATE & IMPROVE',
    headline: "We're Doing Too Much Manually",
    description:
      "We're wasting time on repetitive work, spreadsheets, data entry, communication, or processes that should be easier.",
    cta: 'FIND A BETTER WAY',
    accentColor: '#A78BFA',
  },
  {
    id: 'partner',
    label: 'TECHNOLOGY PARTNER',
    headline: 'I Need Someone to Own the Tech',
    description:
      "I know my business. I need someone who can help make the right technology decisions and handle the execution.",
    cta: "LET'S PARTNER",
    accentColor: '#34D399',
  },
];

interface MotionCardProps extends PropsWithChildren {
  accentColor: string;
  onClick: () => void;
}

function MotionCard({ children, accentColor, onClick }: MotionCardProps) {
  const mouseX = useSpring(0, { stiffness: 500, damping: 100 });
  const mouseY = useSpring(0, { stiffness: 500, damping: 100 });

  function onMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent<HTMLDivElement>) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  const maskImage = useMotionTemplate`radial-gradient(280px at ${mouseX}px ${mouseY}px, white, transparent)`;
  const style = { maskImage, WebkitMaskImage: maskImage };

  return (
    <div
      onMouseMove={onMouseMove}
      onClick={onClick}
      className='overflow-hidden relative duration-300 border rounded-xl hover:bg-zinc-800/10 group cursor-pointer hover:border-zinc-400/50 border-zinc-700'
      style={{ '--accent': accentColor } as React.CSSProperties}
    >
      <div className='pointer-events-none'>
        <div className='absolute inset-0 z-0 transition duration-1000 [mask-image:linear-gradient(black,transparent)]' />
        <motion.div
          className='absolute inset-0 z-10 bg-gradient-to-br opacity-100 via-zinc-100/10 transition duration-1000 group-hover:opacity-50'
          style={style}
        />
        <motion.div
          className='absolute inset-0 z-10 opacity-0 mix-blend-overlay transition duration-1000 group-hover:opacity-100'
          style={style}
        />
      </div>
      {children}
    </div>
  );
}

interface DiagnosticCardsProps {
  onSelect: (type: InquiryType) => void;
}

export function DiagnosticCards({ onSelect }: DiagnosticCardsProps) {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
      {cards.map((card) => (
        <MotionCard key={card.id} accentColor={card.accentColor} onClick={() => onSelect(card.id)}>
          <div className='relative w-full h-full p-6 md:p-8'>
            {/* Accent line top */}
            <div
              className='absolute top-0 left-6 right-6 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500'
              style={{ background: `linear-gradient(to right, transparent, ${card.accentColor}60, transparent)` }}
            />

            <div className='flex items-center justify-between gap-2 mb-5'>
              <span
                className='text-[10px] font-semibold tracking-widest uppercase'
                style={{ color: card.accentColor }}
              >
                {card.label}
              </span>
            </div>

            <h3 className='text-2xl md:text-3xl font-bold text-zinc-100 group-hover:text-white font-display leading-tight'>
              {card.headline}
            </h3>
            <p className='mt-3 text-sm leading-7 text-zinc-400 group-hover:text-zinc-300 duration-150'>
              {card.description}
            </p>

            <div className='mt-6 flex items-center gap-2'>
              <span
                className='text-xs font-semibold tracking-widest uppercase transition-colors duration-200'
                style={{ color: card.accentColor }}
              >
                {card.cta}
              </span>
              <ArrowRight
                className='w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1'
                style={{ color: card.accentColor }}
              />
            </div>
          </div>
        </MotionCard>
      ))}
    </div>
  );
}
