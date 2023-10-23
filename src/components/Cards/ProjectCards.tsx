import React from "react";

type ProjectCardProps = {
  image: string;
  title: string;
  description: string;
};

const ProjectCards: React.FC<ProjectCardProps> = ({
  image,
  title,
  description,
}) => {
  return (
    <>
      <div className="h-[22rem] w-full rounded-lg overflow-hidden bg-white/90 text-black shadow-md font-montserrat tracking-wider duration-300 transition border-2 scale-95 hover:gradient hover:scale-[.92] ">
        <div className="w-full h-1/2 overflow-hidden">
          <img
            className="w-full h-full object-cover rounded-t-lg"
            src={image}
            alt="project1"
          />
        </div>
        <div className="flex flex-col gap-3 p-3">
          <h2 className="font-semibold text-xl flex items-center gap-2">
            <span className="text-neutral-700">{title}</span>
            <span>
              <svg
                stroke="#393646"
                fill="#393646"
                stroke-width="0"
                viewBox="0 0 24 24"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M23.0677 11.9929L18.818 7.75739L17.4061 9.17398L19.2415 11.0032L0.932469 11.0012L0.932251 13.0012L19.2369 13.0032L17.4155 14.8308L18.8321 16.2426L23.0677 11.9929Z"
                  fill="#393646"
                ></path>
              </svg>
            </span>
          </h2>
          <p className="text-sm text-neutral-600">{description}</p>
        </div>
      </div>
    </>
  );
};

export default ProjectCards;
