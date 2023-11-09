import React from "react";
import Link from "next/link";
import Image from "next/image";
const PriceBox = ({ dt ,isPage,key}) => {

  return (
    <div className={ `lg:w-72 min-h-[420px] lg:min-h-[400px] mt-8  z-0  bg-white border-2 border-gray-500 rounded-lg mx-auto  justify-between   flex flex-col gap-y-2`} 
    target="_blank"
    key={key}
    >
    <Image  src={dt.image} width={80} height={70} className={`mx-auto m-2 ${isPage ? 'mt-6' : ''}`}/>
      <div className="  border-b-2 border-gray-300">
        <p className="text-center font-bold mb-4   bg-primaryYellow w-fit flex mx-auto px-4 rounded py-1">
          {dt.header}
        </p>
      </div>

      <div>
        <p className=" text-sm px-5 py-4 font-semibold ">{dt.desc}</p>
      </div>

<Link href={`/modules`} className={`${isPage ? 'hidden' : 'block'} text-center   `} >
<button className="bg-primaryYellow  mx-auto text-center  mb-2  border-2 left-7 border-black  p-1 w-4/5">View</button>
</Link>
      
    </div>
  );
};

export default PriceBox;
