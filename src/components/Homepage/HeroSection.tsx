const HeroSection: React.FC = () => {
  return (
    <>
      <section className="text-element h-auto w-full md:min-h-screen flex items-center justify-start text-gray pt-[5rem] sm:mt-0 opacity-100">
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
            I'm a Web Developer based in India. I have a passion for web
            design and love to create for web and mobile devices. I have a
            strong knowledge of HTML, CSS, JavaScript, React, and Node.js.
            looking for a new opportunity to work with a team that cares about
            creating beautiful and usable interfaces.
          </p>

          <span>
            <button className="mt-1 text-primary border border-primary px-4 py-2 rounded-md hover:bg-primary hover:text-black duration-200">Get in touch</button>
          </span>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
