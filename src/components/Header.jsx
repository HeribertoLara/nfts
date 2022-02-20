import React from "react";
import logo from "../images/logoBorder.png"
 
const Header = () => {
  return (
    <header className=" grid-two ">
        <div className="place-items-center my-2">

        <img src={logo} alt="logo" className=" w-24 h-36 gray ml-44 "></img>
        </div>
      <div className="flex  place-items-center">
        <a className="text-white text-xl  mx-12 cursor-pointer hover:bg-white hover:text-purple-700 p-1 rounded full">Home</a>
        <a className="text-white text-xl  mx-12 cursor-pointer hover:bg-white hover:text-purple-700 p-1 rounded full"> Graphics</a>
        <a className="text-white text-xl  mx-12 cursor-pointer hover:bg-white hover:text-purple-700 p-1 rounded full">About-us</a>
        
        
        <div className="border-2 rounded-full hover:bg-white  ">
          <a className="text-white text-xl  mx-12 cursor-pointer hover:text-purple-700">Login</a>
          </div>
      </div>
    </header>
  );
};

export default Header;
