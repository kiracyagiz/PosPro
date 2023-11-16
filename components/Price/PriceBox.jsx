import Image from "next/image";
import { AiFillCheckCircle, AiFillThunderbolt } from "react-icons/ai";
import Link from "next/link";
import ButtonPrimary from "../General/ButtonPrimary";
const PriceBox = ({ dt ,isModule }) => {
  return (
    <div className= "   w-70  h-405  mt-8  bg-white border-2  relative border-gray-500 rounded-lg mx-auto cursor-default flex flex-col gap-y-2 ">
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
       
             isModule ? 'hidden' : 'flex justify-center gap-x-1 mt-2 text-center items-center'
        }`}
      >
        <p className="text-xs mb-4 font-bold ">Leke</p>
        <p className="text-4xl font-bold">{dt.price}</p>
        <p className=" text-primaryYellow font-bold lowercase mt-6">/{dt.monthly}</p>
      </div>

      <div className={`${isModule ? ' hidden' : 'flex flex-col p-4 gap-y-2"'}`}>
        <div className="flex items-center gap-x-2 text-sm font-bold">
          <AiFillCheckCircle className="text-primaryYellow" />
          <p>{dt.desc}</p>
        </div>
        <div className="flex items-center gap-x-2 text-sm font-bold ">
          <AiFillCheckCircle className="text-primaryYellow" />
          <p>{dt.service}</p>
        </div>
        <div className="flex flex-col  gap-x-2 text-[10px] text-gray-600 mt-20">
          <p className="mb-2">{dt.note}</p>
          <p className=" whitespace-pre-line">
            {dt.priceExtra?.replace(/\n/g, "\n")}
          </p>
        </div>
      </div>

      <div className={isModule ? 'block': 'hidden'}>
        <p className={`px-8  py-4  text-sm roboto400 `}>{dt.desc}</p>
      </div>


      <div 
      
      className={`${isModule ? "block" : "hidden"} text-center absolute bottom-0 w-full  `}
      
      >
        <ButtonPrimary text={dt.button} width={'w-1/2 mb-3'} locate={'/modules'}/>
        
      </div>
     


    </div>
  );
};

export default PriceBox;
