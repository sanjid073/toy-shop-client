import React from "react";
import icon1 from "../../img/Works/work-icon-1.png";
import icon2 from "../../img/Works/work-icon-2.png";
import icon3 from "../../img/Works/work-icon-3.png";
const HowitWorks = () => {
  return (
    <div className="bg-light py-5 ">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h1>Here's how it works</h1>
          </div>
          <div className="col-lg-4 text-center p-5">
            <img className="mb-3" src={icon1} alt=""></img>
            <h3 className="fw-bold mb-3">Inspires</h3>
            <p className="w-75 mx-auto">
              Imperdiet massa tincidunt nunc pulvinar sapien et ligula
              ullamcorper. Elementum sagittis.
            </p>
          </div>
          <div className="col-lg-4 text-center p-5">
            <img className="mb-3" src={icon2} alt=""></img>
            <h3 className="fw-bold mb-3">Encouraging</h3>
            <p className="w-75 mx-auto">
              Morbi tincidunt ornare massa eget. Ullamcorper a lacus vestibulum
              sed arcu non odio.
            </p>
          </div>
          <div className="col-lg-4 text-center p-5">
            <img className="mb-3" src={icon3} alt=""></img>
            <h3 className="fw-bold mb-3">Creative</h3>
            <p className="w-75 mx-auto">
              Cras semper auctor neque vitae tempus quam pellentesque. At augue
              eget arcu dictum.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowitWorks;
