import Image from 'next/image';
import React from 'react';
import jsImage from '../../../public/technologies/javascript.svg';

const Tech = () => {
  return (
    <div className="marquee overflow-hidden flex justify-center items-center h-[75%]">
      <div className="animate-marquee whitespace-nowrap flex justify-center items-center">
        <Image src={jsImage} alt="JS image" className="w-full mx-4" />
        <Image src={jsImage} alt="JS image" className="w-full mx-4" />
        <Image src={jsImage} alt="JS image" className="w-full mx-4" />
        <Image src={jsImage} alt="JS image" className="w-full mx-4" />
        <Image src={jsImage} alt="JS image" className="w-full mx-4" />
        <Image src={jsImage} alt="JS image" className="w-full mx-4" />
        <Image src={jsImage} alt="JS image" className="w-full mx-4" />
        <Image src={jsImage} alt="JS image" className="w-full mx-4" />
        <Image src={jsImage} alt="JS image" className="w-full mx-4" />
      </div>
    </div>
  );
};

export default Tech;
