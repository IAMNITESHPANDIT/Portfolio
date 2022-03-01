import './review.style.css';
import accountIcon from '../../assest/icon/ac.png';
import React from 'react'

function Review() {
  return (
    <div className="container ps-4 m-4 ">
        <div className="row expert">
            <div className="col-12 col-md-4">
                <p className=" h1 text-center pt-5 mt-5">What Export says About us</p>
            </div>
            <div className="col-12 col-md-4">
                <div className="first  m-3 text-black p-4">
                    <p className="h2">"Best Developer"</p>
                    <p className="lead ">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque, doloremque?</p>
                    <img src={accountIcon} class="img-fluid" alt="ac icon"/>
                    <span className="ps-2">John Franklin</span>
                    <br/>
                    <span className="ps-4">Chennai ,Tamilnadu, India</span>
                </div>
            </div>
            <div className="col-12 col-md-4">
                <div className="first m-3 text-black p-4">
                    <p className="h2">"Creative Dev"</p>
                    <p className="lead ">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque, doloremque?</p>
                    <img src={accountIcon} class="img-fluid" alt="ac icon"/>
                    <span className="ps-2">Nitesh Pandit</span>
                    <br/>
                    <span className="ps-4">Gorkhpur ,U.P, India</span>
                </div>
            </div>

        </div>

    </div>
  )
}

export default Review;