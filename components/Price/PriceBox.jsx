import React from "react";
import ButtonPrimary from "../General/ButtonPrimary";
import { AiFillCheckCircle } from "react-icons/ai";
const PriceBox = ({ dt }) => {
  return (
    <div className="w-70 h-405 mt-8  bg-white border border-gray-500 rounded-lg mx-auto   flex flex-col justify-around  hover:scale-105 hover:shadow-md cursor-pointer hover:shadow-black  transition-transform duration-300">
      <h2 className="font-bold text-xl text-center mt-2 border-b-2 border-b-gray-500 w-full roboto700 pb-2">
        {dt.header}
      </h2>

      <h3 className="text-lg text-primaryYellow roboto700 text-center ">{`${dt.price} ALL / ${dt.monthly}`}</h3>
    





    
      <div className="flex flex-col   gap-y-2 p-4 ">
      <div className="flex  p-4 text-md items-center   gap-x-2 ">
        <AiFillCheckCircle size={19} className='bg-black rounded-full text-primaryYellow'/>
        <p className="tracking-tighter roboto400">{dt.desc}</p>
      </div>
      <div className="flex  ml-4 text-md items-center gap-x-2 ">
        <AiFillCheckCircle size={19} className='bg-black rounded-full text-primaryYellow'/>
        <p className="tracking-tighter roboto400">{dt.service}</p>
      </div>
      {dt.extra &&
        <div className="flex ml-4  items-center gap-x-4 ">
          <div>
          <AiFillCheckCircle size={19} className='text-primaryYellow bg-black rounded-full'/>

          </div>
        <p className="tracking-tighter roboto400">{dt.extra}</p>
      </div> 
    }
      </div> 









    <div className="text-center">
    <ButtonPrimary
        text={dt.priceButton}
        fontStyle={"roboto400"}
        locate={'https://app.pos.al/'}
      />
    </div>
    </div>
  );
};

export default PriceBox;
