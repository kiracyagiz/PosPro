import Image from "next/image"

const PosPageCards = ({dt}) => {
  return (
    <div className="flex flex-col lg:flex-row justify-between p-4 my-10 lg:min-h-[250px] bg-white items-center border shadow-2xl border-black lg:w-[600px]" >
        <div className="w-full p-4 flex justify-center ">
        <Image src={dt.image} width={95} height={95} />
        </div>
       <div className="flex flex-col gap-y-4 p-4 bg-white border-black shadow-xl  border"  >
        <p className="text-2xl font-semibold">{dt.header}</p>
        <p>{dt.desc}</p>
       </div>
    </div>
  )
}

export default PosPageCards