import { GoTriangleRight } from "react-icons/go";
const ButtonSecondary = ({ text }) => {
  return (
    <div
      className={`text-md cursor-pointer  justify-between  text-center flex  font-medium  py-1  px-2 text-black bg-primaryYellow hover:bg-black hover:text-primaryYellow  `}
    >
      {text}
      <GoTriangleRight size={30} />
    </div>
  );
};

export default ButtonSecondary;
