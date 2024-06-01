import React from 'react'
import './About.css'
import about_img from '../../assets/about.png';
import play_icon from '../../assets/play-icon.png';


function About (){
  return (
    <div className="about" id='about'>
        <div className="about-left">
            <img src={about_img} className='about-img'></img>
            <img src={play_icon} className='play-icon'></img>
        </div>
        <div className="about-right">
        <h3>About University</h3>
        <h2>Nurturing Tomorrow's Leaders Today</h2>
        <p>Embarks on a transformative educational journey 
            with our universities comprehensive education programs.
            Our cutting edge curriculum is designed to empower students 
            with the knowledge,skills and experiences needed to excel in 
            the dynamic field of education</p>
        
        </div>
        
    </div>
  )
}

export default About