import React from 'react'
import x1 from "../images/carasol1.webp"
import x2 from "../images/carasol2.webp"
import x3 from "../images/carasol3.webp"
import x4 from "../images/carasol4.webp"
import x5 from "../images/carasol5.webp"
import x6 from "../images/carasol6.webp"


export default function Carasol() {
    return (
        <div>
            <div id="carouselExample" className="carousel slide">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={x1} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={x2} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={x3} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={x4} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={x5} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={x6} className="d-block w-100" alt="..." />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>


        </div>
    )
}
