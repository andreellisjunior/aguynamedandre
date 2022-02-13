import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
const { motion } = require('framer-motion')
import { buttonContainer, containerAnimation, item } from '../components/framer-animations/homepage'

export default function Home() {
  return (
      <>
        <Head>
            <title>I&apos;m André! It&apos;s Nice To Meet You!</title>
            <meta name="description" content="My name is André. This is were you'll find many things I've worked on in my career as a Software Developer" />
            <link rel="icon" href="/assets/favicon.ico" />
        </Head>
        <motion.div variants={containerAnimation} initial="hidden" animate="visible" className="flex center column full-height homepage">
            <motion.h1 variants={item}>Husband. Father. <span style={{color: "#00c1b6"}}>Software Developer</span>.</motion.h1>
            <motion.div variants={buttonContainer} className="transparent-btn-wrapper flex mobile-column">
                <motion.div variants={item} className="transparent-btn"><Link href="/projects#about">About</Link></motion.div>
                <motion.div variants={item} className="transparent-btn"><Link href="/projects">Projects</Link></motion.div>
                <motion.div variants={item} className="transparent-btn"><Link href="mailto:andreellisjunior@gmail.com">Contact</Link></motion.div>
            </motion.div>
        </motion.div>
    </>
  )
}
