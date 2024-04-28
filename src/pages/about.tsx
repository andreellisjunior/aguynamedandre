import Button from '@/components/Button/Button';
import Experience from '@/components/Experience/Experience';
import Projects from '@/components/Projects/Projects';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import Arrow from '../../public/Arrow.svg';
import headShot from '../../public/andre-ellis-jr.png';
import ButtonGroup from '@/components/Button/ButtonGroup';
import FileHead from '@/components/FileHead/FileHead';

const about = () => {
  return (
    <>
      <FileHead title='About' />
      <main className='font-monts lg:grid gap-4 lg:grid-cols-2 lg:grid-rows-3 h-auto min-h-[85vh] justify-between flex flex-col mb-20 lg:mb-0'>
        <div className='about-section border-[0.5px] border-gray-400 rounded-2xl px-4 py-4 bg-white bg-opacity-5 drop-shadow-md  h-full'>
          <div className='title'>
            <h2 className='font-semibold mb-4'>My Name is André Ellis Jr.</h2>
          </div>
          <p>
            I’m a seasoned full stack developer with 6 years of experience
            designing and developing websites and software applications.
            Proficient in web development, UX design principles, modular
            systems, and process improvement for rapid growth and team
            management. Skilled in building application&apos;s user experience
            to deliver information effectively and aesthetically to site
            visitors.
          </p>
          <p>Check out some good people while here:</p>
          <ButtonGroup
            links={[
              { href: `https://whaies.dev/`, title: `whaies.dev` },
              { href: `https://andyficek.netlify.app`, title: `andyficek.dev` },
              { href: `https://www.bensievert.dev/`, title: `bensievert.dev` },
            ]}
          ></ButtonGroup>
        </div>
        <div className='headshot border-[0.5px] border-gray-400 rounded-2xl px-4 py-4 bg-white bg-opacity-5 drop-shadow-2xl row-span-2 h-96 sm:h-[75vh] lg:h-full relative'>
          <Image
            src={headShot}
            alt='Andre Ellis Jr.'
            fill
            sizes='cover'
            className='object-cover rounded-2xl'
          ></Image>
        </div>
        <Experience />
        <div className='contact-section  border-[0.5px] border-gray-400 h-full rounded-2xl px-4 py-4 bg-white bg-opacity-5 drop-shadow-2xl'>
          <div className='title'>
            <h2 className='font-semibold mb-4'>
              <Link
                href={'mailto:andreellisjunior@gmail.com'}
                className='flex gap-3'
              >
                CONTACT <Image src={Arrow} alt='arrow' />
              </Link>
            </h2>
          </div>
          <p>
            Have a comment, question, request? Reach out! I’d love you here from
            you!
          </p>
          <Button
            href='mailto:andreellisjunior@gmail.com'
            linkText='Get In Touch'
          />
        </div>
      </main>
    </>
  );
};

export default about;
