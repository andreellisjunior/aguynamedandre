import { useEffect, useState } from 'react';

import 'dotenv/config';

// import projects from "../../data";
import { useRouter } from 'next/router';
import Project from './Project';

const ProjectGrid = () => {
  const router = useRouter();
  const [data, setData] = useState<
    {
      id: string;
      projectName: string;
      url: string;
      slug: string;
      screenshot: { id: string; url: string };
      order: number;
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
                projects(first: 100, orderBy: order_ASC) {
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
                  order
                }
              }`,
            }),
          }
        );
        const content = await response.json();
        console.log(content);
        setData(content.data.projects);
      } catch (error) {
        console.log('error', error);
      }
    };
    fetchProjects();
  }, []);

  return (
    <div
      className={`${
        router.pathname == '/projects' ? `` : `max-h-96 overflow-y-scroll`
      }`}
    >
      <div className='project-wrapper sm:grid grid-rows-2 grid-cols-2'>
        {/* {projects.map(({ title, url }) => (
          <Project title={title} link={url} key={title} />
        ))} */}
        {data.map((item) => (
          <Project
            id={item.id}
            title={item.projectName}
            link={item.screenshot.url}
            slug={item.slug}
            key={item.id}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectGrid;
