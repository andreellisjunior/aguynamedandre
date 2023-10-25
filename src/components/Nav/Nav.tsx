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
    <nav className="h-full flex lg:flex-col flex-row justify-between sm:justify-evenly relative">
      <div className="logo hidden lg:block">
        <Image
          className="w-48 h-auto"
          src={Logo}
          alt="A Guy Named Andre Logo"
        />
      </div>
      <div className="nav-link-wrapper w-full sm:w-auto font-nunito">
        <ul className="flex lg:flex-col flex-row items-center lg:items-start justify-between">
          <li className="py-5 lg:py-10 text-base px-2 sm:px-8 lg:px-0">
            <Link
              href={"/"}
              className="flex items-center gap-2 lg:flex-row flex-col"
            >
              <Image
                className="h-auto w-9 sm:w-auto inline"
                src={Home}
                alt="Dashboard Icon"
              />
              <span className="hidden sm:block">DASHBOARD</span>
            </Link>
          </li>
          <li className="py-5 lg:py-10 text-base px-2 sm:px-8 lg:px-0">
            <Link
              href={"/about"}
              className="flex items-center gap-2  lg:flex-row flex-col"
            >
              <Image
                className="h-auto w-9 sm:w-auto inline"
                src={About}
                alt="Dashboard Icon"
                height={24}
              />
              <span className="hidden sm:block">ABOUT</span>
            </Link>
          </li>
          <li className="py-5 lg:py-10 text-base px-2 sm:px-8 lg:px-0">
            <Link
              href={"/projects"}
              className="flex items-center gap-2  lg:flex-row flex-col"
            >
              <Image
                className="h-auto w-9 sm:w-auto inline"
                src={Projects}
                alt="Dashboard Icon"
              />
              <span className="hidden sm:block">PROJECTS</span>
            </Link>
          </li>
          <li className="py-5 lg:py-10 text-base px-2 sm:px-8 lg:px-0">
            <Link
              href={"mailto:andreellisjunior@gmail.com"}
              className="flex items-center gap-2  lg:flex-row flex-col"
            >
              <Image
                className="h-auto w-9 sm:w-auto inline"
                src={Contact}
                alt="Dashboard Icon"
              />
              <span className="hidden sm:block">CONTACT</span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
