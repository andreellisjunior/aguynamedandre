import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Project = ({
  id,
  title,
  link,
  slug,
}: {
  id: string;
  title: string;
  link: string;
  slug: string;
}) => {
  return (
    <>
      <Link href={`/projects/${slug}`}>
        <div
          className="project rounded-xl flex justify-center items-center relative h-40 m-4
         hover:drop-shadow-2xl hover:-translate-y-1 transition ease-in-out duration-200"
        >
          <h2 className="absolute text-center text-xl z-10 font-bold text-white">
            {title}
          </h2>
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
