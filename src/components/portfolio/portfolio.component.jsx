import React from 'react'
import './portfolio.style.css';

import i1 from '../../assest/images/i1.jpg';
import i2 from '../../assest/images/i2.jpg';
import i3 from '../../assest/images/i3.jpg';
import i4 from '../../assest/images/i4.jpg';
import i5 from '../../assest/images/i5.jpg';
import i6 from '../../assest/images/i6.jpg';

function PortFolio() {
  return (
    <div className=" container pt-5 text-center">
        <p className=" h2 m-">Portfolio</p>
            <p className="pb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint debitis mdolor</p>

            <div className="row customImg text-center g-2 p-2">
                <div className="col-6 col-md-4 ">
                    <img src={i1} className="img-fluid"/>
                </div>
                <div className="col-6 col-md-4">
                    <img src={i2} className="img-fluid"/>
                </div>
                <div className="col-6 col-md-4">
                    <img src={i3} className="img-fluid"/>
                </div>
                <div className="col-6 col-md-4">
                    <img src={i4} className="img-fluid"/>
                </div>
                <div className="col-6 col-md-4">
                    <img src={i5} className="img-fluid"/>
                </div>
                <div className="col-6 col-md-4">
                    <img src={i6} className="img-fluid"/>
                </div>
            </div>
    </div>
  )
}

export default PortFolio