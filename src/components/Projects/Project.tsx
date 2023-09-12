import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import kj from '../../../public/kjsnailhause.png'

const Project = ({ title, link }: {title: string, link: string}) => {
  console.log(title, link)
  return (
    <>
      <Link href="/projects">
        <div className="project rounded-xl flex justify-center items-center relative h-40 m-4
         hover:drop-shadow-2xl hover:-translate-y-1 transition ease-in-out duration-200">
          <h2 className="absolute text-center text-2xl z-10">{title}</h2>
          <Image
            src={link}
            alt="kjs nail hause"
            className="rounded-xl h-full brightness-50 object-cover"
            fill
          />
        </div>
      </Link>
    </>
  );
};

export default Project;
