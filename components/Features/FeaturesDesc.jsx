import React from "react";

const FeaturesDesc = ({title,desc}) => {
  return (
    <div className="flex flex-col  ">
      <p className="roboto700">{title}</p>
      <ul className="flex flex-col  list-disc gap-x-2">
        {desc.split("\n").map((line, index) => (
          <li key={index}>{line}</li>
        ))}
      </ul>
    </div>
  );
};

export default FeaturesDesc;
