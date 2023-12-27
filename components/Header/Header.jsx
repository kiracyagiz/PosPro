"use client";

import React, { useState } from "react";
import HamburgerMenu from "./HamburgerMenu";
import ButtonPrimary from "../General/ButtonPrimary";
import Language from "./Language";
import Link from "next/link";
import { useRef } from "react";

const Header = (props) => {
  const { header, headerB, locale, href, isMain } = props;
  const [panelOpen, setPanelOpen] = useState(false);

  const togglePanel = () => {
    setPanelOpen(!panelOpen);
  };

  const sidebarRef = useRef();


  return (
    <header className={`header`}>
      <div className="flex w-full lg:justify-evenly mx-auto p-6  animate-slide-down whitespace-nowrap ">
        <div className="items-center flex justify-between ">
          <Link className="heroRoboto" href={`/${locale}`}>
            <p>Pos.</p>
          </Link>
        </div>
        <nav className="items-center hidden md:hidden lg:flex justify-between  list-none roboto700 font-bold  gap-x-10 text-xl">
        
          {header.map((dt, i) => (
            <Link href={dt.onPage ? `${locale}${dt.id}` : dt.id} key={i} >
              {dt.title}
              <div className="w-0 bg-black h-under opacity-0 group-hover:w-full group-hover:opacity-100 transition-all duration-300" />
            </Link>
          ))}

          <div>
            <ButtonPrimary
              text={headerB.button}
              locate={"https://app.pos.al/"}
            />
          </div>

          <Language
            locale={`/sq${href}`}
            localeEn={`/en${href}`}
            param={locale}
            localeTr={`/tr${href}`}
            headerB={headerB.button}
          />
        </nav>
      </div>

<div ref={sidebarRef}>
<HamburgerMenu togglePanel={togglePanel} panelOpen={panelOpen} setPanelOpen={setPanelOpen} sidebarRef={sidebarRef} />

      <div
        className={`${
          panelOpen ? "right-0 " : "right-[-100%] duration-1000"
        }  duration-700 ease-in-out fixed top-0 right-0 bottom-0 h-full w-1/2 bg-primaryYellow p-4 shadow-md `}
      >
        <div className="flex flex-col roboto700   text-xl text-center items-center mt-32 gap-y-8">
          <div onClick={togglePanel} className="flex flex-col gap-y-8">
            {header.map((dt, id) => (
              <Link href={`${ dt.onPage ? '/'+ locale + dt.id : dt.id}`} key={id}>
                {dt.title}
              </Link>
            ))}
          </div>

          <ButtonPrimary text={headerB.button} locate={'https://app.pos.al/'} />

          <Language
            locale={`/sq${href}`}
            localeEn={`/en${href}`}
            param={locale}
            localeTr={`/tr${href}`}
          />
        </div>
      </div>
</div>
      
    </header>
  );
};

export default Header;
