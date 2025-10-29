import React from 'react'
import img20 from "../assets/img/Group 37.png"


const Nav = () => {
  return (
    <nav>
          <div>
            <img src={img20} alt="" />
          </div>
          <ul>
            <li>Home</li>
            <li>How it works</li>
            <li>What we do</li>
            <li>What we do</li>
            <li>Resources</li>
          </ul>
          <div className="btnlar">
            <button className="btn1">Login</button>
            <button className="btn2">Talk to an Expert</button>
          </div>
     </nav>
  )
}

export default Nav