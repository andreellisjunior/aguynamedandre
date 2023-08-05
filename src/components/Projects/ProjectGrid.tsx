import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import KJs from '../../../public/kjsnailhause.png';
import projects from '../../data/index';
import Project from './Project';

const ProjectGrid = () => {
  return (
    <div>
      <div className="project-wrapper grid grid-rows-2 grid-cols-2">
        {projects.map(({ title, url }) => (
          <Project title={title} img={url} key={title} />
        ))}
      </div>
    </div>
  );
};

export default ProjectGrid;
