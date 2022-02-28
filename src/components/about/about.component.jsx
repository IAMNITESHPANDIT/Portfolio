import React from 'react'
import './about.style.css';
import Profile from '../../assest/images/profile.png';
function About() {
  return (
    <div className="container">
        <div className="row">
            <div className="col-12 col-md-4 ">
            <div className="boxOne mt-5 ">
            <img className="proImg" src={Profile} alt="profile" className='img-fluid' />
            </div>
            </div>
            <div className="col-12 col-md-8 boxTwo mt-5 text-start ">
                <p className="h2">ABOUT ME</p>
                <p className="p lead">Lorem ipsum Lorem Lorem ipsum 
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint debitis minus error velit natus earum.
                dolor sit amet consectetur, adipisicing elit. ipsum dolor sit amet consectetur adipisicing elit. Eligendi exercitationem alias, tempora qui numquam reprehenderit. Sunt totam nihil reprehenderit placeat? dolor sit amet consectetur adipisicing elit. Eius, dignissimos.
                </p>
                <button className="readmeBtn rounded">Read More</button>
            </div>
        </div>
    </div>
  )
}

export default About