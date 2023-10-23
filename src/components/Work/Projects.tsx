import React, { useEffect } from "react";
import ProjectCards from "../Cards/ProjectCards";
import { useRef } from "react";
import { gsap } from "gsap/gsap-core";

type ProjectDataProps = {
  title: string;
  image: string;
  description: string;
};

const projectData: ProjectDataProps[] = [
  {
    title: "Dashboard UI",
    description:
      "Influence Dashboard is a Admin portal UI built for learning purpose",
    image: "/assets/krish.jpg",
  },
  {
    title: "Dashboard UI",
    description:
      "Influence Dashboard is a Admin portal UI built for learning purpose",
    image: "/assets/krish.jpg",
  },
  {
    title: "Dashboard UI",
    description:
      "Influence Dashboard is a Admin portal UI built for learning purpose",
    image: "/assets/krish.jpg",
  },
];

const Projects: React.FC = () => {
  const motionRef = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const mm = gsap.matchMedia();
    mm.add("(min-width: 600px)", () => {
      motionRef.current.forEach((motion, i: number) => {
        gsap.to(motion, {
          opacity: 1,
          delay: 0.3,
          x: 50,
          duration: 0.8 * i,
        });
      });
    });
  }, []);
  return (
    <>
      <section className="mt-[8rem] min-h-screen">
        <div>
          <h2 className="text-[3rem] text-gray uppercase font-semibold ">
            my works
          </h2>
        </div>

        {/* content */}
        <div className="bg-white/5 w-full p-5 rounded-lg overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-5 md:-ml-[50px]">
            {projectData.map((p: ProjectDataProps, i: number) => (
              <div
                className=" opacity-100 md:opacity-0"
                ref={(el) => (motionRef.current[i] = el)}
                key={i}
              >
                <ProjectCards
                  title={p.title}
                  description={p.description}
                  image={p.image}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
