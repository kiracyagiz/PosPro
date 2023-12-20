import { IoMdClose } from "react-icons/io";
import Image from "next/image";
import ButtonPrimary from "../General/ButtonPrimary";
const Popup = ({ setShowPopup }) => {
  return (
    <>
      {/* Dark overlay */}
      <div className="fixed inset-0 bg-black opacity-50 z-50"></div>

      {/* Modal */}
      <div className="fixed inset-0 flex items-center p-2 justify-center z-50">
        <div className="bg-white lg:w-1/2 h-full  rounded shadow-md relative">
          <div
            className="absolute top-2 right-2 text-gray-600 cursor-pointer"
            onClick={() => setShowPopup(false)}
          >
            <IoMdClose size={30} />
          </div>


          <div className="flex h-screen">
            <div className="w-1/2 h-full">
              <img src="/fiscalizimi.jpg" alt="" className=" h-[98%]  object-cover" />
            </div>
            <div className="w-1/2   p-4   flex flex-col mx-auto justify-center  lg:px-14 gap-y-8">
              <p className="roboto700 lg:text-2xl ">Tani le të provojmë.</p>
              <p className="roboto700 lg:text-3xl  ">Program shitje dhe fiskalizimi për cdo biznes</p>
              <ButtonPrimary text={'Provo Pos!'} locate={'https://pos.al/login'} />
            </div>
          </div>


        </div>
      </div>
    </>
  );
};

export default Popup;
