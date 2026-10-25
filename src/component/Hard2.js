import React from 'react'
import ccc1 from "../images/ccc1.webp"
import ccc2 from "../images/ccc2.webp"
import ccc3 from "../images/ccc3.webp"
import ccc4 from "../images/ccc4.jpg"
export default function Hard2(props) {
  return (
    <div>
      <div className="card" >
        <img src={props.img} className="card-img-top" alt="..." />
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
