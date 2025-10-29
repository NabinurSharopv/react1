import React from 'react'
import img4 from "../assets/img/img4.png"
import img5 from "../assets/img/img5.png"
import img6 from "../assets/img/img6.png"


const Section3 = () => {
  return (
    <div className="pej3">
      <h1 className="h3">Why Switch?</h1>
      <div className="pej3-ichi">
          <div>
            <img src={img4} alt="" />
            <h1 className="h4">Powerful software</h1>
            <p className="s3-p1">Included in our service, each customer gets in-house software to access live financial dashboards and real-time management reports.</p>
          </div>
          <div>
            <img src={img5} alt="" />
            <h1 className="h4">Track cashflow</h1>
            <p className="s3-p2">Stay on top of your working capital, taxes, and cashflow, to ensure your business is performing at its best.</p>
          </div>
          <div>
            <img src={img6} alt="" />
            <h1 className="h4">Award winning support</h1>
            <p className="s3-p3">Expect the best from us. Get a dedicated finance team that will handle all your accounting, R&D credits and CFO needs.</p>
          </div>
      </div>
      <button className="btn4">Discover what we do</button>
    </div>
  )
}
export default Section3
