import Image from "next/image";
import { AiFillCheckCircle, AiFillThunderbolt } from "react-icons/ai";
import Link from "next/link";
const PosCards = ({ dt, isModule, isPage }) => {
  return (
    <div className="  lg:w-72 h-405    mt-8 relative bg-white border-2  border-gray-500 rounded-lg mx-auto cursor-default flex flex-col gap-y-2 ">

      
        <Image
          src={`${dt.image}`}
          width={70}
          height={70}
          className="mx-auto mt-4"
        />
      
      <div className="  border-b-2 border-gray-300">
        <p className="text-center text-lg  font-bold mb-4 py-1 w-fit flex mx-auto px-4">
          {dt.header}
        </p>
      </div>

      <div >
        <p className="px-8  py-4  lg:text-sm roboto400 ">{dt.desc}</p>
      </div>
  
      <Link
        href={`/modules`}
        className={`${isPage ? "hidden" : "block"} text-center absolute bottom-0 w-full   `}
      >
        <button className="bg-primaryYellow  mx-auto text-center  mb-2  border-2 left-7 border-black  p-1 w-4/5">
          View
        </button>
      </Link>
    </div>
  );
};

export default PosCards;
