import React, { useState } from "react";

const Navigation = () => {
  const [navBg, setNavBg] = useState(false);
  const [openNav, setOpenNav] = useState(false);
  const navbarOnScroll = () => {
    if (window.scrollY >= 30) {
      setNavBg(true);
    } else {
      setNavBg(false);
    }
  };
  window.addEventListener("scroll", navbarOnScroll);

  const Links = [
    { name: "Home", link: "#home" },
    { name: "About me", link: "#about" },
    { name: "Projects", link: "#project" },
  ];

  return (
    <nav
      className={
        navBg
          ? "text-white bg-zinc-700 lg:px-48 h-[80px] transition-all duration-300 fixed z-10 flex justify-between gap-5 items-center w-full max-sm:px-5"
          : "text-white bg-zinc-800 lg:px-48  h-[80px] transition-all duration-300 fixed z-10 flex justify-between gap-5 items-center w-full max-sm:px-5"
      }
    >
      <div className="font-bold">
        <h1 className="text-[25px] font-['Open_Sans'] max-sm:text-[20px]">hmdnubaidillah</h1>
      </div>
      <div className="w-full flex justify-end md:hidden">
        <span className="material-symbols-outlined text-4xl active:bg-gray-500 rounded-sm px-1 transition-all" onClick={() => setOpenNav(!openNav)}>
          menu
        </span>
      </div>
      <div className={`max-md:fixed max-md:bottom-0 max-md:left-0 max-md:bg-zinc-700 max-md:w-screen transition-all duration-200 flex flex-col items-center justify-center ${openNav ? "top-[70%]" : "top-[1000px]"}`}>
        <ul className="flex gap-10 font-semibold text-[20px] max-sm:text-[18px] max-md:flex-col max-md:items-center max-md:py-5 ">
          {Links.map((link, i) => {
            return (
              <li key={i}>
                <a href={link.link} onClick={() => setOpenNav(false)} className="hover:underline max-sm:text-[18px]">
                  {link.name}{" "}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
