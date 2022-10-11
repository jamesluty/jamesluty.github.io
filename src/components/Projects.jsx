import React from 'react'
import gbtc from '../imgs/gbtc.jpg'

const Projects = () => {
    return (
        <div>
            <hr />
            <h1 className="projectsHeader" id="projects">Projects</h1>
            <div className="projectContent">
                <div className="gbtc">
                    <div className="gbtcLeft">
                        <h1 className="gbtcTitle">Green Belt Tree Care LLC</h1>
                        <p className="gbtcDesc">Professional tree care company that provides a range of services related to tree care. Services all of Western Washington.</p>
                        <ul className="gbtcList">
                            <li className="listItem">Built using React based off information provided by client</li>
                            <li className="listItem">Incorporated EmailJS to allow customers to send emails directly to client</li>
                        </ul>
                    </div>
                    <div className="gbtcRight">
                        <img src={gbtc} alt="unavailable" className="gbtcImg"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects