 import React from 'react'
 import logo from "../images/logo2.avif"
 import "../cssfiles/index.css"
 
 export default function Index() {
   return (
     <div >
        <nav className="navbar navbar-expand-lg bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#"><img style={{height:'50px',width:'200px'}} src={logo} alt="" /></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a style={{color:'white'}} className="nav-link active" aria-current="page" href="#">New Arrivals</a>
        </li>
        <li className="nav-item">
          <a style={{color:"white"}} className="nav-link active" href="#">Daily Deals</a>
        </li>
        <li className="nav-item">
          <a style={{color:"white"}} className="nav-link active"  href="#">Corporate Gifting</a>
        </li>
        <li className="nav-item">
          <a style={{color:"white"}} className="nav-link active" href="#">Support</a>
        </li>
        <li className="nav-item dropdown">
          <a  style={{color:"white"}} className="nav-link active dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Catagories
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
      </ul>
     <img src="" alt="" />
    </div>
  </div>
</nav>
       
     </div>
   )
 }
 
