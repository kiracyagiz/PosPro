import { AiFillMail, AiFillYoutube } from "react-icons/ai";
import Link from "next/link";
import { useTranslation } from "next-i18next";

const Contact = () => {
  const {t} = useTranslation('common')
  const contact= t("Contact", { returnObjects: true });

  return (
    <div className="flex flex-col lg:flex-row md:justify-around md:mx-48 items-center bg-gray-100 ">
      <div
        className="w-1/2 flex flex-col  mb-12 p-8 md:p-0 md:mx-auto mt-20 md:mt-36  gap-y-8"
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

        <div className="flex flex-col items-center text-center md:items-start roboto400 gap-y-4 gap-x-4">
          <Link
            href={"https://www.youtube.com/channel/UCuR5SmYAHoXONCGUSwlqRSg"}
          >
            <button className="bg-black text-white flex items-center gap-x-2 px-3 py-1 rounded-lg text-sm lg:text-md   hover:scale-105 hover:shadow-md  hover:shadow-black  transition-transform duration-300 ">
              <AiFillYoutube className='w-[50px] h-[50px] md:w-[30px] md:h-[30px]' /> {contact.contactYoutube}
            </button>
          </Link>

          <button className="bg-black w-full md:w-fit text-white flex items-center gap-x-2 px-4 py-1 rounded-lg  text-sm lg:text-md  hover:scale-105 hover:shadow-md  hover:shadow-black  transition-transform duration-300">
            <AiFillMail className='w-[55px] h-[45px] md:w-[25px] md:h-[25px]' />
            <a href="mailto:info@pos.al?subject=Post.al&body=">
              {contact.contactMail}
            </a>
          </button>
        </div>
      </div>
      <div>
        <iframe
          className="border-4 w-[300px] h-[250px] mb-8 md:w-[550px] md:h-[250px] border-primaryYellow"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11984.698093065708!2d19.7993689!3d41.3268182!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x135031960033562b%3A0x19ed89b9c0d3487a!2sMente.al!5e0!3m2!1str!2s!4v1696033730037!5m2!1str!2s"
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
