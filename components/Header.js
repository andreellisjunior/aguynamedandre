import Link from "next/link";
import { useState } from "react";
import Layout from "./Layout";
import { motion } from 'framer-motion'
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
            <li><Link href="/contact">Contract</Link></li>
        </ul>
    </div>
    }

  return <>
        <motion.header variants={navContainer} initial="hidden" animate="visible" className="header flex center" id="header">
        <Link href="/"><motion.img variants={navItem} src="/assets/logo.svg" alt="My Logo" className="logo" /></Link>
        <nav className="nav">
            <ul>
                <motion.li variants={navItem}><Link href="/">Home</Link></motion.li>
                <motion.li variants={navItem}><Link href="/projects#about">About</Link></motion.li>
                <motion.li variants={navItem}><Link href="/projects">Projects</Link></motion.li>
                <motion.li variants={navItem}><Link href="/contact">Contract</Link></motion.li>
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
