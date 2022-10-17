import React from 'react';
import contact_bg from '../imgs/contact_bg.jpg';
import github_icon from '../imgs/github_icon.png';
import linkedin_icon from '../imgs/linkedin_icon.png';
import pdf_icon from '../imgs/pdf_icon.png';
import email_icon from '../imgs/email_icon.png';
import resume from '../files/Resume.pdf'

const Contact = () => {
    return (
        <div id="contact">
            <h1 className="contactBanner" style={{backgroundImage: `url(${contact_bg})`}}>Contact Me</h1>
            <div className="contactSection">
                <a href="mailto: luty0125@gmail.com"><img src={email_icon} alt="email" className="contactIcon"/></a>
                <a href="http://www.linkedin.com/in/james-luty-01286344" target="_blank" rel="noreferrer"><img src={linkedin_icon} alt="LinkedIn" className="contactIcon"/></a>
                <a href="https://github.com/jamesluty" target="_blank" rel="noreferrer"><img src={github_icon} alt="github" className="contactIcon"/></a>
                <a href={resume} target="_blank" rel="noreferrer"><img src={pdf_icon} alt="pdf" className="contactIcon"/></a>
            </div>
            {/* <h3 className="footer">James Luty</h3> */}
        </div>
    )
}

export default Contact
