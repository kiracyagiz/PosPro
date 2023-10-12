import React from "react";
import ButtonPrimary from "../General/ButtonPrimary";

const PriceBox = ({ feature, price, desc ,button,title,month}) => {


  return (
    <div className="w-70 h-405 mt-8 bg-white border border-gray-500 rounded-lg mx-auto p-4 text-center flex flex-col justify-between items-center hover:scale-105 hover:shadow-md cursor-pointer hover:shadow-black  transition-transform duration-300">
      <h2 className="font-bold text-xl mt-2 border-b-2 border-b-gray-500 w-full roboto700 pb-2">
        {feature}
      </h2>

      <h3 className="text-lg text-primaryYellow roboto700 ">{`${price}ALL/${month}`}</h3>
      <p className="text-xl font-bold roboto700">{title}</p>
      <div className="flex p-4 text-md items-center gap-x-2 ">
        <span>
          <svg
            className="bg-primaryYellow w-4    h-4 rounded-full"
            stroke="currentColor"
            fill="currentColor"
            strokeWidth={0}
            version="1.2"
            baseProfile="tiny"
            viewBox="0 0 24 24"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M11 20c-.801 0-1.555-.312-2.121-.879l-4-4c-.567-.566-.879-1.32-.879-2.121s.312-1.555.879-2.122c1.133-1.133 3.109-1.133 4.242 0l1.188 1.188 3.069-5.523c.526-.952 1.533-1.544 2.624-1.544.507 0 1.012.131 1.456.378.7.39 1.206 1.028 1.427 1.798.221.771.127 1.581-.263 2.282l-5 9c-.454.818-1.279 1.384-2.206 1.514-.139.019-.277.029-.416.029zm-4-8c-.268 0-.518.104-.707.293s-.293.439-.293.707.104.518.293.707l4 4c.223.221.523.33.844.283.312-.043.586-.232.737-.504l5-9c.13-.233.161-.503.088-.76-.073-.257-.243-.47-.478-.6-.473-.264-1.101-.078-1.357.388l-4.357 7.841-3.062-3.062c-.19-.189-.44-.293-.708-.293z"></path>
          </svg>
        </span>
        <p className="tracking-tighter roboto400">{desc}</p>
      </div>
      <ButtonPrimary
        text={button}
        fontStyle={"roboto400"}
        albanianURL={"https://app.pos.al/login"}
        enUrl={"https://app.pos.al/login"}
      />
    </div>
  );
};

export default PriceBox;
