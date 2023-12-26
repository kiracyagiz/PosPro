import { IoMdClose } from "react-icons/io";
import ButtonPrimary from "../General/ButtonPrimary";
import { useEffect, useRef } from "react";
import thumbail1 from "../../public/thumbail1.png";
import thumbail2 from "../../public/thumbail2.png";
import {BsYoutube} from 'react-icons/bs'
import Image from "next/image";
const Popup = ({ setShowPopup }) => {
  const modalRef = useRef();

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setShowPopup(false);
      }
    };

    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setShowPopup(false)
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("click", handleClickOutside);
    };
  }, [setShowPopup]);

  return (
    <>
      {/* Dark overlay */}
      <div className="fixed inset-0 bg-black opacity-50 z-50"></div>

      {/* Modal */}
      <div
        className="fixed inset-0 flex items-center p-2 justify-center z-50"
       
      >
        <div className="bg-white w-4/5  lg:w-1/2 h-3/4  rounded shadow-md relative"  ref={modalRef}>
          <div
            className="absolute top-2 right-2 text-gray-600 cursor-pointer"
            onClick={() => setShowPopup(false)}
          >
            <IoMdClose size={30} />
          </div>

          <div className="flex h-screen">
          <div className="hidden relative  lg:block w-1/2 h-3/5 bg-white overflow-hidden">
         
          <div
            aria-hidden="true"
            className="absolute w-[512px] h-[512px] bg-primaryYellow rounded-full -top-20 -right-56"
          ></div>
          <div className="absolute top-10 right-8">
            <Image
              className="w-64 h-36 object-cover rounded-2xl shadow-2xl rotate-3"
              src={thumbail1} 
              alt="pos-video"
            />
            <Image
              className="w-64 h-36 object-cover rounded-2xl shadow-2xl -rotate-3 translate-x-16 -translate-y-2"
              src={thumbail2}
              alt="fiskalizm-video"
            />
          </div>
          
          <div className="relative p-8 flex flex-col justify-end h-full space-y-4 w-2/3 mt-8">
            <p className="uppercase font-semibold text-xs text-primaryYellow tracking-wider roboto700">
            YOUTUBE

            </p>
            <h3 className="text-4xl  font-bold text-gray-900">
            POS.AL Youtube
            </h3>
    
          </div>
        </div>
            <div className="w-1/2   p-4   flex flex-col gap-y-8 justify-center mb-36 ">
              <p className="roboto700 lg:text-2xl ">Tani le të provojmë.</p>
              <p className="roboto700 lg:text-3xl  ">
                Program shitje dhe fiskalizimi për cdo biznes
              </p>
              <ButtonPrimary
                text={"Provo Pos!"}
                locate={"https://pos.al/login"}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Popup;
