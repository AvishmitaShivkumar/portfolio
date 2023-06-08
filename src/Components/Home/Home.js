import styled from "styled-components";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import Projects from "../Projects/Projects";



const Home = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/contact");
  };

    return (
        <>
        <Wrapper >
          <HeroWrapper>
            <SubTitle>full-stack developer</SubTitle>
            <CTAButton onClick={handleClick}>Work with me</CTAButton>
            <AboutWrapper>
              <Text>Passionate about storytelling and crafting experiences, I love well-thought-out details, imbued with meaning, and helping you bring your ideas to life.</Text>
              <AboutLink to="/about">more about me</AboutLink>
            </AboutWrapper>
          </HeroWrapper>
          <ProjectWrapper>
            <Projects/>
          </ProjectWrapper>
          <ProjectsLink to="/projects">see more</ProjectsLink>
        </Wrapper >
        </>
    )
};

const Wrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin-bottom: 10vh;
`

const HeroWrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: 50vw;
padding-top: 8vh;
gap: 5vh;
`
const SubTitle = styled.h1`
font-size: 1.3rem;
font-weight: 500;
`
const CTAButton = styled.button`
width: 10vw;
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
const AboutWrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`

const Text = styled.p`
text-align: center;
font-size: 1.1rem;
`
const AboutLink = styled(Link)`
font-style: italic;
color: var(--accent-color);
font-weight: 500;
padding: 1.5vh;

&:hover {
  transform: scale(1.1);
  transition-duration: 0.3s;
}
`
const ProjectWrapper = styled.div`
height: 70vh;
overflow: hidden;
`
const ProjectsLink = styled(Link)`
font-style: italic;
color: var(--accent-color);
font-weight: 500;
padding: 1.5vh;

&:hover {
  transform: scale(1.1);
  transition-duration: 0.3s;
}
`

export default Home;