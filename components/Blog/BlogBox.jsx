import Link from "next/link";

const BlogBox = ({offerData}) => {
  return (
<div className="container  mt-12 mx-auto  p-4 md:p-0 " id="fiskalizimi">
  
  <div className="shadow-lg flex flex-wrap w-full md:w-2/3 mb-8 lg:w-4/5 mx-auto">
    
    <div className={`bg-cover bg-bottom border w-full md:w-1/3 h-64 md:h-auto relative `} style={{backgroundImage: `url(${offerData.image})`}} >
      <div className="absolute text-xl">
        <i className="fa fa-heart text-white hover:text-red-light ml-4 mt-4 cursor-pointer"></i>
      </div>
    </div>
    
    <div className="bg-primaryYellow w-full lg:min-h-[350px] md:w-2/3 ">
      <div className="h-full mx-auto px-6 md:px-0 md:pt-6 md:-ml-6 relative ">
        <div className="bg-white lg:h-full p-6 -mt-6 md:mt-0 relative mb-4 md:mb-0 flex flex-wrap md:flex-wrap items-center">
          <div className="w-full lg:w-1/5 lg:border-right lg:border-solid text-center md:text-left">
            <h3 className='roboto700'>{offerData.header}</h3>
            <p className="mb-0 mt-3 roboto400 text-primaryYellow text-sm ">{offerData.title}</p>
            <hr className="w-1/4 md:ml-0 mt-4  border lg:hidden"/>
          </div>
          
          <div className="w-full lg:w-3/5 lg:px-3">
            <p className="text-md roboto400  mt-4 lg:mt-0 text-justify md:text-left text-sm">
            {offerData.desc}
            </p>
          </div>
          
          <div className="w-full  lg:w-1/5 mt-6 lg:mt-0 lg:px-4 text-center md:text-left">
            <Link href={offerData.location} target="_blank">
            <button className="roboto700   bg-white hover:bg-primaryYellow hover:text-white border-2 border-black border-grey  px-2 lg:px-0 lg:w-full  py-2">{offerData.button}</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>

  
</div>

  );
};

export default BlogBox;
