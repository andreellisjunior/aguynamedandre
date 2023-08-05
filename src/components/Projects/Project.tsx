import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Project = ({ title }: any, { url }: any) => {
  return (
    <>
      <Link href="/projects">
        <div className="project rounded-3xl flex justify-center items-center overflow-hidden h-40 mx-1">
          <h2 className="absolute text-2xl z-10">{title}</h2>
          {console.log(title)}
          <Image
            src={url}
            alt="kjs nail hause"
            className="rounded-3xl blur-[1px]"
          />
        </div>
      </Link>
    </>
  );
};

export default Project;
