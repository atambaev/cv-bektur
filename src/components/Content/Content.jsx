import React from 'react';
import "./Content.css"
import img from "../../../src/images/2022-04-19 15.55.10.jpg"

const Content = () => {
    return (
        <div className='content'>
            <div className="container">
                {/* hero */}
                <div className="hero">
                    <div className="hero-left">
                        <div className="hero-left-img">
                            <img className='hero-img' width={300} src={img} alt="image" />
                        </div>
                        <div className="hero-left-title">
                            <h4>Bektur Atambaev</h4>
                        </div>
                    </div>

                    <div className="hero-right">
                        <h2>Junior Frontend Developer</h2>
                        <hr />
                        <br />
                         <p>ABOUT ME</p>
                         <p>I'm a Freelancer Frontend Developer. I'm from Bishkek, Kyrgyz Republic. I code and create web elements for amazing people around the world. I like work with new people. New people new Experiences.</p>
                        <br />
                         <hr />
                         <br />
                         <p>CONTACTS</p>
                         <p>Email: bektur.atambay@gmail.com</p>
                         <p>Phone: +996 555 831 933</p>
                    </div>
                </div>
                {/* end of hero*/}
                
                {/* skills */}
                    <div className="skills">
                        <div className="skill-box">
                            <div className="html-css-title">HTML/CSS</div>
                            <div className="html-css">90%</div>
                        </div>

                        <div className="skill-box">
                            <div className="react-title">React</div>
                            <div className="react">80%</div>
                        </div>

                        <div className="skill-box">
                            <div className="bootstrap-mui-title">Bootstrap / MUI</div>
                            <div className="bootstrap-mui">85%</div>
                        </div>

                        <div className="skill-box">
                            <div className="native-title">Native JS</div>
                            <div className="native">60%</div>
                        </div>

                        <div className="skill-box">
                            <div className="ui-ux-title">UI/UX</div>
                            <div className="ui-ux">50%</div>
                        </div>
                    </div>
                {/* end of skills */}
            </div>
        </div>
    );
};

export default Content;