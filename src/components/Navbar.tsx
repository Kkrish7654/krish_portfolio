import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

type NavLinks = {
  title: string;
  path: string;
};

const NAV_LINKS: NavLinks[] = [
  {
    title: "About Me",
    path: "/aboutme",
  },
  {
    title: "Projects",
    path: "/projects",
  },
  {
    title: "Contact",
    path: "/contact",
  },
];

function Navbar() {
  const [isBlur, setIsBlur] = useState<Boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsBlur(true);
      } else {
        setIsBlur(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
  
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  console.log(isBlur)
  return (
    <>
      <header className={`flex fixed w-full px-[1rem] sm:px-[8.5rem] z-40   items-center justify-between py-3 sm:py-8 text-gray`}>
        
        <div className={`p-1 sm:p-6 rounded-xl w-full flex items-center justify-between ${isBlur ? "bg-white/10 duration-300 backdrop-blur-xl " : null}  duration-300`}>
        <div>
          <h2>
            <Link
              className="hover:text-primary hover:font-semibold  duration-200 "
              to="/"
            >
              My Portfolio
            </Link>
          </h2>
        </div>

        <div className="hidden sm:block">
          <ul className="flex items-center gap-[1.5rem]">
            {NAV_LINKS?.map((link) => (
              <li>
                <Link className="link hover:text-primary" to={link.path}>
                  {link.title}
                </Link>
              </li>
            ))}
            <button className="popping px-4 py-1 rounded-md border border-primary text-sm hover:bg-primary hover:text-black duration-200">
              Resume
            </button>
          </ul>
        </div>
        </div>
       
      </header>
    </>
  );
}

export default Navbar;
