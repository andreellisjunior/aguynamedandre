'use client';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';

export const Navigation: React.FC = () => {
  const ref = useRef<HTMLElement>(null);
  const [isIntersecting, setIntersecting] = useState(true);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(([entry]) =>
      setIntersecting(entry.isIntersecting)
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <header ref={ref}>
      <div
        className={`fixed inset-x-0 top-0 z-50 backdrop-blur  duration-200 border-b  ${
          isIntersecting
            ? 'bg-zinc-900/0 border-transparent'
            : 'bg-zinc-900/500  border-zinc-800 '
        }`}
      >
        <div className='container flex flex-row-reverse items-center justify-between p-6 mx-auto'>
          <div className='flex justify-between gap-8 text-sm'>
            <Link
              href='/about'
              className='duration-200 text-zinc-400 hover:text-zinc-100'
            >
              About
            </Link>
            <Link
              href='/projects'
              className='duration-200 text-zinc-400 hover:text-zinc-100'
            >
              Projects
            </Link>
            <Link
              href='/contact'
              className='duration-200 text-zinc-400 hover:text-zinc-100'
            >
              Contact
            </Link>
            <Link
              href='/here-to-help'
              className='duration-200 text-zinc-400 hover:text-zinc-100 relative after:absolute after:-bottom-1 after:left-0 after:h-[1px] after:w-full after:bg-[#01B3FF] after:transition-all after:duration-300 hover:after:h-full hover:after:bottom-0 hover:after:bg-[#01B3FF] after:-z-10 px-2 hover:px-2 hover:py-1 hover:rounded italic'
            >
              Need A Solution?
            </Link>
          </div>

          <Link
            href='/'
            className='duration-200 text-zinc-300 hover:text-zinc-100'
          >
            <ArrowLeft className='w-6 h-6 ' />
          </Link>
        </div>
      </div>
    </header>
  );
};
