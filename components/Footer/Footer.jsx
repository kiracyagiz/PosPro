import React from "react";
import Link from "next/link";
import { useTranslation } from "next-i18next";

const Footer = () => {
  const { t } = useTranslation("common");
  const footerData = t("common:Footer", { returnObjects: true });
  return (
    <div className="h-32 bg-black flex items-center  w-full md:justify-between">
      <div className=" lg:mx-auto flex flex-col md:flex-row  gap-x-56 p-4 lg:gap-x-96  gap-y-4 md:text-center justify-between">
        <div className="text-primaryYellow text-2xl font-semibold roboto700 relative group cursor-pointer">
          <div>
            Pos.
            <div className="w-0 bg-primaryYellow h-under  opacity-0 group-hover:w-full group-hover:opacity-100 transition-all duration-300" />
          </div>
        </div>

        <div className="list-none text-semibold text-sm md:text-md flex  gap-x-4 md:gap-x-16 roboto700 text-primaryYellow">
          {footerData.map((dt, i) => (
           <Link href={dt.location} key={i} className="cursor-pointer">
              <li className="relative group text-[8px] md:text-[15px]  ">
                {dt.title}
                <div className="w-0 bg-primaryYellow h-under   opacity-0 group-hover:w-full group-hover:opacity-100 transition-all duration-300" />
              </li>
              </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
