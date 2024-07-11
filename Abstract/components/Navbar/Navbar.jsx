import React from "react";
import { BiLogoMastercard } from "react-icons/bi";
const Navbar = () => {
  return (
    <div className="flex bg-black text-white justify-around p-4 h-[85px]">
      <div className="flex gap-2">
        <div className="flex gap-2 items-center hover:text-slate-300 hover:cursor-pointer">
          <BiLogoMastercard size={25} />
          <h1 className="text-2xl">Absract</h1>
        </div>
        <div className="flex gap-2 items-center">
          <h1 className="text-2xl">|</h1>
          <h1 className="text-2xl hover:underline hover:cursor-pointer">Help Center</h1>
        </div>
      </div>
      <div className="flex gap-3">
        <button className="input-request text-xl ">Submit a Request</button>
        <button className="input-submit text-xl hover:bg-white hover:text-black">Sign In</button>
      </div>
    </div>
  );
};

export default Navbar;
