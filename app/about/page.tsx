import React from 'react';
import { Navigation } from '../components/nav';
import { Card } from '../components/card';
import Image from 'next/image';
import Link from 'next/link';

// const redis = Redis.fromEnv();

// export const revalidate = 60;
export default async function ProjectsPage() {
  // const views = (
  //   await redis.mget<number[]>(
  //     ...allProjects.map((p) => ['pageviews', 'projects', p.slug].join(':'))
  //   )
  // ).reduce((acc, v, i) => {
  //   acc[allProjects[i].slug] = v ?? 0;
  //   return acc;
  // }, {} as Record<string, number>);

  // const featured = allProjects.find((project) => project.slug === 'unkey')!;
  // const top2 = allProjects.find((project) => project.slug === 'planetfall')!;
  // const top3 = allProjects.find((project) => project.slug === 'highstorm')!;
  // const sorted = allProjects
  //   .filter((p) => p.published)
  //   .filter(
  //     (project) =>
  //       project.slug !== featured.slug &&
  //       project.slug !== top2.slug &&
  //       project.slug !== top3.slug
  //   )
  //   .sort(
  //     (a, b) =>
  //       new Date(b.date ?? Number.POSITIVE_INFINITY).getTime() -
  //       new Date(a.date ?? Number.POSITIVE_INFINITY).getTime()
  //   );

  const icons = (
    <>
      <i className='devicon-html5-plain text-8xl w-full mx-4' />
      <i className='devicon-css3-plain text-8xl w-full mx-4' />
      <i className='devicon-javascript-plain text-8xl w-full mx-4' />
      <i className='devicon-typescript-plain text-8xl w-full mx-4' />
      <i className='devicon-react-plain text-8xl w-full mx-4' />
      <i className='devicon-bootstrap-plain text-8xl w-full mx-4' />
      <i className='devicon-tailwindcss-plain text-8xl w-full mx-4' />
      <i className='devicon-figma-plain text-8xl w-full mx-4' />
      <i className='devicon-nodejs-plain text-8xl w-full mx-4' />
      <i className='devicon-express-original text-8xl w-full mx-4' />
      <i className='devicon-mysql-plain text-8xl w-full mx-4' />
      <i className='devicon-postgresql-plain text-8xl w-full mx-4' />
      <i className='devicon-mongodb-plain text-8xl w-full mx-4' />
      <i className='devicon-amazonwebservices-plain text-8xl w-full mx-4' />
    </>
  );

  return (
    <div className='relative pb-16'>
      <Navigation />
      <div className='px-6 pt-20 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32'>
        <div className='max-w-2xl mx-auto lg:mx-0'>
          <h2 className='text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl'>
            I'm André Ellis Jr.
          </h2>
          <p className='mt-4 text-zinc-400'>
            I'm a seasoned full stack developer with{' '}
            {new Date().getFullYear() - 2016} years of experience designing and
            developing websites and software applications. Proficient in web
            development, UX design principles, modular systems, and process
            improvement for rapid growth and team management. Skilled in
            building application's user experience to deliver information
            effectively and aesthetically to site visitors.
          </p>
        </div>
        <div className='w-full h-px bg-zinc-800' />

        <div className='grid grid-cols-1 gap-8 mx-auto lg:grid-cols-2 text-white'>
          <div className='grid grid-cols-2 gap-4'>
            <Card>
              <div className='relative w-full h-full p-4 md:p-8'>
                <div className='flex items-center justify-between gap-2'>
                  <div className='text-xs text-zinc-100'>
                    <span>YEARS EXP.</span>
                  </div>
                </div>

                <h2
                  id='featured-post'
                  className='mt-4 text-3xl font-bold text-zinc-100 group-hover:text-white sm:text-4xl font-display'
                >
                  {new Date().getFullYear() - 2016} years
                </h2>
                <p className='mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300'>
                  solving problems with technology.
                </p>
                <div className='absolute bottom-4 md:bottom-8'></div>
              </div>
            </Card>
            <Card>
              <div className='relative w-full h-full p-4 md:p-8'>
                <div className='flex items-center justify-between gap-2'>
                  <div className='text-xs text-zinc-100'>
                    <span>KNOWN TECH.</span>
                  </div>
                </div>
                <div className='marquee overflow-hidden flex justify-center items-center relative mt-4'>
                  <div className='animate-marquee whitespace-nowrap flex justify-center items-center gap-5'>
                    {icons}
                    {icons}
                  </div>
                </div>
                <p className='mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300'>
                  experience with popular technologies
                </p>
                <div className='absolute bottom-4 md:bottom-8'></div>
              </div>
            </Card>
            <Card>
              <div className='relative w-full h-full p-4 md:p-8'>
                <div className='flex items-center justify-between gap-2'>
                  <div className='text-xs text-zinc-100'>
                    <span>CURRENT POS.</span>
                  </div>
                </div>

                <h2
                  id='featured-post'
                  className='mt-4 text-3xl font-bold text-zinc-100 group-hover:text-white sm:text-4xl font-display'
                >
                  Software Engineer
                </h2>
                <p className='mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300'>
                  @ Precision Planting - Radicle Agronomics
                </p>
                <div className='absolute bottom-4 md:bottom-8'></div>
              </div>
            </Card>
            <Card>
              <div className='relative w-full h-full p-4 md:p-8'>
                <div className='flex items-center justify-between gap-2'>
                  <div className='text-xs text-zinc-100'>
                    <span>FAVORITE LANG.</span>
                  </div>
                </div>

                <h2
                  id='featured-post'
                  className='mt-4 text-3xl font-bold text-zinc-100 group-hover:text-white sm:text-4xl font-display'
                >
                  <i className='devicon-typescript-plain text-7xl'></i>
                </h2>
                <p className='mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300'>
                  using typescript for front-end and back-end.
                </p>
                <div className='absolute bottom-4 md:bottom-8'></div>
              </div>
            </Card>
          </div>

          <div className='flex flex-col w-full gap-8 mx-auto border-t border-gray-900/10 lg:mx-0 lg:border-t-0 text-white'>
            <div className='relative w-full h-[500px]'>
              <Image
                fill
                className='rounded-xl object-cover'
                src='/assets/andre-ellis-jr.jpg'
                alt='headshot'
              />
            </div>
          </div>
        </div>
        <div className='hidden w-full h-px md:block bg-zinc-800' />
        <div>
          <p className='mt-4 mb-4 text-zinc-400'>
            Check out some good people while here:
          </p>
          <div className='grid grid-cols-2 gap-4 mx-auto lg:mx-0 md:grid-cols-6 text-white'>
            <div className='grid grid-cols-1 gap-4'>
              <Card>
                <Link
                  className='p-2 inline-block'
                  href='https://whaies.dev/'
                  target='_blank'
                >
                  whaies.dev
                </Link>
              </Card>
            </div>
            <div className='grid grid-cols-1 gap-4'>
              <Card>
                <Link
                  className='p-2 inline-block'
                  href='https://andyficek.dev/'
                  target='_blank'
                >
                  andyficek.dev
                </Link>
              </Card>
            </div>
            <div className='grid grid-cols-1 gap-4'>
              <Card>
                <Link
                  className='p-2 inline-block'
                  href='https://bensievert.dev/'
                  target='_blank'
                >
                  bensievert.dev
                </Link>
              </Card>
            </div>
            <div className='grid grid-cols-1 gap-4'>
              <Card>
                <Link
                  className='p-2 inline-block'
                  href='https://andrewgilliland.dev/'
                  target='_blank'
                >
                  andrewgilliland.dev
                </Link>
              </Card>
            </div>
            <div className='grid grid-cols-1 gap-4'>
              <Card>
                <Link
                  className='p-2 inline-block'
                  href='https://jorgecolon.design/'
                  target='_blank'
                >
                  jorgecolon.design
                </Link>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
