import React from 'react'
import './about.style.css';
import Profile from '../../assest/images/profile.png';
function About() {
  return (
    <div className="container">
        <div className="row">
            <div className="col-12 col-md-6 text-md-center">
            <div className="boxOne ms-5 mt-5 ">
            <img className="proImg" src={Profile} alt="profile" className='img-fluid' />
            </div>
            </div>
            <div className="col-12 col-md-6 boxTwo">
                
            </div>
        </div>


    </div>
  )
}

export default About