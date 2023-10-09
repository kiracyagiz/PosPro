import Image from "next/image";
import blog1 from "../../public/blog4.png";
import BlogBox from "../Blog/BlogBox";
const FiskalizimiPage = ({ fiskalizimiData ,blogData}) => {
  
  return (
    <div className="bg-gray-100    overflow-hidden">
      {fiskalizimiData.map((dt, i) => (
        <div className="flex flex-col p-10 px-0 lg:px-52 items-center md:items-center  lg:items-start gap-y-8 lg:justify-around lg:flex-row">
          <div className="w-1/2 flex flex-col gap-y-8">
            <h1 className="roboto700 text-3xl ">{dt.titleFirst}</h1>
            <Image src={blog1} />
            <p className="roboto700 text-lg ">{dt.titleSecond}</p>
            {dt.desc.split("\n").map((line, index) => (
              <p className=" text-md" key={index}>
                {line}
              </p>
            ))}
          </div>
          <div className="flex flex-col gap-y-8 ">
            <p className="roboto700 text-2xl text-center">{dt.titleThird}</p>
          {blogData.map((dt, i) => (
           <div className="  w-4/6 items-center mx-auto text-center">
              <BlogBox
            image={dt.image}
            title={dt.title}
            desc={dt.desc}
            location={dt.location}
            key={i}
            button={dt.button}
          />
           </div>
        ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default FiskalizimiPage;
