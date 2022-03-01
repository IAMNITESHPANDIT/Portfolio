import React from 'react'
import './navbar.style.css';
import Logo from '../../assest/icon/logo.png';
import Profile from '../../assest/images/profile.png';

/**icon would be here */

import s1 from '../../assest/icon/s1.svg';
import s2 from '../../assest/icon/s2.svg';
import s3 from '../../assest/icon/s3.png';



function NavBar() {
  return (
    <div className="sub-container">
   <nav className="navbar navbar-expand-lg navbar-light">
     <div className="container">
       <a className="navbar-brand" href="#"> <img className="img-fluid" src={Logo} alt="</Code>" width="60px" height="40px" /></a>
       <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
       </button>
      <div className="collapse navbar-collapse text-center " id="navbarNav">
      <ul className="navbar-nav  ms-auto">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">About me</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Services</a>
        </li>
        <li className="nav-item">
          <a className="nav-link"href="#" >Portfolio</a>
        </li>
        <li className="nav-item">
          <a className="nav-link " href="#">Community</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    <div className="styled-box-one  container">
        <p className="lead ms-5">Hello I'm </p>
        <p className="lead ms-5 name">John Doe </p>
        <p className="lead ms-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, quaerat? </p>
        <p className="h2 ms-5 follow">Follow me
        <a href="https://github.com/iamniteshpandit" target="_blank"><img className="img-fluid" src={s2} alt=".." width="20px" height="20px"/></a>
        <a href="https://www.instagram.com/iamniteshpandit" target="_blank"><img className="img-fluid" src={s3} alt=".." width="20px" height="20px"/></a>
        <a href="https://www.facebook.com/iamniteshpandit" target="_blank"><img className="img-fluid" src={s1} alt=".." width="20px" height="20px"/></a>
        </p>
    </div>
    <div className="styled-box d-md-block d-none">
    <img className='img-fluid imgProfile' src={Profile} alt="profile image"/>
    </div>
    </div>
  )
}

export default NavBar;