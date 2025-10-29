import React from 'react'
import img7 from "../assets/img/img7.png"
import img8 from "../assets/img/img8.png"
import img9 from "../assets/img/img9.png"



const Section4 = () => {
  return (
    <div className="pej4">
        <h1 className="h5">Plans built for growth</h1>
      <div className="pej4-ichi">
          <div>
            <img src={img7} alt="" />
            <h1 className="h4">Early stage startup</h1>
            <p className="s3-p1">Need your accounting system set up? Learn financial best practice and prime your business for the next stage of growth. We get you moving quickly with an accounting solution that does what you need.</p>
          </div>
          <div>
            <img src={img8} alt="" />
            <h1 className="h4">Scale up</h1>
            <p className="s3-p2">Spend less time worrying about your finances and more time shaping your company’s future. Get your bookkeeping, R&D credits and CFO problems, solved.</p>
          </div>
          <div>
            <img src={img9} alt="" />
            <h1 className="h4">High growth</h1>
            <p className="s3-p3">Gain the financial accuracy, visibility, and real-time analysis you need to make smarter decisions, drive efficiency, and achieve total organizational alignment.</p>
          </div>
      </div>
    </div>
  )
}

export default Section4
