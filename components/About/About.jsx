import React from "react";
import Image from "next/image";
import thumbail1 from "../../public/thumbail1.png";
import thumbail2 from "../../public/thumbail2.png";
import ButtonPrimary from "../General/ButtonPrimary";
import FirstAd from "../Ads/FirstAd";
import {  useTranslation } from "next-i18next";

const About = () => {
    const { t } = useTranslation("common");
    const about = t("AboutSection", { returnObjects: true });

  return (
    <div className="bg-gray-100">
      <FirstAd />
      <div className="flex flex-col md:flex-row mt-28  items-center  py-8 gap-x-8 justify-between mx-10 md:mx-36 lg:mx-24">
        <div className="hidden relative lg:block w-1/2 bg-white overflow-hidden">
          <div
            aria-hidden="true"
            className="absolute -top-16 -left-12 w-[200px] h-[200px] bg-primaryYellow rounded-full grid place-items-center"
          >
            <svg
              className="w-[64px] h-[72px] ml-3 mt-3"
              viewBox="0 0 64 72"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M60 29.0718C65.3333 32.151 65.3333 39.849 60 42.9282L12 70.641C6.66668 73.7202 1.16801e-05 69.8712 1.19493e-05 63.7128L1.4372e-05 8.28719C1.46412e-05 2.12878 6.66668 -1.72022 12 1.35899L60 29.0718Z"
                fill="white"
              />
            </svg>
          </div>
          <div
            aria-hidden="true"
            className="absolute w-[512px] h-[512px] bg-primaryYellow rounded-full -top-20 -right-56"
          ></div>
          <div className="absolute top-10 right-8">
            <Image
              className="w-64 h-36 object-cover rounded-2xl shadow-2xl rotate-3"
              src={thumbail1}
              alt="pos-video"
            />
            <Image
              className="w-64 h-36 object-cover rounded-2xl shadow-2xl -rotate-3 translate-x-16 -translate-y-2"
              src={thumbail2}
              alt="fiskalizm-video"
            />
          </div>
          <div className="absolute right-12 inset-y-0 grid items-center">
            <a
              href="#"
              className="w-12 h-12 bg-primaryYellow rounded-full ring-4 ring-white grid place-items-center hover:bg-green-400 transition"
            >
              <svg
                className="ml-1 w-4"
                viewBox="0 0 16 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15 7.26795C16.3333 8.03775 16.3333 9.96225 15 10.7321L3 17.6603C1.66667 18.4301 1.01267e-06 17.4678 1.07997e-06 15.9282L1.68565e-06 2.0718C1.75295e-06 0.532196 1.66667 -0.430054 3 0.339746L15 7.26795Z"
                  fill="white"
                />
              </svg>
            </a>
          </div>
          <div className="relative p-8 flex flex-col justify-end h-full space-y-4 w-2/3">
            <p className="uppercase font-semibold text-xs text-primaryYellow tracking-wider roboto700">
              {about.headerYoutube}
            </p>
            <h1 className="text-4xl  font-extrabold text-gray-900">
              {about.descYoutube}
            </h1>
          </div>
        </div>

        <div className="flex flex-col gap-y-8">
          <div>
            <h3 className="roboto700 text-4xl">{about.header}</h3>
            <h4 className="roboto700 mt-4">{about.title}</h4>
          </div>
          <p className="max-w-lg">{about.desc}</p>
          <ButtonPrimary text={about.button} />
        </div>
      </div>
    </div>
  );
};

export default About;
