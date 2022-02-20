import React from "react";
import icon1 from "../images/i1.png";
import icon2 from "../images/iGear.png";
import icon3 from "../images/iExtends.png";


const OurServices = () => {
  return (
    <div className="  content-center bg-purple-100  center">
      <h2 className=" text-xl font-bold text-gray-400 text-center"> About us</h2>
      <h3 className=" text-purple-900 text-center text-5xl font-semibold uppercase"> We are <b className="text-indigo-500 font-semibold ">the best</b> option </h3>
      <div className="mx-24 flex justify-center">

      <div className="bg-white rounded card c1 m-4 box shadow-lg shadow-indigo-500/50">
        <div className="px-4 ">
          <img src={icon1} alt="" className="mx-auto " />
          <div className="text-card">
            <h5 className=" mt-12  font-semibold text-center text-xl uppercase text-purple-900"> Reload</h5>
            <p className="text-xl text-purple-800 text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perspiciatis, cumque consectetur fugiat architecto eaque eveniet,
              odit recusandae commodi neque quasi provident. Dolorum, asperiores
              expedita similique quo sunt beatae dolor impedit?
            </p>
          </div>
        </div>
      </div>
      <div className="bg-white rounded card c2 m-4 box shadow-lg shadow-indigo-500/50">
        <div className="p-4 ">
          <img src={icon2} alt="" className="mx-auto " />
          <div className="text-card">
          <h5 className="  mt-12 font-semibold text-center text-xl uppercase text-purple-900"> Configurartion</h5>
            <p className="text-xl text-purple-800 text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perspiciatis, cumque consectetur fugiat architecto eaque eveniet,
              odit recusandae commodi neque quasi provident. Dolorum, asperiores
              expedita similique quo sunt beatae dolor impedit?
            </p>
          </div>
        </div>
      </div>
      <div className="bg-white rounded card c3 m-4 box shadow-lg shadow-indigo-500/50">
        <div className="p-4 ">
          <img src={icon3} alt="" className="mx-auto "  />
          <div className="text-card">
          <h5 className="  mt-12 font-semibold text-center text-xl uppercase text-purple-900"> Expand </h5>
            <p className="text-xl text-purple-800 text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perspiciatis, cumque consectetur fugiat architecto eaque eveniet,
              odit recusandae commodi neque quasi provident. Dolorum, asperiores
              expedita similique quo sunt beatae dolor impedit?
            </p>
          </div>
        </div>
      </div>
      </div>
      
    </div>
  );
};

export default OurServices;
