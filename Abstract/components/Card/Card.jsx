import React from "react";
import { FaArrowRight } from "react-icons/fa6";
const Card = ({ logolink, title, content, link }) => {
  return (
    <div className="w-[40vw] flex gap-5 mx-auto px-10 ">
      <div ><img className=" w-[140px]" src={logolink} alt="logo" /></div>
      <div className="flex flex-col gap-5">
        <div className="text-2xl font-medium">{title}</div>
        <div className="text-xl ">{content}</div>
        <div className="text-primary hover:underline flex items-center gap-2">
          {link} 
          <FaArrowRight size={15} className="cursor-pointer outline-none" />
        </div>
      </div>
    </div>
  );
};

export default Card;
