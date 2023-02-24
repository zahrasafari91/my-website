import React, { useState } from "react";
import "./sidebar.css";
// import Logo from "../../assets/logo.svg";
import Logo from "../../assets/Dayflow-Abstract.png";

const Sidebar = () =>{
    const [toggle, setToggle] = useState(false);

    return(
        <>
        <aside className={toggle ? "aside show-menu" : "aside"}>
            <a href="#home" className="nav__logo">
                <img src={Logo} alt=""/>
            </a>
            <nav className="nav">
                <div className="nav__menu">
                    <ul className="nav__list">
                        <li className="nav__item">
                            <a href="#home" className="nav__link">
                                <i className="icon-home"></i>
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#about" className="nav__link">
                                <i className="icon-ghost"></i>

                            </a>
                        </li>
                        {/* <li className="nav__item">
                            <a href="#services" className="nav__link">
                                <i className=" .icon-ghost"></i>
                            </a>
                        </li> */}
                        <li className="nav__item">
                            <a href="#resume" className="nav__link">
                            <i className="icon-graduation"></i>
                            </a>
                        </li>
                        {/* <li className="nav__item">
                            <a href="#portfolio" className="nav__link">
                            <i className="icon-layers"></i>
                            </a>
                        </li> */}
                        {/* <li className="nav__item">
                            <a href="#blog" className="nav__link">
                            <i className="icon-note"></i>
                            </a>
                        </li> */}
                        <li className="nav__item">
                            <a href="#contact" className="nav__link">
                            <i className="icon-envelope"></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </aside>

        <div className={toggle ? "nav__toggle nav__toggle-open" : "nav__toggle"}
        onClick={()=>{
            setToggle(!toggle)
        }}>
            <i className="icon-menu"></i>
        </div>
        </>

    )
}

export default Sidebar;