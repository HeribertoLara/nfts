import React from "react";
import img1 from "../images/arte-NFT-nyan-cat.png";
import img2 from "../images/nfts2.png";
import img3 from "../images/cripto5.jpg";

const Blog = () => {
  return (
    <div className="bg-white -my-12 py-12">
      <div>
        <h2 className="text-xl font-bold text-gray-400 text-center mt-12">
          Blog
        </h2>
        <h3 className="text-purple-900 text-center text-5xl font-semibold uppercase">
          Look our <b className="text-indigo-500 font-semibold">new articles</b>{" "}
          about
          <br />
          <b className="text-indigo-500 font-semibold"> nfts</b> and
          <b className="text-indigo-500 font-semibold">blockchain</b>
        </h3>
      </div>
      <div className=" flex justify-center my-12">
        <div className="grid-three mx-12 w-66  rounded bg-gradient-to-b from-violet-500 ">
          <figure className="w-auto h-64 m-2">
            <img src={img1} alt="img-blog" />
          </figure>
          <div>
            <h4 className="font-semibold uppercase text-center">title</h4>
            <p className="m-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Est qui officia sint id dolores! Fugiat non eaque expedita placeat ratione, eos, facere maiores minus atque minima, incidunt voluptatibus. Repudiandae, neque!</p>
            <div className="flex justify-center">
            <button className="p-4 rounded-full shadow-lg shadow-indigo-500/50 uppercase font-semibold bg-indigo-600 text-white center hover:bg-indigo-900 ">Go to  Article</button>
            </div>
          </div>
        </div>
        <div className="grid-three mx-12 w-66  rounded bg-gradient-to-b from-violet-500 ">
          <figure className="w-auto h-64 m-2">
            <img src={img2} alt="img-blog" />
          </figure>
          <div>
            <h4 className="font-semibold uppercase text-center">title</h4>
            <p className="m-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Est qui officia sint id dolores! Fugiat non eaque expedita placeat ratione, eos, facere maiores minus atque minima, incidunt voluptatibus. Repudiandae, neque!</p>
            <div className="flex justify-center">
            <button className="p-4 rounded-full shadow-lg shadow-indigo-500/50 uppercase font-semibold bg-indigo-600 text-white center hover:bg-indigo-900 ">Go to  Article</button>
            </div>
          </div>
        </div>
        <div className="grid-three mx-12 w-66  rounded bg-gradient-to-b from-violet-500 ">
          <figure className="w-auto h-64 m-2">
            <img src={img3} alt="img-blog" />
          </figure>
          <div>
            <h4 className="font-semibold uppercase text-center">title</h4>
            <p className="m-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Est qui officia sint id dolores! Fugiat non eaque expedita placeat ratione, eos, facere maiores minus atque minima, incidunt voluptatibus. Repudiandae, neque!</p>
            <div className="flex justify-center">
            <button className="p-4 rounded-full shadow-lg shadow-indigo-500/50 uppercase font-semibold bg-indigo-600 text-white center hover:bg-indigo-900 ">Go to  Article</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
