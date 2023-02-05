import Image from "next/image";
import Link from "next/link";
import React from "react";
import Projects from "../../../public/BracketsCurly.svg";
import Home from "../../../public/House.svg";
import About from "../../../public/IdentificationBadge.svg";
import Logo from "../../../public/logo-white.svg";
import Contact from "../../../public/PaperPlaneTilt.svg";

const Nav = () => {
  return (
    <nav className="h-full flex flex-col justify-evenly">
      <div className="logo">
        <Image
          className="w-48 h-auto"
          src={Logo}
          alt="A Guy Named Andre Logo"
        />
      </div>
      <div className="nav-link-wrapper font-nunito">
        <ul>
          <li className="py-10 text-base">
            <Link href={"/"} className="flex items-center gap-2">
              <Image
                className="h-auto inline"
                src={Home}
                alt="Dashboard Icon"
              />
              <span>DASHBOARD</span>
            </Link>
          </li>
          <li className="py-10 text-base">
            <Link href={"/about"} className="flex items-center gap-2">
              <Image
                className="h-auto inline"
                src={About}
                alt="Dashboard Icon"
              />
              <span>ABOUT</span>
            </Link>
          </li>
          <li className="py-10 text-base">
            <Link href={"/projects"} className="flex items-center gap-2">
              <Image
                className="h-auto inline"
                src={Projects}
                alt="Dashboard Icon"
              />
              <span>PROJECTS</span>
            </Link>
          </li>
          <li className="py-10 text-base">
            <Link href={"/contact"} className="flex items-center gap-2">
              <Image
                className="h-auto inline"
                src={Contact}
                alt="Dashboard Icon"
              />
              <span>CONTACT</span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
