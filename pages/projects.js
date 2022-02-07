import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Parallax } from 'react-parallax'
import { useEffect } from 'react';
import Frameworks from '../components/project-categories/Frameworks';
import WordPress from '../components/project-categories/WordPress';
import Shopify from '../components/project-categories/Shopify';

// const headerBgImage = "../assets/projects-background.jpg"

const projects = () => {
  return <div>
  <div className="flex start column projects">
    <div className='center-container container header-wrapper'>
            <h1>PROJECTS</h1>
            <p id="about">My name is André! I’m a software developer who’s passionate about design, development, and delivering expectations. Below you’ll see a list of the things I’ve worked on over the years. If you have any questions or need anything, don’t hestiate to reach out!</p>
            <motion.div className="transparent-btn-wrapper flex mobile-column">
                    <motion.div  className="transparent-btn"><Link href="#frameworks">Frameworks</Link></motion.div>
                    <motion.div className="transparent-btn"><Link href="#wordpress">WordPress</Link></motion.div>
                    <motion.div className="transparent-btn"><Link href="#shopify">Shopify</Link></motion.div>
            </motion.div>
    </div>
  </div>
  <div className='container'>
    <Frameworks />
    <WordPress />
    <Shopify />
  </div>
  </div>;
};

export default projects;
