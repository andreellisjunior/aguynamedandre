import Experience from "@/components/Experience/Experience";
import Projects from "@/components/Projects/Projects";
import { useTheme } from "next-themes";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Arrow from "../../public/Arrow.svg";
import Button from "@/components/Button/Button";
import Contact from "@/components/Contact/Contact";
import FileHead from "@/components/FileHead/FileHead";

export default function Home() {
  return (
    <>
      <FileHead title='I&apos;m André! Nice to finally meet!' />
      <main className="font-monts lg:grid gap-4 lg:grid-cols-2 lg:grid-rows-3 h-auto min-h-[85vh] justify-between flex flex-col mb-20 lg:mb-0">
        <div className="about-section border-[0.5px] border-gray-400 rounded-2xl px-4 py-4 bg-white bg-opacity-5 drop-shadow-md  h-full">
          <div className="title">
            <h2 className="font-semibold mb-4">
              <Link href={"/about"} className="flex gap-3">
                ABOUT <Image src={Arrow} alt="arrow" />
              </Link>
            </h2>
          </div>
          <p>
            I’m a seasoned full stack developer with 6 years of experience
            designing and developing websites and software applications...
          </p>
          <Button href="/about" linkText="Learn More" />
        </div>
        <Experience />
        <Projects />
        <Contact />
      </main>
    </>
  );
}
