import Image from "next/image";
import ButtonSecondary from "../General/ButtonSecondary";
import Link from "next/link";
const BlogBox = ({ image, title, desc, location ,button}) => {
  return (
    <div className="w-70 md:w-full  lg:w-70 flex flex-col items-center justify-center">
      <div className="flex flex-col border-2  rounded-lg border-black shadow-xl bg-white hover:scale-105 hover:shadow-md cursor-pointer hover:shadow-black  transition-transform duration-300">
      <img src={image} className="w-full p-4 mx-auto"  alt={title} />
        <a href={location}>
          <div className="p-4 flex flex-col gap-y-4">
            <p className="font-bold text-primaryYellow">Posted on 28/09/2023</p>
            <h3 className="roboto700 text-sm">{title}</h3>
            <p className="max-w-lg text-sm">{desc}</p>
            <ButtonSecondary text={button} />
          </div>
        </a>
       
      </div>
    </div>
  );
};

export default BlogBox;
