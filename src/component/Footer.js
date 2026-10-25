import React from 'react'
import "../cssfiles/index.css"
import logo from "../images/logo2.avif"
import f1 from "../images/f1.webp"
import f2 from "../images/f3 (2).png"
import f3 from "../images/f3 (1).png"
import f4 from "../images/f4.webp"

export default function Footer() {
  return (
    <div>
        <div className='f'>
        <section className='container'>
            <div className='D'>
            <div id='div1'>
                <img className='pic' src={logo} alt="" />
                <h3 className='join'>JOIN THE CLUB</h3>
                <form action="">
                    {/* <label htmlFor=""></label> */}
                    <input className='inp' type="emial" name="" id="" placeholder='Email' />
                </form>
                <p style={{color:'white'}}>Subscribe today to hear about our newest offers, new products, collaborations, everything Portronics - Directly to your inbox.</p>

            </div>
            <div id='div2'>
                <h4>Become Partner</h4><br />
                <li>Corporate gifting</li><br />
                <li>Become aPartner</li>
            </div>
            <div id='div3'>
                <h4>About Us</h4><br />
                <li>About Us</li>
                <li>Blogs</li>
                <li>Warranty Policy</li>
                <li>CSR Policy</li>
                <li>Private Policy</li>
                <li>Term and Condition</li>
                <li>E-Waste Management</li>
            </div>
            <div id='div4'>
                <h4>Help Desk</h4><br />
                <li>Support</li>
                <li>Track Your Order</li>
                <li>Warranty Registration </li>
                <li>How to claim Warranty</li>
            </div>
            <div id='div5'>
                <h4 className='join'>Follow Us</h4>
                <div className='fu'>
                    <img id='im1' src={f1} alt="" />
                    <img id='im2' src={f2} alt="" />
                    <img id='im3' src={f3} alt="" />
                    <img id='im4' src={f4} alt="" />
                </div><br /><br />
                <h4 className='join'>Contact us</h4><br />
                <h5>help@portronic.com</h5>
                
                <h5>0123456789</h5>
            </div>
            </div>
            <p style={{color:'white' ,textAlign:'center'}}>©️ 2024 Portronics Digital Private Limited. All Rights Reserved.
CIN - U74140DL2010PTC203767 <br />
For Queries Contact us: Legal, Portronics Digital Private Limited, Vegas Business <br /> Tower, Unit No. - 1082 to 1088,
Floor 10, Plot. - 6, Sector 14 Dwarka,<br /> Dwarka, New Delhi, Delhi 110075, India</p>

        </section>
      
        </div>
  
    </div>
  )
}
