import React from 'react'
import about from "../style/About.css"
import AboutCard from './AboutCard';
import backpack_girl from '../asset/backpack_girl.png';
import boyWithBlueBackground from '../asset/boyWithBlueBackground.png';
import man1 from '../asset/man1.jpeg';
import man2 from '../asset/man2.jpg';
import man3 from '../asset/pexels.jpeg';
import man4 from '../asset/pexels-1.jpg';
function About(props) {
    return (
        <div className='allAbout'>
            <div className='about'> About Us</div>
            <div className='About-cont'>
                <img className='boyWithBlueBackground' src={boyWithBlueBackground}></img>
                <div className='About-text' ><h1>Teach students from over 180 countries,</h1> Preply tutors teach 800,000+ students globally. Join us and you’ll have everything you need to teach successfully..</div>
            </div>
            <div className='About-cont-left'>
                <img className='backpack_girl' src={backpack_girl}></img>
                <div className='About-text' ><h1>Preply allowed me to make a living without leaving home! ,</h1> Eliza G. teaches English on Preply so she can spend more time with her son</div>
            </div>
            <div className='About-Approach'><h1>Our Team</h1></div>
            <div className='About-container'>
                <AboutCard name={"Mikel"} Img={man1} />
                <AboutCard name={"Jacob "} Img={man2} />
                <AboutCard name={"Sara"} Img={man3} />
                <AboutCard name={"lilya"} Img={man4} />

            </div>
        </div>
    )
}

export default About
