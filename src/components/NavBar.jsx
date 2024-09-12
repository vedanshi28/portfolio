import React, { useEffect } from 'react';
import { useState } from 'react';
import {Navbar,Nav,Container} from 'react-bootstrap';


const NavBar =()=>{
    const [activeLink,setActiveLink]=useState('home');
    const [scrolled,setScrolled]=useState(false);
    
    useEffect(()=>{
        const onScroll=()=>{
            if(window.scrollY>50){
                setScrolled(true);
            }
            else{
                setScrolled(false);
            }
        }
        window.addEventListener("scroll",onScroll);
        return()=> window.removeEventListener('scroll',onScroll);
    },[])

    const onUpdateActiveLink=(value)=>{
        setActiveLink(value);
    }
    return(
        <>
         <Navbar expand="lg" className={scrolled?"scrolled":""}>
      <Container>
        <Navbar.Brand>
            <Nav.Link href="#home"><h4 className='logo-name'>PORTFOLIO</h4></Nav.Link>
        </Navbar.Brand>

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className={activeLink==='home'?'active navbar-link navbar-link-first':'navbar-link navbar-link-first'} onClick={()=>onUpdateActiveLink('home')}>Home</Nav.Link>
            <Nav.Link href="#skills" className={activeLink==='skills'?'active navbar-link':'navbar-link'} onClick={()=>onUpdateActiveLink('skills')}>Skills</Nav.Link>
            <Nav.Link href="#projects" className={activeLink==='projects'?'active navbar-link':'navbar-link'} onClick={()=>onUpdateActiveLink('projects')}>Projects</Nav.Link>
            <Nav.Link href="#education" className={activeLink==='education'?'active navbar-link':'navbar-link'} onClick={()=>onUpdateActiveLink('education')}>Education</Nav.Link>
            <Nav.Link href="#certificates" className={activeLink==='certificates'?'active navbar-link':'navbar-link'} onClick={()=>onUpdateActiveLink('certificates')}>Acheivements</Nav.Link>
            <Nav.Link href="#contact" className={activeLink==='contact'?'active navbar-link':'navbar-link'} onClick={()=>onUpdateActiveLink('contact')}>Contact</Nav.Link>
          </Nav>
          <span className='navbar-text'>
            <div className='social-icon'>
                <a href="https://www.linkedin.com/in/vedanshi-mishra-a2103a259/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><i class="fa-brands fa-linkedin-in"></i></a>
            </div>
            <button className='vvd' onClick={()=>console.log('connect')}><span><a href="https://github.com/vedanshi28">Github Profile</a></span></button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </>
    )
};
export default NavBar;