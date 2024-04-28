import React from 'react';

const Tech = () => {
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
    <div className='marquee overflow-hidden flex justify-center items-center h-[75%] relative'>
      <div className='animate-marquee whitespace-nowrap flex justify-center items-center gap-5'>
        {icons}
        {icons}
      </div>
    </div>
  );
};

export default Tech;
