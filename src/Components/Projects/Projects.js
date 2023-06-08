import styled from "styled-components";

import placeholder1 from "./placeholder1.jpg";
import placeholder2 from "./placeholder2.jpg";
import placeholder3 from "./placeholder3.jpg";
import placeholder4 from "./placeholder4.jpg";


const Projects = () => {
    return(
        <>
            <Title>Projects</Title>
            <Container>
                <Wrapper>
                    <ProjectImage src={placeholder1} className="image"/>
                    <ProjectText className="text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                        </ProjectText>
                </Wrapper>
                <Wrapper>
                    <ProjectImage src={placeholder4} className="image"/>
                    <ProjectText className="text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                        </ProjectText>
                </Wrapper>
                <Wrapper>
                    <ProjectImage src={placeholder3} className="image"/>
                    <ProjectText className="text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                        </ProjectText>
                </Wrapper>
                <Wrapper>
                    <ProjectImage src={placeholder2} className="image"/>
                    <ProjectText className="text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                        </ProjectText>
                </Wrapper>
            </Container>
        </>
    )
};

const Title = styled.h1`
text-align: center;
font-size: 2rem;
padding: 8vh 0 2vh;
`
const Container = styled.div`
display: grid;
grid-template-columns: repeat(2, 0fr);
padding: 2vh;
justify-content: center;

`
const Wrapper = styled.div`
position: relative;
display: flex;
justify-content: center;
align-items: center;

&:hover {
    cursor: pointer;
}

&:hover .text {
    opacity: 1;
    background-color: rgba(255, 255, 255);
    transition: opacity 1s;
}

&:hover .image {
    opacity: 0.5;
    transition: opacity 1s;
}
`
const ProjectText = styled.p`
width: 50%;
position: absolute;
padding: 3vh;
opacity: 0;
`
const ProjectImage = styled.img`
height: 60vh;
width: 40vw;
object-fit: cover;
`

export default Projects;