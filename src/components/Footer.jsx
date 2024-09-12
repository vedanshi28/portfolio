import React from "react";

const Footer=()=>{
    return(
        <>
        <footer className="footer">
            <ul className="social-icons">
              <li><a href='https://github.com/vedanshi28'><i class="fa-brands fa-github"></i></a></li>
              <li><a href='https://www.linkedin.com/in/vedanshi-mishra-a2103a259/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'><i class="fa-brands fa-linkedin-in"></i></a></li>
            </ul>
            <ul className="menu">
              <li><a href='#home'>Home</a></li>
              <li><a href='#skills'>Skills</a></li>
              <li><a href='#projects'>Project</a></li>
              <li><a href='#education'>Education</a></li>
              <li><a href='#contact'>Contact</a></li>
            </ul>
            <p>CopyRight 2024. Created by Vedanshi Mishra. All Rights Reserved</p>
        </footer>
        </>
    )
}

export default Footer;