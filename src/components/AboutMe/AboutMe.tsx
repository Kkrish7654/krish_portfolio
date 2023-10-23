import React from "react";
import gsap from "gsap";
import { useLayoutEffect, useRef } from "react";

const AboutMe: React.FC = () => {
  const motionRef = useRef(null);
  const rotateRef = useRef<(HTMLImageElement | null)[]>([]);

  useLayoutEffect(() => {
    const tl = gsap.timeline();
    tl.to(motionRef.current, {
      y: -20,
      opacity: 1,
      duration: 1,
      delay: 1,
    });

    rotateRef.current.forEach((rotRef) => {
      tl.to(rotRef, {
        y: -5,
        duration: 0.2,
        ease: "power3.easeOut",
      });

      tl.to(rotRef, {
        y: 0,
        duration: 0.2,
        ease: "power3.easeOut"
      },'-=0.1'
      );
    });
  });
  return (
    <>
      <section className="w-full mt-[4rem] sm:mt-[12rem] grid sm:grid-cols-5 gap-5 min-h-screen">
        <div className="relative w-full h-[30rem] col-span-3 sm:col-span-2 rounded-lg overflow-hidden opacity-0 text-element">
          <div className="absolute left-0 top-0 w-full h-full bg-black opacity-30 z-10"></div>
          <img
            className="w-full h-full object-cover"
            src="/assets/krish.jpg"
            alt="krish"
          />
        </div>

        <div className="col-span-3">
          <h2 className="delay-one-element  uppercase font-montserrat opacity-0 text-[4rem] font-semibold text-gray underline underline-offset-4">
            About Me
          </h2>
          <h4 className="delay-two-element opacity-0  text-2xl font-semibold text-primary">
            Krish vishwakarma
          </h4>
          <p className="delay-three-element opacity-0 text-sm text-gray underline">
            Full Stack Developer
          </p>

          <p className="mt-2 text-gray delay-three-element opacity-0">
            I am very observing, inspiring, analytical, creative oriented
            front-end developer specialized in Javascript, React, HTML, CSS
            having a technical skill in Front-end framework. Self-Motivated &
            Curious person who can work in interdisciplinary team. Good at
            communication, team management, time-management looking for
            opportunities in technology driven organizations.
          </p>

          <div ref={motionRef} className="mt-12 opacity-0">
            <h4 className="text-3xl font-semibold text-gray underline">
              Social Media
            </h4>
            <p className="mt-2 text-gray">Find me on.</p>
            <div className="mt-2 flex items-center gap-3">
              <span className="w-12 h-full">
                <img
                  ref={(el) => (rotateRef.current[0] = el)}
                  className="w-full h-full object-contain"
                  src="/assets/github-sign.png"
                  alt="github"
                />
              </span>
              <span className="w-12 h-full">
                <img
                  ref={(el) => (rotateRef.current[1] = el)}
                  src="/assets/linkedin.png"
                  alt="linkedin"
                />
              </span>
              <span className="w-12 h-full">
                <img
                  ref={(el) => (rotateRef.current[2] = el)}
                  src="/assets/instagram.png"
                  alt="insta"
                />
              </span>
              <span className="w-12 h-full">
                <img
                  ref={(el) => (rotateRef.current[3] = el)}
                  src="/assets/twitter.png"
                  alt=""
                />
              </span>
            </div>
          </div>
        </div>

        {/* social media */}
      </section>
    </>
  );
};

export default AboutMe;
