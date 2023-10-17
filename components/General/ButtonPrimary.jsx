

import Link from "next/link";

const ButtonPrimary = ({ text, fontStyle, param, albanianURL, enUrl }) => {
  const to = param === "sq" ? albanianURL : enUrl;

  return (
    <Link href={to || "#"}>
      <button
        className={`text-lg ${fontStyle} border-2 w-fit text-black bg-primaryYellow hover:bg-black hover:text-primaryYellow px-5 py-2 rounded-2xl border-black`}
       id="button-page">
        {text}
      </button>
    </Link>
  );
};

export default ButtonPrimary;
