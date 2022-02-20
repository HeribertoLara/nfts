import React from "react";

const Footer = () => {
  return (
    <div className="grid-four glass    p-12  mt-44 m">
      <div className="">
        <h4 className="uppercase font-semibold"> partners</h4>
        <p>
          {" "}
          Metaswapb <br /> Foundation
          <br /> EMURGO
          <br /> IOHK
        </p>
      </div>
      <div className="">
        <h4 className="uppercase font-semibold"> Media</h4>
        <p>
          {" "}
          Foundation
          <br /> EMURGO{" "}
        </p>
      </div>
      <div className="support">
        <h4 className="uppercase font-semibold"> support</h4>
        <p>
          {" "}
          Foundation
          <br /> EMURGO IOHK
        </p>
      </div>
      <div className="">
        <h4 className="uppercase font-semibold"> Comunity</h4>
        <ul>
          <li>Forum</li>
          <li>Ambassadors</li>
          <li>Newsletter</li>
          <li>Social Channels</li>
          <li>Code of Conduct</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
