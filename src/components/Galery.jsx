import React from "react";
import img1 from "../images/unnamed3.png";
import img2 from "../images/richerd.png";
import img3 from "../images/chago.jpg";
import img4 from "../images/unnamed.png";
import img5 from "../images/tesla.png";

import img7 from "../images/crypto3.png";
import img8 from "../images/unnamed2.png";
import img9 from "../images/dali.jpg";
import img10 from "../images/arte2.png";
import OneHundredPlus from "../components/OneHundredPlus";

const Galery = () => {
  return (
    <>
      <div className="glass">
        <h2 className="text-xl font-bold text-gray-400 text-center">Galery</h2>
        <h3 className=" text-purple-900 text-center text-5xl font-semibold uppercase">
          The Best <b className="text-indigo-500 font-semibold">Collection NFT's </b>of the World
        </h3>
        <div className="galery my-12 mx-44">
          <figure className="item  item1">
            <img src={img1} className="g g1 " alt="img-galery1" />
          </figure>
          <figure className="item  item2">
            <img src={img2} className="g g2 " alt="img-galery2" />
          </figure>
          <figure className="item  item3">
            <img src={img5} className="g g5 " alt="img-galery5" />
          </figure>
          <figure className="item  item4">
            <img src={img3} className="g g3 " alt="img-galery3" />
          </figure>
          <figure className="item  item7">
            <img src={img7} className="g g7 " alt="img-galery5" />
          </figure>
          <figure className="item  item9">
            <img src={img9} className="g g9 " alt="img-galery5" />
          </figure>
          <figure className="item  item5">
            <img src={img4} className="g g4 " alt="img-galery4" />
          </figure>

          <figure className="item  item8">
            <img src={img8} className="g g8 " alt="img-galery5" />
          </figure>
          <figure className="item  item10">
            <img src={img10} className="g g8 " alt="img-galery5" />
          </figure>
        </div>
        <OneHundredPlus />
      </div>
    </>
  );
};

export default Galery;
