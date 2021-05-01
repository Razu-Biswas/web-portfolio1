import React from 'react';

const Skills = () => {
    return (
        <div className="row">
            <h1 className="text-center text-white">MY SKILLS</h1>
           

      <div className="col-md-7">
      <ul>
                <li>
                    <h2>Frontend</h2>


                    <p className="text-white" style={{ width: "80%" }} data-value="80">HTML5</p>
                    <progress max="100" value="80" class="html5">

                        <div class="progress-bar">
                            <span style={{ width: "80%" }}>80%</span>
                        </div>
                    </progress>


                    <p className="text-white" style={{ width: "60%" }} data-value="60">CSS3</p>
                    <progress max="100" value="60" class="css3">

                        <div class="progress-bar">
                            <span style={{ width: "60%" }}>60%</span>
                        </div>
                    </progress>
                    <p className="text-white" style={{ width: "60%" }} data-value="60">Bootstrap</p>
                    <progress max="100" value="60" class="css3">

                        <div class="progress-bar">
                            <span style={{ width: "60%" }}>60%</span>
                        </div>
                    </progress>
                    <p className="text-white" style={{ width: "60%" }} data-value="60">JavaScript</p>
                    <progress max="100" value="60" class="css3">

                        <div class="progress-bar">
                            <span style={{ width: "60%" }}>60%</span>
                        </div>
                    </progress>
                    <p className="text-white" style={{ width: "60%" }} data-value="60">React.Js</p>
                    <progress max="100" value="60" class="css3">

                        <div class="progress-bar">
                            <span style={{ width: "60%" }}>60%</span>
                        </div>
                    </progress>




                </li>

            </ul>
      </div>
            <div className="col-md-5">
                <ul>
                <li>
                    <h2>Backend</h2>
                    <p className="text-white" style={{ width: "75%" }} data-value="75">Node.Js</p>
                    <progress max="100" value="75" class="python">
                        <div class="progress-bar">
                            <span style={{ width: "75%" }}>75%</span>
                        </div>
                    </progress>


                    <p className="text-white" style={{ width: "65%" }} data-value="65">Express.Js</p>
                    <progress max="100" value="65" class="php">

                        <div class="progress-bar">
                            <span style={{ width: "65%" }}>65%</span>
                        </div>
                    </progress>


                    <p className="text-white" style={{ width: "65%" }} data-value="35">Mongodb</p>
                    <progress max="100" value="35" class="node-js">

                        <div class="progress-bar">
                            <span style={{ width: "35%" }}>85%</span>
                        </div>
                    </progress>

                    <p className="text-white" style={{ width: "65%" }} data-value="35">Mongos</p>
                    <progress max="100" value="35" class="node-js">

                        <div class="progress-bar">
                            <span style={{ width: "35%" }}>35%</span>
                        </div>
                    </progress>

                </li>
                </ul>
            </div>
         
        </div>
    );
};

export default Skills;