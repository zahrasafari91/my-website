import React from "react";

const HeaderSocials = () =>{
    return(
        <div className="home__socials">
            <a href="https://www.linkedin.com/in/zahrasafari/" className="home__social-link" target="_blank">
            <i class="fa-brands fa-linkedin"></i>
            </a>

            <a href="https://github.com/zahrasafari91" className="home__social-link" target="_blank">
            <i class="fa-brands fa-github"></i>
            </a>

            {/* <a href="" className="home__social-link" target="_blank">
            <i class="fa-brands fa-behance"></i>
            </a>

            <a href="" className="home__social-link" target="_blank">
            <i class="fa-brands fa-dribbble"></i>
            </a>

            <a href="" className="home__social-link" target="_blank">
            <i class="fa-brands fa-pinterest"></i>
            </a> */}
        </div>
    )
}

export default HeaderSocials;