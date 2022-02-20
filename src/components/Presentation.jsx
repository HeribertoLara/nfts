import React from "react";
import cripto from "../images/NFTs3.png";

const Presentation = () => {
  return (
    <div className=" text-white ">
      <div className=" grid-two mx-24 my-12 py-12">
        <div className=" glass">
          <h1 className="uppercase   text-purple-800 text-5xl roboto-bold  mt-12 mx-24 rotate-3d">
            Meta Swap<br></br>
            <b className="text-indigo-500 font-semibold ">The Blockchain</b> <br></br>and NFT's
          </h1>
          <div className="grid-two px-24">

          <button className=" rounded-full bg-indigo-500 shadow-lg shadow-indigo-500/50 my-6 text-2xl w-44 uppercase hover:bg-indigo-800">Find NFT's</button>
          <button className=" rounded-full bg-indigo-500 shadow-lg shadow-indigo-500/50 my-6 text-2xl w-44 uppercase hover:bg-indigo-800">about us</button>
          </div>
        </div>
       
          <img
            src={cripto}
            alt="cripto"
            className="img-1  "
          />
      
      </div>
    </div>
  );
};

export default Presentation;
