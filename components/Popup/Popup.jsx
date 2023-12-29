import { IoMdClose } from "react-icons/io";
import ButtonPrimary from "../General/ButtonPrimary";
import { useEffect, useRef } from "react";
import thumbail2 from "../../public/thumb3.png";

import Image from "next/image";
const Popup = ({ setShowPopup, popupData }) => {
  const modalRef = useRef();

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setShowPopup(false);
      }
    };

    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setShowPopup(false);
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
      <div className="fixed inset-0 flex items-center p-2 justify-center z-50 ">
        <div
          className="bg-white w-4/5  lg:w-1/2 pb-2 h-fit  lg:rounded-lg shadow-md relative"
          ref={modalRef}
        >
          <div
            className="absolute top-2 right-2 text-gray-600 cursor-pointer"
            onClick={() => setShowPopup(false)}
          >
            <IoMdClose size={30} />
          </div>

          <div className="flex p-8  lg:p-0">
            <div className="hidden relative  lg:block w-1/2 h-[450px]   rounded-t-2xl bg-white overflow-hidden">
              <div
                aria-hidden="true"
                className="absolute w-[512px] h-[512px] bg-primaryYellow rounded-full -top-20 -right-56"
              ></div>
              <div className="absolute top-0  right-9  p-2">
            
                <Image
                  className="   w-[380px]  h-52 mb-4  object-cover rounded-2xl shadow-2xl translate-x-4 rotate-3 "
                  src={'/copu.png'}
                  width={400}
                  height={400}
                  alt="pos-video"
                />
                <Image
                  className="w-80  h-52 object-cover rounded-2xl shadow-2xl -rotate-3 translate-x-16 -translate-y-2"
                  src={thumbail2}
                  alt="fiskalizm-video"
                />
              </div>
            </div>

            <div className="lg:w-1/2   p-4   flex flex-col gap-y-16 justify-center ">
              <div className="flex flex-col gap-y-4">
              <p className=" text-xl font-semibold lg:roboto700  lg:text-2xl ">{popupData.header}</p>
              <p className=" text-3xl font-bold lg:roboto700 lg:text-3xl  ">{popupData.desc}</p>
              </div>
              <div className="mx-auto ">
              <ButtonPrimary text={popupData.button} locate={"https://app.pos.al/"}  />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Popup;
