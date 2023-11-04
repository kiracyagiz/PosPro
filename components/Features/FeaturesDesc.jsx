import {BiSolidCheckSquare} from 'react-icons/bi'

const FeaturesDesc = ({title,desc}) => {
  return (
    <div className="flex flex-col  ">
      <p className="roboto700 my-4">{title}</p>
      <ul className="flex flex-col  list-none gap-x-2">
        {desc.split("\n").map((line, index) => (
          <div className='flex items-center gap-x-2 ' key={index}>
          <BiSolidCheckSquare size={15} color='orange'/>
          <li  className='my-1'>{line}</li>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default FeaturesDesc;
