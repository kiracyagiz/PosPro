import {BsArrowLeftCircleFill} from 'react-icons/bs'


const CustomPrevArrow = (props) => (
  <div
    onClick={props.onClick}
    className="absolute top-1/2 -left-16  transform -  lg:-mx-0 z-30 lg:block text-primaryYellow -translate-y-1/2 cursor-pointer mx-12  my-4"
  >
    <BsArrowLeftCircleFill  size={30}  className='bg-black rounded-full '/>
  </div>
);


  export default CustomPrevArrow