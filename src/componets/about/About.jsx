import React from "react";
import "./about.css";
import AboutMe from "../../assets/zi-avatar.png";


const About = () =>{
    return(
        <section className="about container section" id="about">
            <h2 className="section__title">About Me</h2>

            <div className="about__container grid">
                
                <img src={AboutMe} alt="" className="about__img" />

                <div className="about__data grid">
                    <div className="about__info">
                        <p className="about__description">
                        I am Zahra.  
                        I am a full stack developer with a Computer Engineering bachelor's degree 
                        and Software Development diploma and hands-on work experience working with 
                        different technologies like OOP Languages (Java, Python), Web Technologies (JS, React, Node, HTML, CSS), DataBases(SQL), 
                        Cloud Platform(AWS) and Other Tools (Git). <br /> <br />
                        Currently, I am working as a Freelance Software Developer. <br />
                        I really love volunteering work and during my study, I’ve been actively engaged in conferences and workshops. I have also chaired a student workshop 
                        about Linux and Open Source software. Right now I am a volunteer at the library at UofC. <br /> <br />
                        I have always been eager to learn new skills continuously and recently I won a scholarship from Amii for a Machine Learning course. <br />
                        I am a soccer player and some of my hobbies are coding, reading, and biking.

                        </p>
                        {/* <a href="" className="btn">Download Resume</a> */}
                    </div>
                    

                    {/* <div className="about__skills grid">
                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">Development</h3>
                                <span className="skills__number ">90%</span>
                            </div>

                            <div className="skills__bar">
                                <span className="skills__percentage development"></span>
                            </div>
                        </div>

                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">Development</h3>
                                <span className="skills__number">90%</span>
                            </div>

                            <div className="skills__bar">
                                <span className="skills__percentage development-1"></span>
                            </div>
                        </div>

                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">Development</h3>
                                <span className="skills__number ">90%</span>
                            </div>

                            <div className="skills__bar">
                                <span className="skills__percentage development-2"></span>
                            </div>
                        </div>


                    </div>  */}
                </div>
            </div>
        </section>
    )
}

export default About;