import React from "react";
import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import {ArrowRightCircle} from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import profileimg from '../assets/img/profileimg.png';

const Banner=()=>{
    const [loopNum,setLoopNum]=useState(0);
    const [isDeleting,setIsDeleting]=useState(false);
    const [text,setText]=useState('');
    const [delta,setDelta]= useState(300-Math.random()*100);
    const period = 2000;
    const toRotate = ["Web Developer","Web Designer","Programmer"];

    useEffect(()=>{
        let ticker = setInterval(()=>{
            tick();
        },delta)
        return ()=>{clearInterval(ticker)};
    },[text])

    const tick=()=>{
        let i = loopNum%toRotate?.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0,text?.length-1) : fullText.substring(0,text?.length+1);

        setText(updatedText);

        if(isDeleting){
            setDelta(prevDelta=>prevDelta/2)
        }

        if(!isDeleting && updatedText==fullText){
            setIsDeleting(true);
            setDelta(period);
        }
        else if(isDeleting && updatedText==''){
            setIsDeleting(false);
            setLoopNum(loopNum+1);
            setDelta(500)
        }
    }
    return(
        <>
        <section className="banner" id='home'>
            
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <TrackVisibility>
                        {({isVisible})=>
                        <div className={isVisible?'animate_animated animate_fadeIn':''}>
                        <h3>Welcome to my Portfolio</h3>
                        <h1>{`Hii I'm Vedanshi! I'm a  `}<span className="wrap">{text}</span></h1>
                        <p>I am a motivated and versatile individual, always eager to take on new challenges. With a passion for learning I am dedicated to delivering high-quality results. With a positive attitude and a growth mindset, I am ready to make a meaningful contribution and achieve great things.</p>
                        <button onClick={()=>console.log('connect')}><a href="https://drive.google.com/file/d/1dIj0xjvOLWJlzy-rQq_s3M_TOhOoY5Bz/view?usp=drive_link">Check Resume</a><a href='https://drive.google.com/file/d/1aP0MtC793tRWxWBgytSq80Fz1nyyUDkb/view?usp=sharing'><ArrowRightCircle size={25}/></a> </button>
                        </div>}
                        </TrackVisibility>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                    <TrackVisibility>
                   <div className="profile-img">
                  <img src={profileimg} alt="Header Img"/>
                   </div>
            </TrackVisibility>
                    </Col>
                </Row>
            </Container>
        </section>
        </>
    )
}
export default Banner;