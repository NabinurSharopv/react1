import React from 'react'
import img2 from "../assets/img/img2.png"
const Section1 = () => {
  return (
    <div className="pej1">
      <div className="div1">
        <h1 className="h1">Get your finances right</h1>
        <p className="p1">Get your finances right with Accountancy Cloud. We offer the best accounting, R&D credits and CFO services for ambitious businesses who want to grow.</p>
          <p className="p2">Switching to us is simple</p>
         <button className="btn3">Talk to us</button>
       </div>
       <div className="div2">
       <img src={img2} alt="" />
       </div>
    </div>
  )
}

export default Section1