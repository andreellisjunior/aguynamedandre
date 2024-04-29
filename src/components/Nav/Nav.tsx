import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import Logo from '../../../public/logo-white.svg';
import DarkLogo from '../../../public/dark-logo.svg';
import { useTheme } from 'next-themes';

const Nav = () => {
  const { resolvedTheme } = useTheme();
  const [logo, setLogo] = useState(Logo);

  useEffect(() => {
    resolvedTheme == 'dark' ? setLogo(Logo) : setLogo(DarkLogo);
  }, [resolvedTheme]);

  return (
    <nav className='h-full flex lg:flex-col flex-row justify-between sm:justify-start relative'>
      <div className='logo hidden lg:block'>
        <Image
          className='w-48 h-auto'
          width={192}
          height={192}
          src={logo}
          alt='A Guy Named Andre Logo'
        />
      </div>
      <div className='nav-link-wrapper w-full sm:w-auto font-nunito'>
        <ul className='flex lg:flex-col flex-row items-center lg:items-start justify-between'>
          <li className='py-5 lg:py-10 text-base px-2 sm:px-8 lg:px-0'>
            <Link
              href={'/'}
              className='flex items-center gap-2 lg:flex-row flex-col'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
                fill='currentColor'
                className='w-6 h-6'
              >
                <path d='M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z' />
                <path d='m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z' />
              </svg>

              <span className='hidden sm:block'>DASHBOARD</span>
            </Link>
          </li>
          <li className='py-5 lg:py-10 text-base px-2 sm:px-8 lg:px-0'>
            <Link
              href={'/about'}
              className='flex items-center gap-2  lg:flex-row flex-col'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
                fill='currentColor'
                className='w-6 h-6'
              >
                <path
                  fillRule='evenodd'
                  d='M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z'
                  clipRule='evenodd'
                />
              </svg>

              <span className='hidden sm:block'>ABOUT</span>
            </Link>
          </li>
          <li className='py-5 lg:py-10 text-base px-2 sm:px-8 lg:px-0'>
            <Link
              href={'/projects'}
              className='flex items-center gap-2  lg:flex-row flex-col'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
                fill='currentColor'
                className='w-6 h-6'
              >
                <path
                  fillRule='evenodd'
                  d='M14.447 3.026a.75.75 0 0 1 .527.921l-4.5 16.5a.75.75 0 0 1-1.448-.394l4.5-16.5a.75.75 0 0 1 .921-.527ZM16.72 6.22a.75.75 0 0 1 1.06 0l5.25 5.25a.75.75 0 0 1 0 1.06l-5.25 5.25a.75.75 0 1 1-1.06-1.06L21.44 12l-4.72-4.72a.75.75 0 0 1 0-1.06Zm-9.44 0a.75.75 0 0 1 0 1.06L2.56 12l4.72 4.72a.75.75 0 0 1-1.06 1.06L.97 12.53a.75.75 0 0 1 0-1.06l5.25-5.25a.75.75 0 0 1 1.06 0Z'
                  clipRule='evenodd'
                />
              </svg>

              <span className='hidden sm:block'>PROJECTS</span>
            </Link>
          </li>
          <li className='py-5 lg:py-10 text-base px-2 sm:px-8 lg:px-0'>
            <Link
              href={'mailto:andreellisjunior@gmail.com'}
              className='flex items-center gap-2  lg:flex-row flex-col'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
                fill='currentColor'
                className='w-6 h-6'
              >
                <path d='M3.478 2.404a.75.75 0 0 0-.926.941l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.404Z' />
              </svg>

              <span className='hidden sm:block'>CONTACT</span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
