import Image from 'next/image';
import React from 'react';
import JSImage from '../../../public/technologies/javascript.svg';
import Tech from '../Technologies/Tech';

const Experience = () => {
  return (
    <div className='experience-grid h-full row-span-2 flex flex-col sm:grid grid-cols-2 grid-rows-2 gap-4'>
      <div className='border-[0.5px] border-gray-400 h-full rounded-2xl px-4 py-4 bg-white bg-opacity-5 drop-shadow-2xl'>
        <h2 className='font-semibold mb-4'>YEARS EXP.</h2>
        <div className='flex justify-center items-center h-[75%]'>
          <h3 className='text-8xl font-monts font-bold'>
            {new Date().getFullYear() - 2016}
            <sub className='text-2xl font-normal'>/yrs.</sub>
          </h3>
        </div>
      </div>
      <div className='border-[0.5px] border-gray-400 h-full rounded-2xl px-4 py-4 bg-white bg-opacity-5 drop-shadow-2xl overflow-hidden'>
        <h2 className='font-semibold mb-4'>TECHNOLOGIES</h2>
        <Tech />
      </div>
      <div className='border-[0.5px] border-gray-400 h-full rounded-2xl px-4 py-4 bg-white bg-opacity-5 drop-shadow-2xl'>
        <h2 className='font-semibold mb-4'>CURRENT POS.</h2>
        <div className='flex justify-center items-center h-[75%] flex-col'>
          <h3 className='text-center text-3xl font-monts font-bold'>
            Software Engineer.
          </h3>
          <p className='text-sm text-center font-monts'>@Precision Planting</p>
        </div>
      </div>
      <div className='border-[0.5px] border-gray-400 h-full rounded-2xl px-4 py-4 bg-white bg-opacity-5 drop-shadow-2xl'>
        <h2 className='font-semibold mb-4'>FAVORITE LANG.</h2>
        <div className='flex justify-center items-center h-[75%] flex-col'>
          <Image src={JSImage} className='w-28 h-full' alt='JavaScript Logo' />
        </div>
      </div>
    </div>
  );
};

export default Experience;
