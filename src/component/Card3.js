import React from 'react'
import cccc1 from "../images/cccc1.webp"
import cccc2 from "../images/cccc2.webp"
import cccc3 from "../images/cccc3.webp"
import cccc4 from "../images/cccc4.webp"



export default function Card3(props) {
  return (
    <div>
             <div className="card" >
  <img src={props.img} className="card-img-top" alt="..."/>
  <div className="card-body">
  <div className='new'><h6 className="card-title">{props.s}</h6></div>
    <h5 className="card-title">{props.name}</h5>
    <h6 className="card-title">{props.sub}</h6>
    {/* <h1 className="card-title">{props.mrp}</h1> */}
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
    
    <a href="#" className="btn btn-dark">ADD TO CART</a>
  </div>
</div>
      
    </div>
  )
}
