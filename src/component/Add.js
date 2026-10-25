import React from 'react'
import "../cssfiles/index.css"
import s1 from "../images/s1.avif"
import s2 from "../images/s2.avif"
import s3 from "../images/s3.avif"
import s4 from "../images/s4.avif"
import s5 from "../images/s5.avif"
import s6 from "../images/s6.webp"
export default function Add() {
  return (
    <div className='container'>
        <hr />
        <h1 style={{textAlign:'center'}}>IN THIS PRESS</h1>
        <p style={{textAlign:'center'}}>Places where we have been featured</p>
        <div className='mydiv'>
            {/* <h1>IN TIS PRESS</h1>
        <p>Places where we have been featured</p> */}
        <div><img src={s1} alt="" /></div>
        <div><img src={s2} alt="" /></div>
        <div><img src={s3} alt="" /></div>
        <div><img src={s4} alt="" /></div>
        <div><img src={s5} alt="" /></div>
        <div><img src={s6} alt="" /></div>
        </div>
    </div>
  )
}
