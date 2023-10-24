"use client";

import React, { useState } from "react";
import HamburgerMenu from "./HamburgerMenu";
import ButtonPrimary from "../General/ButtonPrimary";
import Language from "./Language";
import Link from "next/link";

const Header = (props) => {
  const { header, navButton, locale ,href,isMain} = props;
  const [panelOpen, setPanelOpen] = useState(false);


  const togglePanel = () => {
    setPanelOpen(!panelOpen);
  };

  return (
    <header
      className={`flex justify-between items-center h-100 bg-primaryYellow`}
    >
      <div className="flex justify-between p-6  lg:mx-67 gap-x-44 animate-slide-down whitespace-nowrap ">
        <div className="items-center flex justify-between ">
          <a className="heroRoboto" href={`/${locale}`}>
            Pos.
          </a>
        </div>
        <nav className="items-center hidden md:hidden lg:flex justify-between  list-none roboto700 font-bold  gap-x-10 text-xl">
          {header.map((dt, i) => (
            <a href={`${isMain ? dt.id : '/' + locale+dt.id}`} key={i} >
              {dt.title}
              <div className="w-0 bg-black h-under  opacity-0 group-hover:w-full group-hover:opacity-100 transition-all duration-300" />
            </a>
          ))}

          <div>
            <ButtonPrimary
              text={navButton}
              albanianURL={"https://app.pos.al/"}
              enUrl={"https://app.pos.al/"}
            />
          </div>

          <div className="w-full">
            <Language
              locale={`/sq${href}`}
              localeEn={`/en${href}`}
              param={locale}
              localeTr={`/tr${href}`}
            />
          </div>
        </nav>
      </div>

      <HamburgerMenu togglePanel={togglePanel} panelOpen={panelOpen} />

      <div
        className={`${
          panelOpen ? "right-0 " : "right-[-100%] duration-1000"
        }  duration-700 ease-in-out fixed top-0 right-0 bottom-0 h-full w-1/2 bg-primaryYellow p-4 shadow-md `}
      >
        <div className="flex flex-col roboto700   text-xl text-center items-center mt-32 gap-y-8">
          <div onClick={togglePanel} className="flex flex-col gap-y-8">
            {header.map((dt, id) => (
              <a href={`${locale+dt.id}`} key={id} >
                {dt.title}
              </a>
            ))}
   
          </div>

          <ButtonPrimary text={navButton} />

          <Language
              locale={`/sq${href}`}
              localeEn={`/en${href}`}
              param={locale}
              localeTr={`/tr${href}`}
            />
        </div>
      </div>
    </header>
  );
};

export default Header;
