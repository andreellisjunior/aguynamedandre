import { useEffect, useState } from "react";

import "dotenv/config";

// import projects from "../../data";
import Project from "./Project";

const ProjectGrid = () => {
  const [data, setData] = useState<
    {
      id: string;
      projectName: string;
      url: string;
      slug: string;
      screenshot: { id: string; url: string };
    }[]
  >([]);
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_URL}/v2/cldgnhor10u3x01uo5sc4bbz8/master`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
            },
            body: JSON.stringify({
              query: ` {
                projects {
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
        console.log(data);
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchProjects();
  }, [data]);

  return (
    <div className="h-auto">
      <div className="project-wrapper sm:grid grid-rows-2 grid-cols-2">
        {/* {projects.map(({ title, url }) => (
          <Project title={title} link={url} key={title} />
        ))} */}
        {data.map((item) => (
          <Project
            id={item.id}
            title={item.projectName}
            link={item.screenshot.url}
            key={item.id}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectGrid;
