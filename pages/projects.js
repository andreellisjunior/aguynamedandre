import React from 'react'
import Link from 'next/link'
const { motion } = require('framer-motion')
import Frameworks from '../components/project-categories/Frameworks';
import WordPress from '../components/project-categories/WordPress';
import Shopify from '../components/project-categories/Shopify';
import Skills from '../components/Skills';

// const headerBgImage = "../assets/projects-background.jpg"

const projects = () => {
  return <div>
    <div className="flex start column projects">
      <div className='center-container container header-wrapper'>
        <h1>PROJECTS</h1>
        <p id="about">My name is André! I’m a software developer who’s passionate about design, development, and delivering expectations. Below you’ll see a list of the things I’ve worked on over the years. If you have any questions or need anything, don’t hestiate to reach out!</p>
        <div className="transparent-btn-wrapper flex mobile-column">
          <div className="transparent-btn"><Link href="#frameworks">Frameworks</Link></div>
          <div className="transparent-btn"><Link href="#wordpress">WordPress</Link></div>
          <div className="transparent-btn"><Link href="#shopify">Shopify</Link></div>
        </div>
      </div>
    </div>
    <div className='container'>
      <Skills />
      <Frameworks />
      <WordPress />
      <Shopify />
    </div>
  </div>;
};

export default projects;
