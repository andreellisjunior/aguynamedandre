import FileHead from '@/components/FileHead/FileHead';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';

const SingleProject = () => {
  const params = useParams();
  const [data, setData] = useState<
    {
      id: string;
      projectName: string;
      url: string;
      slug: string;
      description: string;
      yearBuilt: string;
      technologies: { url: string }[];
      screenshot: { id: string; url: string };
    }[]
  >([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_URL}/v2/cldgnhor10u3x01uo5sc4bbz8/master`,
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
            },
            body: JSON.stringify({
              query: ` {
              projects(first: 100) {
                id
                projectName
                slug
                url
                yearBuilt
                description
                screenshot {
                  id
                  url
                }
                technologies {
                  url
                }
              }
            }`,
            }),
          }
        );
        const content = await response.json();

        setData(content.data.projects);
      } catch (error) {
        console.log('error', error);
      }
    };
    fetchProjects();
  }, []);

  if (!data || data.length === 0) {
    return <div>Loading...</div>;
  }

  const project = data.filter((proj) => proj.slug == params.id);

  return (
    <>
      <FileHead title={project[0].projectName} />
      <div className='grid grid-row-3 grid-flow-col h-auto min-h-[85vh] font-nunito mb-16 lg:mb-0'>
        {project.map((project) => (
          <div
            key={project.id}
            className='border-[0.5px] border-gray-400 h-full rounded-2xl px-4 py-4 bg-white bg-opacity-5 drop-shadow-2xl relative'
          >
            <h1 className='text-2xl'>{project.projectName}</h1>
            <div className='content flex gap-4 h-auto relative my-16 flex-col-reverse lg:flex-row'>
              <div className='flex flex-col w-full lg:w-1/2 xl:w-1/3 h-auto justify-between gap-4'>
                <div className='flex flex-col gap-0 md:gap-4 md:flex md:flex-row'>
                  <p className='font-bold mb-0'>URL:</p>
                  <a href={project.url} target='_blank' rel='noreferrer'>
                    {project.url}
                  </a>
                </div>
                <div className='flex flex-col gap-0 md:gap-4 md:flex md:flex-row'>
                  <p className='font-bold mb-0'>DESC:</p>
                  <p className='mb-0'>{project.description}</p>
                </div>
                <div className='flex flex-col gap-0 md:gap-4 md:flex md:flex-row'>
                  <p className='font-bold mb-0'>YEAR BUILT:</p>
                  <p className='mb-0'>{project.yearBuilt}</p>
                </div>
              </div>
              <div className='w-full lg:w-1/2 xl:w-2/3 relative'>
                <Image
                  src={project.screenshot.url}
                  alt='kjs nail hause'
                  className='rounded-xl h-full object-cover'
                  width={500}
                  height={500}
                  style={{
                    width: '100%',
                    height: 'auto',
                  }}
                />
              </div>
            </div>
            <div>
              <p className='font-bold'>TECHNOLOGIES:</p>
              <div className='flex gap-4'>
                {project.technologies.map((tech, i) => (
                  <Image
                    key={i}
                    src={tech.url}
                    width={100}
                    height={100}
                    alt='tech'
                    style={{
                      width: 'auto',
                      height: '4rem',
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default SingleProject;
