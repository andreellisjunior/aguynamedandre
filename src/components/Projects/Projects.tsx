import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Arrow from '@/components/Arrow';
import ProjectGrid from './ProjectGrid';
import FileHead from '../FileHead/FileHead';

const Projects = () => {
  return (
    <>
      <div className='projects-grid  border-[0.5px] border-gray-400 h-full rounded-2xl px-4 py-4 bg-white bg-opacity-5 drop-shadow-2xl row-span-2'>
        <div className='title'>
          <h2 className='font-semibold mb-4'>
            <Link href={'/projects'} className='flex gap-3'>
              PROJECTS <Arrow />
            </Link>
          </h2>
        </div>
        <ProjectGrid />
      </div>
    </>
  );
};

export default Projects;
