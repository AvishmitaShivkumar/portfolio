import { useState } from "react";
import styled from "styled-components";
import { AiOutlineLinkedin } from "react-icons/ai";
import { VscGithub } from "react-icons/vsc";
import { SiGmail } from "react-icons/si";
import { Link } from "react-router-dom";

const Contact = () => {
    const [formData, setFormData] = useState({    });

    const handleChange = (key, value) => {
        setFormData({...formData, [key]: value})  
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        window.alert("Thank you for your message!")
        setFormData({});
        event.target.reset();
        //eventually will send formData to server with fetch - POST
    };
    
    return (
    <>
    <Wrapper>
        <TextAndIcons>
            <Title>Contact</Title>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
            <Icons>
                {/* TODO link icons to relevant profiles */}
                <Link><AiOutlineLinkedin style={{fontSize: "2rem", color: "#274062"}}/></Link>
                <Link><VscGithub style={{fontSize: "2rem", color: "#274062"}}/></Link>
                <Link><SiGmail style={{fontSize: "2rem", color: "#274062"}}/></Link>
            </Icons>
        </TextAndIcons>
        <Form onSubmit={handleSubmit}>
            <InputWrapper>
                <Label htmlFor="full-name">Name</Label>
                <Input type="text" id="full-name" placeholder="Your Full Name" onChange={(event) => handleChange(event.target.id, event.target.value)}/>
            </InputWrapper>
            <InputWrapper>
                <Label htmlFor="email">Email</Label>
                <Input type="email" id="email" placeholder="Your email" onChange={(event) => handleChange(event.target.id, event.target.value)}/>
            </InputWrapper>
            <InputWrapper>
                <Label htmlFor="message">Message</Label>
                <MessageInput type="text" name="message" id="message" placeholder="Your message" onChange={(event) => handleChange(event.target.id, event.target.value)}/>
            </InputWrapper>
            <Button type="submit">Send</Button>
        </Form>
    </Wrapper>
    </>
    )
};

const Wrapper = styled.div`
display: flex;
justify-content: space-evenly;
align-items: center;
height: 70vh;
`
const TextAndIcons = styled.div`
width: 20vw;
`
const Title = styled.h1`
font-size: 2rem;
padding-bottom: 2rem;
`
const Icons = styled.div`
display: flex;
justify-content: space-between;
gap: 5vh;
padding-top: 5vh;
`
const Form = styled.form`
display: flex;
flex-direction: column;
`
const InputWrapper = styled.div`
display: flex;
flex-direction: column;
margin: 1vh;
`
const Label = styled.label`
`
const Input = styled.input`
margin-top: 0.5vh;
width: 30vw;
border: 0.1vh solid var(--accent-color);
font-family: 'Poppins', sans-serif;
`
const MessageInput = styled.textarea`
display: inline-block;
margin-top: 0.5vh;
width: 30vw;
height: 20vh;
border: 0.1vh solid var(--accent-color);
font-family: 'Poppins', sans-serif;
`
const Button = styled.button`
width: 8vw;
margin: 1vh;
padding: 1vh;
text-align: center;
font-size: 1rem;
font-weight: 600;
border: 0.1vh solid var(--primary-color);
color: white;
background-color:var(--primary-color) ;

&:hover{
    font-weight: 600;  
    cursor: pointer;
    box-shadow: 1px 1px 1px 0px rgba(156, 127, 96, 1);
    color: var(--accent-color);
    background-color: white;
    border: 0.1vh solid var(--accent-color);
    transform: scale(1.1);
    transition-duration: 0.3s;
}
`
export default Contact;