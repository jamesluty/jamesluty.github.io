import React, { useEffect } from 'react'
import hawaii from '../imgs/hawaii_pic.jpg'
import airplane from '../imgs/airplane.jpg'
import seahawks from '../imgs/seahawks.jpg'
import skydiving from '../imgs/skydiving.jpg'

const About = () => {

    useEffect(() => {
        let slideIdx = 0;
        let imgArray = ['slideShow1', 'slideShow2', 'slideShow3', 'slideShow4'];
        setInterval(() => {
            if(slideIdx === 0){
                document.getElementById(imgArray[3]).style.display = "none";
            }
            document.getElementById(imgArray[slideIdx]).style.display = 'inherit';
            if(slideIdx > 0){
                document.getElementById(imgArray[slideIdx-1]).style.display = "none";
            } 
            
            slideIdx++;
            if(slideIdx > imgArray.length-1){
                slideIdx = 0;
            }
        }, 3000)
    }, [])


    return (
        <div id="about">
            <div className="aboutContent">
                {/* About Me Section */}
                <div className="aboutLeft">
                    <h1 className="aboutHeader">About Me</h1>
                    <p className="smfont">I'm a Software Test Engineer with experience in manual and automated testing, test planning, defect management, and quality assurance within Agile development environments. My background includes developing Selenium-based automation frameworks, designing comprehensive test strategies, and collaborating with cross-functional teams to deliver reliable software solutions.
                    <br/><br/>
                    With hands-on experience in Java, Python, JavaScript, Selenium, Jenkins, Postman, and SQL databases, I combine strong technical skills with a quality-focused mindset. I am passionate about improving software reliability, streamlining testing processes, and helping teams deliver products that provide exceptional user experiences.</p>
                </div>
                {/* Image Slideshow */}
                <div className="aboutRight">
                    <img className="fade" src={hawaii} alt="hawaii_img" id="slideShow1"/>
                    <img className="fade" src={skydiving} alt="skydiving_img" id="slideShow2"/>
                    <img className="fade" src={airplane} alt="airplane_img" id="slideShow3"/>
                    <img className="fade" src={seahawks} alt="seahawks_img" id="slideShow4"/>
                </div>
            </div>
        </div>
    )
}

export default About