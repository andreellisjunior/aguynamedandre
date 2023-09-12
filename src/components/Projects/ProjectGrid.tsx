import Image from 'next/image';
import React from 'react';
import KJs from '../../../public/kjsnailhause.png';
import projects from '../../data';
import Project from './Project';

const ProjectGrid = () => {
  return (
    <div className='h-auto'>
      <div className="project-wrapper grid grid-rows-2 grid-cols-2">
        {projects.map(({ title, url }) => (
          <Project title={title} link={url} key={title} />
        ))}
      </div>
    </div>
  );
};

export default ProjectGrid;
