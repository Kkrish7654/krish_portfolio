import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

type NavLinks = {
  title: string;
  path: string;
};

const NAV_LINKS: NavLinks[] = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "About",
    path: "/aboutme",
  },
  {
    title: "Work",
    path: "/projects",
  },
  {
    title: "Contact",
    path: "/contact",
  },
];

function Navbar() {
  const [isBlur, setIsBlur] = useState<Boolean>(false);
  const [openHamburgerMenu, setOpenHamburgerMenu] = useState<Boolean>(false);
  const location = useLocation();

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

  // ---- //
  function handleOpenHamburger() {
    setOpenHamburgerMenu(!openHamburgerMenu);
  }

  return (
    <>
      <header
        className={`flex fixed w-full px-[1rem] sm:px-[8.5rem] z-40   items-center justify-between py-3 sm:py-8 text-gray`}
      >
        <div
          className={`p-1.5 sm:p-6 rounded-xl w-full flex items-center justify-between ${
            isBlur ? "bg-white/10 duration-300 backdrop-blur-xl shadow-md" : null
          }  duration-300`}
        >
          <div className="w-full">
            <h2 className="w-full text-center md:text-start">
              <Link
                className="hover:text-primary font-semibold text-[1.2rem] duration-200 "
                to="/"
              >
                {location.pathname !== "/"
                  ? "Krish vishwakarma"
                  : " My Portfolio"}
              </Link>
            </h2>
          </div>

          <div className="hidden sm:block">
            <ul className="flex items-center gap-[1.5rem]">
              {NAV_LINKS?.map((link) => (
                <li>
                  <Link
                    className="link hover:text-primary whitespace-nowrap"
                    to={link.path}
                  >
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

        {/* ---------sidebar----------- */}
        <div
          className={`${
            openHamburgerMenu
              ? "left-0 transition-all duration-500"
              : "left-[100%]"
          } transition-all duration-500 w-screen h-screen absolute top-0 left-0 flex flex-col gap-8 items-start  p-12 py-16 bg-[#040D12]`}
        >
          <ul>
            {NAV_LINKS.map((link: NavLinks, i: number) => (
              <li key={i}>
                <Link onClick={handleOpenHamburger} className="text-[2.6rem] font-montserrat" to={link.path}>{link.title}</Link>
              </li>
            ))}
          </ul>

          <div className="w-full flex items-center justify-center p-3 border-t border-gray">
           hello
          </div>
        </div>
      </header>

      {/* --------Hamburger Menu Mobile screen----------- */}
      <div
        onClick={handleOpenHamburger}
        className={`${
          openHamburgerMenu
            ? "-rotate-45 transition-all duration-500 bg-primary"
            : null
        } md:hidden transition-all duration-500 flex flex-col gap-3 fixed z-50 bottom-8 right-5 items-center justify-center w-[5rem] h-[5rem] overflow-hidden bg-black shadow-md rounded-full`}
      >
        <span
          className={`w-8 h-1 rounded-full  ${
            openHamburgerMenu ? "bg-black" : "bg-gray"
          }`}
        ></span>
        <span
          className={`w-12 h-1 rounded-full  ${
            openHamburgerMenu ? "bg-black" : "bg-gray"
          }`}
        ></span>
        <span
          className={`w-8 h-1 rounded-full  ${
            openHamburgerMenu ? "bg-black" : "bg-gray"
          }`}
        ></span>
      </div>
      {/* --------Hamburger Menu Mobile screen----------- */}
    </>
  );
}

export default Navbar;
