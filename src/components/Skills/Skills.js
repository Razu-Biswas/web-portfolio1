import React from "react";
import './Skill.css'

const Skills = () => {
    return (
        <div className="row">
            <div className="skills">
                <h1 className="text-center">My Skills</h1>
                <li>
                    <h5>Html</h5><span className="bar"><span className="html"></span></span>
                </li>
                <li>
                    <h5>Css</h5><span className="bar"><span className="css"></span></span>
                </li>
                <li>
                    <h5>JavaScript</h5><span className="bar"><span className="jquery"></span></span>
                </li>
                <li>
                    <h5>React.Js</h5><span className="bar"><span className="react"></span></span>
                </li>
                <li>
                    <h5>Express.Js</h5><span className="bar"><span className="express"></span></span>
                </li>
                <li>
                    <h5>Node.Js</h5><span className="bar"><span className="node"></span></span>
                </li>
            </div>
        </div>
    );
};

export default Skills;
