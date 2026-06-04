import React from 'react';
import banner_bg from '../imgs/banner_bg.jpg';

const Banner = () => {
    return (
        <div className="banner" style={{ backgroundImage: `url(${banner_bg})` }}>
            <h1 className="jobType1">Quality Assurance</h1>
            <h1 className="jobType1">Software Test Engineer</h1>
            <h2 className="jobSkills">Java | Python | React | HTML | CSS | Javascript | Selenium</h2>
        </div>
    )
}

export default Banner