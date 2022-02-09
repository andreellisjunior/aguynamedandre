import Link from "next/link";
import React from 'react';
import { useState } from "react";
import Layout from "./Layout";
const { motion } = require('framer-motion')
import { navContainer, navItem } from "./framer-animations/header";

function Header() {
    // TODO: Animate this section during toggle.
    const [showMenu, setShowMenu] = useState(false)
    let mobileMenu = null;
    if(showMenu) {
        mobileMenu = <div id="mobile-menu" className="mobile-menu">
        <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/projects#about">About</Link></li>
            <li><Link href="/projects">Projects</Link></li>
            <li><Link href="mailto:andreellisjunior@gmail.com">Contact</Link></li>
        </ul>
    </div>
    }

  return <>
        <motion.header variants={navContainer} initial="hidden" animate="visible" className="header flex center" id="header">
        <Link href="/" passHref><motion.img variants={navItem} src="/assets/logo.svg" alt="My Logo" className="logo" /></Link>
        <nav className="nav">
            <ul>
                <motion.li variants={navItem}><Link href="/">Home</Link></motion.li>
                <motion.li variants={navItem}><Link href="/projects#about">About</Link></motion.li>
                <motion.li variants={navItem}><Link href="/projects">Projects</Link></motion.li>
                <motion.li variants={navItem}><Link href="mailto:andreellisjunior@gmail.com">Contact</Link></motion.li>
            </ul>
            <motion.a variants={navItem} href="#" className="ham-menu" onClick={() => {setShowMenu(!showMenu)}}>
                <span className="top"></span>
                <span className="middle"></span>
                <span className="bottom"></span>
            </motion.a>
                {mobileMenu}
        </nav>
        </motion.header>
  </>

}

export default Header;
