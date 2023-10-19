import React from "react";
import ButtonPrimary from "../General/ButtonPrimary";
import {AiFillCheckCircle} from 'react-icons/ai'
const PriceBox = ({ dt}) => {
  return (
    <div className="w-70 h-405 mt-8 bg-white border border-gray-500 rounded-lg mx-auto p-4 text-center flex flex-col justify-between items-center hover:scale-105 hover:shadow-md cursor-pointer hover:shadow-black  transition-transform duration-300">
      <h2 className="font-bold text-xl mt-2 border-b-2 border-b-gray-500 w-full roboto700 pb-2">
        {dt.header}
      </h2>

      <h3 className="text-lg text-primaryYellow roboto700 ">{`${dt.price}ALL/${dt.monthly}`}</h3>
      <p className="text-xl font-bold roboto700">{dt.title}</p>
      <div className="flex flex-col items-center gap-y-2 p-4">
      <div className="flex p-4 text-md items-center gap-x-2 ">
        <AiFillCheckCircle size={19} className='bg-black rounded-full text-primaryYellow'/>
        <p className="tracking-tighter roboto400">{dt.desc}</p>
      </div>
      <div className="flex text-md items-center gap-x-2 ">
        <AiFillCheckCircle size={19} className='bg-black rounded-full text-primaryYellow'/>

        <p className="tracking-tighter roboto400">{dt.service}</p>
      </div>
      {dt.extra ? 
        <div className="flex text-md items-center gap-x-4 ">
          <div>
          <AiFillCheckCircle size={19} className='text-primaryYellow bg-black rounded-full'/>

          </div>
        <p className="tracking-tighter roboto400">{dt.extra}</p>
      </div>: ''  
    }
      </div>
      <ButtonPrimary
        text={dt.priceButton}
        fontStyle={"roboto400"}
        albanianURL={"https://app.pos.al/login"}
        enUrl={"https://app.pos.al/login"}
      />
    </div>
  );
};

export default PriceBox;
