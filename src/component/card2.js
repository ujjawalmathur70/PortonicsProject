import React from 'react'
import ccc1 from "../images/ccc1.webp"
import ccc2 from "../images/ccc2.webp"
import ccc3 from "../images/ccc3.webp"
import ccc4 from "../images/ccc4.jpg"

export default function card2(props) {
  return (
    <div>
        <div className="card" >
  <img src={props.img} className="card-img-top" alt="..."/>
  <div className="card-body">
  <div className='new'><h6 className="card-title">{props.s}</h6></div>
  
    <h5 className="card-title">{props.name}</h5>
    <h6 className="card-title">{props.sub}</h6>
    <h1 className="card-title">{props.mrp}</h1>
    
    <a href="#" className="btn btn-dark">ADD TO CART</a>
  </div>
</div>
      
    </div>
  )
}
