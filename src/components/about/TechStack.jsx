import React from 'react'
import react from "../../skills/React.png"
import mongo from "../../skills/MongoDB.png"
import node from "../../skills/Node.js.png"
import aws from "../../skills/AWS.png"
import d3 from "../../skills/D3.js.png"
import python from "../../skills/Python.png"
import "./tech.css";

function TechStack() {

  return (
    <>
      <div className='title'>Some Tech I used for experimenting....</div>
      <div className="logos">
      <div className="logos-slide">
        
        <img src={react} alt="img-1"/>
        <img src={node} alt="img-1"/>
        <img src={aws} alt="img-1"/>
        <img src={d3} alt="img-1"/>
        <img src={python} alt="img-1"/>
        <img src={mongo} alt="img-1"/>
      </div>

      <div className="logos-slide">
        
        <img src={react} alt="img-1"/>
        <img src={node} alt="img-1"/>
        <img src={aws} alt="img-1"/>
        <img src={d3} alt="img-1"/>
        <img src={python} alt="img-1"/>
        <img src={mongo} alt="img-1"/>
      </div>
    </div>
    </>
  )
}

export default TechStack