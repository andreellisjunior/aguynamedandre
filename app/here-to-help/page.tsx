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
            From Idea to Execution—Tech + Strategy That Moves Your Business
            Forward
          </h2>
          <p className='mt-4 text-zinc-400'>
            When your vision needs more than just a website or an app—when you
            need a partner who understands growth, strategy, and execution—this
            is where it starts. Whether you're launching something new, scaling
            what works, or fixing what's broken, I combine sharp business
            thinking with smart, scalable tech to get you there.
          </p>
        </div>
        <div className='w-full h-px bg-zinc-800' />

        <div className='grid grid-cols-1 gap-8 mx-auto lg:grid-cols-1 text-white'>
          <div className='grid md:grid-cols-2 gap-4'>
            <Card>
              <Link href='#get-in-touch' className='block'>
                <div className='relative w-full h-full p-4 md:p-8'>
                  <div className='flex items-center justify-between gap-2'>
                    <div className='text-xs text-zinc-100'>
                      <span>IDEA TO EXECUTION</span>
                    </div>
                  </div>

                  <h2
                    id='featured-post'
                    className='mt-4 text-3xl font-bold text-zinc-100 group-hover:text-white sm:text-4xl font-display capitalize'
                  >
                    I have an idea!
                  </h2>
                  <p className='mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300'>
                    We'll turn your vision into a reality—from planning to
                    prototype to product.
                  </p>
                  <div className='absolute bottom-4 md:bottom-8'></div>
                </div>
              </Link>
            </Card>
            <Card>
              <Link href='#get-in-touch' className='block'>
                <div className='relative w-full h-full p-4 md:p-8'>
                  <div className='flex items-center justify-between gap-2'>
                    <div className='text-xs text-zinc-100'>
                      <span>PRODUCT SUPPORT</span>
                    </div>
                  </div>

                  <h2
                    id='featured-post'
                    className='mt-4 text-3xl font-bold text-zinc-100 group-hover:text-white sm:text-4xl font-display capitalize'
                  >
                    I have something that needs fixing
                  </h2>
                  <p className='mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300'>
                    Need help with your current site or app? Let's improve it
                    together.
                  </p>
                  <div className='absolute bottom-4 md:bottom-8'></div>
                </div>
              </Link>
            </Card>
            <Card>
              <Link href='#get-in-touch' className='block'>
                <div className='relative w-full h-full p-4 md:p-8'>
                  <div className='flex items-center justify-between gap-2'>
                    <div className='text-xs text-zinc-100'>
                      <span>PARTNER UP</span>
                    </div>
                  </div>

                  <h2
                    id='featured-post'
                    className='mt-4 text-3xl font-bold text-zinc-100 group-hover:text-white sm:text-4xl font-display'
                  >
                    I want a tech-savvy business partner
                  </h2>
                  <p className='mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300'>
                    You handle the vision—I'll handle the tech. Let's grow
                    together.
                  </p>
                  <div className='absolute bottom-4 md:bottom-8'></div>
                </div>
              </Link>
            </Card>
            <Card>
              <Link href='#get-in-touch' className='block'>
                <div className='relative w-full h-full p-4 md:p-8'>
                  <div className='flex items-center justify-between gap-2'>
                    <div className='text-xs text-zinc-100'>
                      <span>NOT SURE YET?</span>
                    </div>
                  </div>

                  <h2
                    id='featured-post'
                    className='mt-4 text-3xl font-bold text-zinc-100 group-hover:text-white sm:text-4xl font-display'
                  >
                    I just need to talk it through
                  </h2>
                  <p className='mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300'>
                    Book a call and let's figure out the right path forward.
                  </p>
                  <div className='absolute bottom-4 md:bottom-8'></div>
                </div>
              </Link>
            </Card>
          </div>

          {/* <div className='flex flex-col w-full gap-8 mx-auto border-t border-gray-900/10 lg:mx-0 lg:border-t-0 text-white'>
            <div className='relative w-full h-[500px]'>
              <Image
                fill
                className='rounded-xl object-cover'
                src='/assets/andre-ellis-jr.jpg'
                alt='headshot'
              />
            </div>
          </div> */}
        </div>
        <div className='hidden w-full h-px md:block bg-zinc-800' />
        <div
          id='get-in-touch'
          className='flex flex-col items-center justify-center'
        >
          <p className='mb-4 text-zinc-400'>
            Reach out today and let's have a conversation.
          </p>
          <div className='mx-auto lg:mx-0 text-white'>
            <div className='grid grid-cols-1 gap-4'>
              <Card>
                <Link
                  className='p-4 inline-block'
                  href='https://hxofehv25u9.typeform.com/to/QWRQM8r1'
                  target='_blank'
                >
                  GET IN TOUCH!
                </Link>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
