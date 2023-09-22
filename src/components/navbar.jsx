import React, { Fragment, useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { navlinks } from "../data/data";

export default function Navbar() {
  const [opened, setOpened] = useState(false);
  const headerRef = useRef(null);

  useEffect(() => {
    function handleClicks(e) {
      if (headerRef.current?.contains(e.target)) {
        return;
      }
      setOpened(false);
    }
    window.addEventListener("click", handleClicks);
    return () => {
      window.removeEventListener("click", handleClicks);
    };
  }, []);

  return (
    <Fragment>
      <header
        className="px-[40px] py-5 lg:py-5 lg:px-[60px] border-bs border-white/20s"
        ref={headerRef}
      >
        <nav className="flex justify-between space-x-5">
          <div>
            <Link
              to="/"
              className="font-bold leading-normal text-white text-[20px] font-clashbold md:text-[36px]"
            >
              get<span className="text-[#D434FE]">linked</span>
            </Link>
          </div>
          <div className="hidden md:flex items-center gap-[20px]">
            <ul className="flex items-center gap-[20px]">
              {navlinks.map((route, index) => (
                <li key={index}>
                  <NavLink to={route.link}>
                    {({ isActive }) => (
                      <div
                        className={`relative text-base font-mon font-medium text-center after:content-[''] after:absolute after:bg-brand-purple-1 after:h-1 after:left-0 after:-bottom-1 after:-z-10 after:rounded-md hover:after:w-full after:transition-all after:duration-300 ${
                          isActive
                            ? "after:w-full text-brand-purple"
                            : "hover:text-brand-purple after:w-0"
                        }`}
                      >
                        {route.text}
                      </div>
                    )}
                  </NavLink>
                </li>
              ))}
            </ul>
            <div className="hidden md:block">
              <Link to="/login">
                <div className="font-mon text-base bg-[linear-gradient(270deg,_#903aff,_#d434fe_56.42%,_#ff26b9_99.99%,_#fe34b9)] rounded-md py-2.5 px-[30px] lg:py-4 lg:px-[52px] transition-all duration-300 shadow-md  active:scale-90 hover:scale-105">
                  Register
                </div>
              </Link>
            </div>
          </div>

          {/* mobile nav */}
          <div className="flex flex-row items-center gap-5 md:hidden">
            <div className="md:hidden">
              <div className="">
                <button
                  className="space-y-1.5 focus:outline-none focus:ring focus:ring-brand-purple-1 p-1 pb-1.5 rounded-md"
                  onClick={() => setOpened(!opened)}
                >
                  <div
                    className={`rounded-full h-1 bg-white transition-all duration-300 ${
                      opened
                        ? "w-7 rotate-45 translate-y-3"
                        : "w-4 rotate-0 translate-x-2"
                    }`}
                  />
                  <div
                    className={`rounded-full h-1 bg-white w-7 transition-all duration-300  ${
                      opened ? "opacity-0" : "opacity-100"
                    }`}
                  />
                  <div
                    className={`rounded-full h-1 bg-white self-end transition-all duration-300 ${
                      opened ? "w-7 -rotate-45 -translate-y-2" : "w-4 rotate-0"
                    }`}
                  />
                </button>
                <div
                  ref={headerRef}
                  // onClick={() => setOpened(!opened)}
                  className={`h-[] absolute bg-[#150E28] rounded-lg pb-6 border-[1px] border-solid border-navb block mx-[30px] mt-[100px] md:hidden z-10 transition-all duration-300 ${
                    opened ? "-translate-y-[90px]" : "-translate-y-[180%]"
                  } pt-4 left-0 right-0`}
                >
                  <div className="px-3 mx-auto">
                    <ul className="space-y-2">
                      {navlinks.map((route, index) => (
                        <li key={index}>
                          <NavLink to={route.link}>
                            {({ isActive }) => (
                              <div
                                onClick={() => setOpened(false)}
                                className="flex items-center gap-1.5 group"
                              >
                                <div
                                  className={`bg-purple-800 w-1 rounded-full transition-all duration-300  ${
                                    isActive ? "h-6" : "group-hover:h-6 h-1"
                                  }`}
                                />
                                <div
                                  className={`font-semibold rounded-md p-2 transition-all duration-300 w-full max-w-md ${
                                    isActive
                                      ? "bg-brand-purple-1/20"
                                      : "hover:bg-brand-purple-1/20"
                                  }`}
                                >
                                  {route.text}
                                </div>
                              </div>
                            )}
                          </NavLink>
                        </li>
                      ))}
                    </ul>{" "}
                  </div>
                  <div
                    onClick={() => setOpened(!opened)}
                    className="px-5 mx-auto"
                  >
                    <Link
                      to="/login"
                      className={`w-[172px] rounded-md bg-[linear-gradient(270deg,_#903aff,_#d434fe_56.42%,_#ff26b9_99.99%,_#fe34b9)] shadow-[5px_5px_10px_rgba(0,_0,_0,_0.25)] flex justify-center items-center py-4 px-[52px] active:scale-95 transition-all duration-300 mt-3`}
                    >
                      Register
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
      <div className="w-full h-[1px] bg-line"></div>
    </Fragment>
  );
}
