import React from 'react'
import c1 from "../images/c1.webp"
import c2 from "../images/c2.webp"
import c3 from "../images/c3.webp"
import c4 from "../images/c4.webp"

export default function Card(props) {
  return (
    <div>
        <div className="card" >
  <img src={props.img} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title" >{props.name}</h5>
  </div>
</div>
      
    </div>
  )
}
