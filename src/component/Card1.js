import React from 'react'
import cc1 from "../images/cc1.webp"
import cc2 from "../images/cc2.webp"
import cc3 from "../images/cc3.webp"
import cc4 from "../images/cc4.webp"
// import "../cssfiles/index.cssfiles"
export default function Card1(props) {
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
                <del style={{fontSize:'12px',color:'gray',paddingLeft:'5px'}} className="card-title" >{props.delmrp}</del>
              </h5>
              {/* <del className="card-title">{props.delmrp}</del> */}
            </div>
            <div id='dm1'>

            <div id='dm'><h6>45% off</h6></div>
            </div>

          </div>
          {/* <h6 className="card-title">{props.mrp} </h6> */}

          <a href="#" className="btn btn-dark">ADD TO CART</a>
        </div>
      </div>

    </div>

  )
}
