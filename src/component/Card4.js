import React from 'react'
import ccccc1 from "../images/ccccc1.webp"
import ccccc2 from "../images/ccccc2.webp"
import ccccc3 from "../images/ccccc3.webp"
import ccccc4 from "../images/ccccc4.webp"


export default function Card4(props) {
  return (
    <div>
              <div className="card" >
  <img src={props.img} className="card-img-top" alt="..."/>
  <div className="card-body">
  <div className='new'><h6 className="card-title">{props.s}</h6></div>
    <h5 className="card-title">{props.name}</h5>
    <h6 className="card-title">{props.sub}</h6>
    <div className='M'>
            <div id='m'>
              <h5 className="card-title">{props.mrp}
                <del style={{fontSize:'12px',color:'gray',paddingLeft:'5px'}} className="card-title">{props.delmrp}</del>
              </h5>
              {/* <del className="card-title">{props.delmrp}</del> */}
            </div>
            <div id='dm1'>

            <div id='dm'><h6>45% off</h6></div>
            </div>

          </div>
    {/* <h1 className="card-title">{props.mrp}</h1> */}
    
    <a href="#" className="btn btn-dark">ADD TO CART</a>
  </div>
</div>
      

      
    </div>
  )
}
