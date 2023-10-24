import Link from "next/link";

const ButtonPrimary = ({ text, fontStyle, locate }) => {

  return (
    <Link href={`${locate}`} >
      <button
        className={`text-lg ${fontStyle} border-2 w-fit text-black bg-primaryYellow hover:bg-black hover:text-primaryYellow px-5 py-2 rounded-2xl border-black`}
       id="button-page">
        {text}
      </button>
    </Link>
  );
};

export default ButtonPrimary;
