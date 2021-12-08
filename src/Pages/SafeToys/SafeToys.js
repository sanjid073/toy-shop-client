import React from 'react';
import "./SafeToys.css"
import img1 from "../../img/safe-icon-1.png"
import img2 from "../../img/safe-icon-2.png"
import img3 from "../../img/safe-icon-3.png"
import img4 from "../../img/safe-icon-5.png"
import { useHistory } from 'react-router';
const SafeToys = () => {
    const history = useHistory()
    const handleClick = () => {
        history.push("/shop")
    }
    return (
        <div className="safe-toys">
            <div className="container text-white">
                <div className="row">
                    <div className="col-lg-6"></div>
                    <div className="col-lg-6">
                        <h1 className="mb-5">Safe Toys for Children</h1>
                        <div className="d-flex align-items-center mb-4">
                            <img className="me-3" src={img1} alt="" />
                            <h6>Beautiful & well-designed</h6>
                        </div>
                        <div className="d-flex align-items-center mb-4">
                            <img className="me-3" src={img2} alt="" />
                            <h6>High durable toys</h6>
                        </div>
                        <div className="d-flex align-items-center mb-4">
                            <img className="me-3" src={img3} alt="" />
                            <h6>Recyclable materials</h6>
                        </div>
                        <div className="d-flex align-items-center mb-4">
                            <img className="me-3" src={img4} alt="" />
                            <h6>Safe & non-toxic</h6>
                        </div>
                        <button onClick={handleClick} className="btn my-btn">Get Started Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SafeToys;