import { useState, useEffect } from "react";

const HeroSection: React.FC = () => {

  const [showArrow, setShowArrow] = useState<Boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowArrow(true);
      } else {
        setShowArrow(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
  
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  console.log(showArrow)


  return (
    <>
      <section className="text-element w-full min-h-screen flex items-center justify-start text-gray pt-[5rem] sm:mt-0 opacity-100">
        <div className="flex flex-col gap-3">
          <span className="text-sm text-primary">Hi, My name is</span>
          <h2 className="text-[3rem] font-semibold leading-[3.5rem] uppercase">
            Krish Vishwakarma
          </h2>
          <span className=" animate-pulse">Full Stack Developer.</span>
          <span className="w-[12rem] h-full animate-pulse">
            <img
              className="w-full h-full object-cover"
              src="/assets/mern.png"
              alt=""
            />
          </span>
          <p className="mt-2">
            I'm a Web Developer based in India. I have a passion for web design
            and love to create for web and mobile devices. I have a strong
            knowledge of HTML, CSS, JavaScript, React, and Node.js. looking for
            a new opportunity to work with a team that cares about creating
            beautiful and usable interfaces.
          </p>

          <span>
            <button className="mt-1 text-primary border border-primary px-4 py-2 rounded-md hover:bg-primary hover:text-black duration-200">
              Get in touch
            </button>
          </span>
          <div className={`w-full flex items-center justify-center mt-[4rem] animate_anim`}>
            <svg
              className={`${showArrow ? "hidden" : null}`}
              stroke="#06DA77"
              fill="#06DA77"
              stroke-width="0"
              viewBox="0 0 512 512"
              height="1.4em"
              width="1.4em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M256 294.1L383 167c9.4-9.4 24.6-9.4 33.9 0s9.3 24.6 0 34L273 345c-9.1 9.1-23.7 9.3-33.1.7L95 201.1c-4.7-4.7-7-10.9-7-17s2.3-12.3 7-17c9.4-9.4 24.6-9.4 33.9 0l127.1 127z"></path>
            </svg>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
