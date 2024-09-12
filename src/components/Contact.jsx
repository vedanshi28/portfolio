import contactImg from "../assets/img/contact-img.png";
import "animate.css";
import styled from "styled-components";
import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { Snackbar,Alert } from "@mui/material";
import { Col, Row } from "react-bootstrap";
import TrackVisibility from "react-on-screen";
import toast, { Toaster } from "react-hot-toast";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #121112;
  position: relative;
  z-index: 1;
  align-items: center;
  @media (max-width: 960px) {
    padding: 0px;
  }
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1350px;
  padding: 0px 0px 80px 0px;
  gap: 12px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

const Title = styled.div`
  font-size: 42px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  margin-bottom: 50px;
  max-width: 600px;
  color: #B8B8B8;
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 16px;
  }
`;

const ContactForm = styled.form`
  width:500px;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.card};
  padding: 32px;
  color: #fff;
  border-radius: 5px;
  border: 1px solid gray;
  margin-top: 28px;
  gap: 12px;
`;

const ContactTitle = styled.div`
  font-size: 24px;
  margin-bottom: 6px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
`;

const ContactInput = styled.input`
  flex: 1;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.text_secondary};
  outline: none;
  font-size: 18px;
  
  border-radius: 5px;
  padding: 12px 16px;
  &:focus {
    border: 1px solid ${({ theme }) => theme.primary};
  }
`;

const ContactInputMessage = styled.textarea`
  flex: 1;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.text_secondary};
  outline: none;
  font-size: 18px;
  border-radius: 5px;
  padding: 12px 16px;
  &:focus {
    border: 1px solid ${({ theme }) => theme.primary};
  }
`;

const ContactButton = styled.input`
  width: 100%;
  text-decoration: none;
  text-align: center;
  background:#7e22ce;
  padding: 13px 16px;
  margin-top: 2px;
  border-radius: 5px;
  border: none;
  color: ${({ theme }) => theme.text_primary};
  font-size: 18px;
  font-weight: 600;
`;

const Contact = () => {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    subject: "",
    message: "",
  });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  function emailSend(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_7vi63dj",
        "template_pnta7f4",
        e.target,
        "BjhdXMyzuyzTGREUO"
      )
      .then(
        (result) => {
          console.log("Successful" + result);
          toast.success("Message Sent!");
          setFormData({ name: "", message: "", email: "", subject: "" });
        },
        (error) => {
          toast.error("Error!");
          console.log("Error: " + error.text);
        }
      );
  }


  return (
    <>
    <Container id='contact'>
      <Wrapper>
        <Title>Contact</Title>
        <Desc>
          Feel free to reach out to me for any questions or opportunities!
        </Desc>
          

          <div className="contact-form">
              <ContactForm onSubmit={emailSend}>
                <ContactTitle>Email Me 🚀 </ContactTitle>
                <ContactInput placeholder="Your Email" name="email" className="text-light-emphasis" value={formData.email}
            onChange={handleChange}/>
                <ContactInput placeholder="Your Name" name="name" className="text-light-emphasis" value={formData.name}
            onChange={handleChange}/>
                <ContactInput placeholder="Subject" name="subject" className="text-light-emphasis" value={formData.subject}
            onChange={handleChange}/>
                <ContactInputMessage
                  placeholder="Message"
                  rows="4"
                  name="message"
                  className="text-light-emphasis"
                  value={formData.message}
                 onChange={handleChange}
                />
                <ContactButton type="submit" value="Send" />
              </ContactForm>
              
          </div>
      </Wrapper>
      
    </Container>
    <Toaster />
    </>
  );
};

export default Contact;
