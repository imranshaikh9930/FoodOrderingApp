import React from 'react'
import Pizzas from "../Images/masala.jpg";
import "../Styles/About.css";

function About() {
  return (
      <div className="about">
          <div className="aboutTop" style={{ backgroundImage: `url(${Pizzas})`}}></div>
          <div className="aboutBottom">
              <h1>ABOUT US</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab aliquid esse deleniti excepturi assumenda temporibus eaque eius, officia sunt odit. Aliquam, maiores dolores pariatur enim voluptatem tempora sunt totam ducimus?</p>

          </div>
    </div>
  )
}

export default About