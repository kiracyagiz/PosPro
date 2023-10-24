import { AiFillMail, AiFillYoutube } from "react-icons/ai";
import Link from "next/link";
import { useTranslation } from "next-i18next";

const Contact = () => {
  const {t} = useTranslation('common')
  const contact= t("Contact", { returnObjects: true });

  return (
    <div className="flex flex-col   lg:flex-row lg:justify-around lg:mx-48 items-center bg-gray-100 ">
      <div
        className="lg:w-1/2 flex flex-col  mb-12 p-8  lg:mx-auto md:mt-0 mt-20 lg:mt-36  md:gap-y-8"
        id="contact"
      >
        <div>
          <div className="w-fit mb-6">
            <h1 className="text-contactH font-semibold  roboto700">
              {contact.title}
            </h1>
            <div className="md:w-5/6 bg-primaryYellow h-1"></div>
          </div>
          <p className="text-black   tracking-tight roboto400 max-w-sm">
            {contact.desc}
          </p>
        </div>
        <div className="flex flex-col gap-y-2">
          <p className="text-sm roboto400">
            {contact.phone}
            <span className="font-bold roboto700">+355672014274</span>
          </p>
          <p className="text-sm roboto400">
            Email:<span className="font-bold roboto700">info@pos.al</span>
          </p>
        </div>

        <div className="flex flex-col   mt-8 text-center  roboto400 gap-y-4 ">
          <Link
            href={"https://www.youtube.com/channel/UCuR5SmYAHoXONCGUSwlqRSg"}
            target="_blank"
          >
            <button className="bg-black  text-white flex items-center gap-x-4 w-1/2 md:w-2/5 p-2 rounded-lg text-sm lg:text-md    hover:scale-105 hover:shadow-md  hover:shadow-black  transition-transform duration-300 ">
              <AiFillYoutube className='w-[35px]  py-1 h-[35px]   md:w-[30px] md:h-[30px]' /> {contact.contactYoutube}
            </button>
          </Link>
          <Link
            href={"mailto:info@pos.al?subject=Post.al&body="}
          >
            <button className="bg-black text-white flex items-center gap-x-4 w-1/2 md:w-2/5 p-1 rounded-lg text-sm lg:text-md    hover:scale-105 hover:shadow-md  hover:shadow-black  transition-transform duration-300 ">
              <AiFillMail className='w-[35px]   h-[35px]  py-1 md:w-[30px] md:h-[30px]' /> {contact.contactMail}
            </button>
          </Link>

        </div>
      </div>
      <div>
        <iframe
          className="border-4 w-[300px] h-[250px] mb-8 md:w-[550px] md:h-[250px] border-primaryYellow"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11985.871659322553!2d19.8150625!3d41.3204375!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13503198e4d3c6ad%3A0x9df0ae61e6384333!2sPOS%20Shpk%20%7C%20Program%20Fiskalizimi%20Pos!5e0!3m2!1sen!2s!4v1697535797507!5m2!1sen!2s"          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;


