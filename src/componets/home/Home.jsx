import React from "react";
import "./home.css";
import Me from "../../assets/zara-avatar.png";
import HeaderSocials from "./HeaderSocial";
import Shapes from "./Shapes";

const Home = () =>{
    return(
       <section className="home container" id="home">
        <div className="intro">
            <img src={Me} alt="" className="home__img" />
            <h1 className="home__name">Hi, I am Zahra</h1>
            <span className="home__education">Passionate Software Developer</span>

            <HeaderSocials />

            <a href="#contact" className="btn">Let's Get In Touch</a>
        </div>

        <Shapes />
       </section>
    )
}

export default Home;