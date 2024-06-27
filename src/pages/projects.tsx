import Contact from "@/components/Contact/Contact";
import FileHead from "@/components/FileHead/FileHead";
import Projects from "@/components/Projects/Projects";
import React from "react";

const projects = () => {
  return (
    <>
      <FileHead title="Projects" />
      <main className="font-monts lg:grid gap-4 lg:grid-cols-1 lg:grid-rows-2 h-auto min-h-[85vh] justify-between flex flex-col mb-20 lg:mb-0">
        <Projects />
      </main>
    </>
  );
};

export default projects;
