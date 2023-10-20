import React from "react";
import ExperienceCard from "../Cards/ExperienceCard";

export type Accomplishment = {
  text: string;
};

const cybertize_accomplishment: Accomplishment[] = [
  {
    text: "Worked on Express Tribute Website for Indian Express",
  },
  {
    text: "Built Admin Panel (Dashboard) for various complex projects.",
  },
  {
    text: "I was also actively involved in UI development",
  },
  {
    text: "I took charge of API integration, seamlessly connecting the website with external data sources to deliver real-time information.",
  },
  {
    text: "Worked it databases and Web Flow",
  },
];

const spdj_accomplishment:Accomplishment[] = [
  {
    text:"I Worked as Freelancer (fresher) at SPDJ"
  },
  {
    text:"This is where i started to understand and the working of such technologies"
  },
  {
    text:"Built web banner for Digital marketing and landing page"
  },
]
const Experience: React.FC = () => {
  return (
    <>
      <section className="h-auto md:min-h-screen mt-[4rem] md:mt-0">
        <div>
          <h2 className="text-[3rem] text-gray uppercase font-semibold ">
            EXPERIENCE
          </h2>
        </div>

        <div className="flex flex-col gap-4">
          <ExperienceCard
            company="TheCybertize"
            duration="2023-present"
            description="I worked as a Frontend Developer at TheCybertize for a duration of one year. During my time at the company, I had the opportunity to work with cutting-edge technologies to create dynamic and user-friendly web applications. I specialized in using Next.js, React, Tailwind CSS, Redux, and Bootstrap to develop sleek and responsive user interfaces. My role at TheCybertize allowed me to contribute to the development of innovative web solutions, enhancing user experiences and ensuring the highest level of interactivity and performance"
            accomplishment={cybertize_accomplishment}
          />
        
          <ExperienceCard
            company="SPDJ (Freelance)"
            duration="2022"
            description="During my three-month tenure as a Frontend Freelancer at SPDJ, I focused on React and Bootstrap. I specialized in building dynamic, responsive web applications with React and streamlined design using Bootstrap. This experience enhanced my expertise in these key technologies, enabling me to deliver top-notch frontend solutions."
            accomplishment={spdj_accomplishment}
          />
        </div>
      </section>
    </>
  );
};

export default Experience;
