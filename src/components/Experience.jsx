import React from 'react'
import experience_bg from '../imgs/experience_bg.jpg'

const Experience = () => {
    return (
        <div id="experience">
            <h1 className="experienceBanner" style={{backgroundImage: `url(${experience_bg})`}}>Experience</h1>
            {/* SAIC Software Test Engineer Position */}
            <div className="position">
                <h1 className="positionTitle">SAIC</h1>
                <h2>Software Test Engineer</h2>
                <h3>Covington, WA | October 2023 - March 2026</h3>
                <ul>
                    <li className="positionDetails">Collaborate with cross-functional teams (developers, product owners, and stakeholders) to design, test, and validate new features for USDA applications</li>
                    <li className="positionDetails">Design and maintain detailed test cases and test plans in Jira, improving traceability and test coverage</li>
                    <li className="positionDetails">Perform comprehensive manual testing across multiple application modules, identifying defects and ensuring high-quality releases</li>
                    <li className="positionDetails">Develop and execute automated test scripts using Selenium (Java) with Gauge framework, increasing regression testing efficiency</li>
                    <li className="positionDetails">Support Agile sprint cycles by participating in standups, sprint planning, and retrospectives</li>
                    <li className="positionDetails">Held a Public Trust security clearance while working for the USDA</li>
                </ul>
            </div>
            {/* Green Belt Tree Care Position */}
            <div className="position">
                <h1 className="positionTitle">Green Belt Tree Care</h1>
                <h2>Groundman</h2>
                <h3>Covington, WA | July 2025 - September 2023</h3>
                <ul>
                    <li className="positionDetails">Assist climbers and arborists with tree removal, pruning, and maintenance operations</li>
                    <li className="positionDetails">Operate and maintain equipment such as chainsaws, chippers, stump grinders, and hand tools</li>
                    <li className="positionDetails">Manage ropes, rigging, and lowering devices to safely guide tree limbs and debris</li>
                    <li className="positionDetails">Maintain a safe and organized job site by following all safety protocols and procedures</li>
                </ul>
            </div>
            {/* Freelance Web Developer Position */}
            <div className="position">
                <h1 className="positionTitle">Self-employed</h1>
                <h2>Freelance Web Developer</h2>
                <h3>Covington, WA | August 2022 - July 2023</h3>
                <ul>
                    <li className="positionDetails">Work with small businesses to plan, design, integrate and deploy a website for their business.</li>
                </ul>
            </div>
            {/* Les Schwab Tire Center Position */}
            <div className="position">
                <h1 className="positionTitle">Les Schwab Tire Center</h1>
                <h2>Brake and Alignment Techician</h2>
                <h3>Covington, WA | June 2021 - March 2022</h3>
                <ul>
                    <li className="positionDetails">Inspect, diagnose, and repair brake and suspension systems including pads, rotors, calipers, and suspension parts</li>
                    <li className="positionDetails">Perform brake and suspension replacements and resurfacing according to manufacturer specifications</li>
                </ul>
            </div>
            {/* VoiceBox Technologies Position */}
            <div className="position">
                <h1 className="positionTitle">VoiceBox Technologies</h1>
                <h2>Software Test Engineer</h2>
                <h3>Bellevue, WA | August 2016 - January 2019</h3>
                <ul>
                    <li className="positionDetails">Conducted manual and automated testing for Toyota in-dash navigation systems, improving conversational UI functionality and user experience</li>
                    <li className="positionDetails">Developed automation scripts using Shell, Batch, and Groovy to streamline test execution and results analysis</li>
                    <li className="positionDetails">Logged, tracked, and prioritized bugs in Jira, contributing to improved regression testing strategies</li>
                    <li className="positionDetails">Served as Lead QA for a client demo chatbot product, ensuring product stability and successful delivery</li>
                </ul>
            </div>
            {/* TEKsystem - T-Mobile Position */}
            <div className="position">
                <h1 className="positionTitle">TEKsystems - T-Mobile</h1>
                <h2>Software Tester</h2>
                <h3>Redmond, WA | January 2015 - May 2015</h3>
                <ul>
                    <li className="positionDetails">Performed manual testing of T-Mobile preloaded apps on Android and iOS tablets and smartphones before OTA software updates</li>
                    <li className="positionDetails">Created test plans and executed test cases on specific devices targeted by an OTA update</li>
                    <li className="positionDetails">Reported and tracked all bugs using Jira</li>
                </ul>
            </div>
            {/* TEKsystems - Amazon Position */}
            <div className="position">
                <h1 className="positionTitle">TEKsystems - Amazon</h1>
                <h2>Software Tester</h2>
                <h3>Seattle, WA | October 2014 - December 2014</h3>
                <ul>
                    <li className="positionDetails">Performed manual testing of Amazon Shopping application on Amazon Fire tablets and phones</li>
                    <li className="positionDetails">Created test plans and executed test cases based on the type of device being tested</li>
                    <li className="positionDetails">Reported and tracked all bugs found using Jira</li>
                </ul>
            </div>
            {/* Nuance Communication Position */}
            <div className="position">
                <h1 className="positionTitle">Nuance Communications</h1>
                <h2>QA Engineer</h2>
                <h3>Seattle, WA | December 2011 - February 2013</h3>
                <ul>
                    <li className="positionDetails">Performed manual testing of Swype keyboard and Nuance Dragon software</li>
                    <li className="positionDetails">Created test plans and executed test cases on a variety of devices from Android, Symbian, Meego, Windows 7 and Amazon Kindle</li>
                    <li className="positionDetails">Reported and tracked all bugs found using Jira</li>
                    <li className="positionDetails">Created training documentation to train new employees and test tools and procedures</li>
                </ul>
            </div>
            {/* Swype Inc. Position */}
            <div className="position">
                <h1 className="positionTitle">Swype Inc.</h1>
                <h2>Software Tester</h2>
                <h3>Seattle, WA | May 2011 - December 2011</h3>
                <ul>
                    <li className="positionDetails">Performed manual testing of Swype keyboard</li>
                    <li className="positionDetails">Created test plans and executed test cases on a variety of Android devices</li>
                </ul>
            </div>
            {/* ADC Telecommunications Position */}
            <div className="position">
                <h1 className="positionTitle">ADC Telecommunications</h1>
                <h2>Equipement Installer</h2>
                <h3>Washington State | August, 2010 - April, 2011</h3>
                <ul>
                    <li className="positionDetails">Worked inside Central Offices, Switch Centers and Data Centers for various telecommunications providers across Washington State</li>
                    <li className="positionDetails">Installed bays and cabinets with servers, routers, switch panels and other telecommunications equipment</li>
                    <li className="positionDetails">Pull fiber optic, DS1, DS3 and other cabling to connect installed equipment to existing live equipment</li>
                    <li className="positionDetails">Test equipment to make sure everything is runniner properly</li>
                </ul>
            </div>
            {/* Flextronics Position */}
            <div className="position">
                <h1 className="positionTitle">Flextronics</h1>
                <h2>Customer Service Technician 3</h2>
                <h3>Issaquah, WA | March, 2008 - June, 2010</h3>
                <ul>
                    <li className="positionDetails">Worked inside a Verizon Wireless retail store to troubleshoot customer devices such as Cell phones, Smartphones, Netbooks, and Aircards</li>
                    <li className="positionDetails">Helped customers with account questions, new lines of service and upgrades</li>
                    <li className="positionDetails">Ranked number one several months for my ability to troubleshoot devices, maintaining high sales metrics, and for providing an exceptional customer service experience</li>
                </ul>
            </div>
        </div>
    )
}

export default Experience