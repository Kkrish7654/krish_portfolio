import React from "react";
import { Accomplishment } from "../Homepage/Experience";

export type ExperienceType = {
  company: string;
  duration: string;
  description: string;
  accomplishment: Accomplishment[];
};
const ExperienceCard: React.FC<ExperienceType> = ({
  company,
  duration,
  description,
  accomplishment,
}) => {
  return (
    <>
      <section className="rounded-xl">
        <div className="flex items-center gap-5 mt-3">
          <h2 className=" text-primary text-2xl font-semibold whitespace-nowrap">{company}</h2>
          <span className="text-neutral-400 whitespace-nowrap">({duration})</span>
        </div>
        <p className="mt-2 text-gray">{description}</p>
        <div className="bg-white/10 p-3 rounded-xl mt-2 shadow-lg">
          <h4 className="text-orange-500 text-[1.1rem] font-semibold underline ">
            Accomplishment
          </h4>
          {accomplishment?.map((acc: Accomplishment, i: number) => (
            <div key={i} className="flex items-start gap-2 mt-3">
              <span>
                <svg
                  stroke="#06DA77"
                  fill="#06DA77"
                  stroke-width="0"
                  viewBox="0 0 24 24"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M5.536 21.886a1.004 1.004 0 0 0 1.033-.064l13-9a1 1 0 0 0 0-1.644l-13-9A1 1 0 0 0 5 3v18a1 1 0 0 0 .536.886z"></path>
                </svg>
              </span>
              <span className="text-gray">{acc.text}</span>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default ExperienceCard;
