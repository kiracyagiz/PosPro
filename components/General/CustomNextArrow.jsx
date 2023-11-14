 
 import {BsArrowRightCircleFill} from 'react-icons/bs'


 const CustomNextArrow = (props) => (
  <div
    onClick={props.onClick}
    className="absolute top-1/2 -right-16 transform    lg:-mx-0 z-30 text-primaryYellow lg:block -translate-y-1/2 cursor-pointer mx-12  my-4"
  >
    <BsArrowRightCircleFill  size={30} className='bg-black rounded-full' />
  </div>
);
  export default CustomNextArrow