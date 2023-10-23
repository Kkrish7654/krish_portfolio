import React from "react";
import SkillsCard from "../Cards/SkillsCard";

const Skills: React.FC = () => {
  return (
    <>
      <section className="h-auto mt-[4rem] ">
        <div>
          <h2 className="text-[3rem] text-gray uppercase font-semibold ">
            technologies
          </h2>
        </div>

        <div className="grid grid-cols-3 md:grid-cols-6 space-y-4 gap-4 mt-[1.5rem]">
          <SkillsCard image="/assets/react.png" text="React Js" />
          <SkillsCard image="/assets/nextjs.svg" text="Next Js" />
          <SkillsCard image="/assets/tailwind.png" text="Taiwind Css" />
          <SkillsCard image="/assets/node.png" text="Node js" />
          <SkillsCard image="/assets/mongo.png" text="MongoDb" />
          <SkillsCard image="/assets/sql.png" text="MySql" />
          <SkillsCard image="/assets/html.png" text="HTML" />
          <SkillsCard image="/assets/css.png" text="CSS" />
          <SkillsCard image="/assets/vanilla.png" text="Vanilla Js" />
          <SkillsCard image="/assets/prisma.png" text="Prisma" />
        </div>
      </section>
    </>
  );
};

export default Skills;
