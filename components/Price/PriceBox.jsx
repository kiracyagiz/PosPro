import Image from "next/image";
import { AiFillCheckCircle, AiFillThunderbolt } from "react-icons/ai";
import Link from "next/link";
import ButtonPrimary from "../General/ButtonPrimary";
const PriceBox = ({ dt ,isModule ,locate,secondOption,isTool}) => {
  return (
    <div className={` w-70 ${isTool ? ' h-72' : ' h-405 max-h-fit'}    mt-8  bg-white border-2   border-gray-500 rounded-lg mx-auto  cursor-default flex flex-col gap-y-2 `}>
     <div className={`${isModule ? 'hidden' : 'block'}`}>
     <AiFillThunderbolt
        className={`${
        "flex mx-auto mt-2  text-primaryYellow"
        }`}
        size={50}
      />
     </div>

     <div    className={`${isModule ? 'flex justify-center mt-2' : 'hidden'}`}>
     <img
          src={`${dt.image}`}
          width={60}
          height={60}
          alt={dt.image}
              />
     </div>
     
      <div className="  border-b-2 border-gray-300">
        <p className="text-center font-bold mb-4  w-fit flex mx-auto px-4 rounded py-1">
          {dt.header}
        </p>
      </div>
    
      <div
        className={`${
       
           dt.isBusiness ? "hidden" :  isModule ? 'hidden' : 'flex justify-center gap-x-1 mt-2 text-center items-center'
        }`}
      >
        <p className="text-xs mb-4 font-bold ">Leke</p>
        <p className="text-4xl font-bold">{dt.price}</p>
        <p className=" text-primaryYellow font-bold lowercase mt-6">/{dt.monthly}</p>
      </div>

      <div className={`${
             isModule ? ' hidden' : 'flex flex-col p-4 "'}`}>
        <div className="flex items-center gap-x-2 text-xs font-bold my-2">
          <AiFillCheckCircle className="text-primaryYellow" />
          <p>{dt.desc}</p>
        </div>
        <div className="flex items-center gap-x-2 text-xs font-bold my-2 ">
          <AiFillCheckCircle className="text-primaryYellow" />
          <p>{dt.service}</p>
        </div>
      
        <div className="flex items-center gap-x-2 text-xs font-bold my-2 ">
          <AiFillCheckCircle className="text-primaryYellow" />
          <p>{dt.cash}</p>
        </div>
        <div className="flex items-center gap-x-2 text-xs font-bold my-2 ">
          <AiFillCheckCircle className="text-primaryYellow" />
          <p>{dt.nonCash}</p>
        </div>
        <div className={`${dt.isBusiness ? 'hidden' : "flex"} items-center gap-x-2 text-xs font-bold my-2`}>
          <AiFillCheckCircle className="text-primaryYellow" />
          <p>{dt.inventory}</p>
        </div>
        <div className="flex items-center gap-x-2 text-xs font-bold my-2 ">
          <AiFillCheckCircle className="text-primaryYellow" />
          <p>{dt.device}</p>
        </div>
      </div>

      <div className={`${dt.isBusiness ? 'block text-center' : 'hidden'}`}>
         <ButtonPrimary text={dt.button}/>
      </div>

      <div className={isModule ? 'block': 'hidden'}>
        <p className={`px-8  py-4  text-sm roboto400 `}>{dt.desc}</p>
      </div>


      <div 
      
      className={`${isModule ? "flex flex-col" : "hidden"} text-center  w-full   `}
      
      >
        <ButtonPrimary text={dt.button} width={'w-1/2 mb-3'} locate={locate}/>
        {dt.buttonSecond &&
                 <ButtonPrimary text={dt.buttonSecond} width={'w-1/2  mb-3'} locate={dt.secondLocate}/>

        }
      </div>
     


    </div>
  );
};

export default PriceBox;
