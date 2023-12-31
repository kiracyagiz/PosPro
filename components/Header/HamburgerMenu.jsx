"use client";

import { useEffect, useRef } from "react";

const HamburgerMenu = ({ togglePanel, panelOpen,setPanelOpen,sidebarRef }) => {


  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (panelOpen && sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setPanelOpen(false);
      }
    };

    const handleScroll = () => {
      if (panelOpen) {
        setPanelOpen(false);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);
    window.addEventListener('scroll',handleScroll)

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
      window.removeEventListener('scroll', handleScroll);

    };
  }, [panelOpen]);

  
  return (
    <div className="mx-8 mb-4" ref={sidebarRef}>
      <div>
        <div
          onClick={togglePanel}
          className="flex flex-col relative gap-y-1 z-50 mt-4 lg:hidden"
        >
          <div
            className={`w-8 h-1 rounded-md bg-black ${
              panelOpen
                ? "rotate-45 -mb-1 origin-right-bottom transition duration-500 ease-in-out"
                : "transform transition duration-300 ease-in-out"
            }`}
          ></div>
          <div
            className={`w-8 h-1 rounded-md bg-black ${
              panelOpen
                ? " translate-x-4 opacity-0 transform transition duration-300 ease-in-out"
                : "transform transition duration-300 ease-in-out"
            }`}
          ></div>
          <div
            className={`w-8 h-1 rounded-md bg-black ${
              panelOpen
                ? "-rotate-45 origin-top-left transition duration-500 ease-in-out"
                : "transform transition duration-300 ease-in-out"
            }`}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default HamburgerMenu;
