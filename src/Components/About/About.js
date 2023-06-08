import { MdHtml, MdCss, MdJavascript } from "react-icons/md";
import { IoLogoReact } from "react-icons/io5";
import styled from "styled-components";


const About = () => {
    return(
        <>
        <Wrapper>
            <AboutWrapper >
                <Title>About me!</Title>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <SubTitle>Skills</SubTitle>
                <Icons>
                    <MdHtml style={{fontSize: "3rem", color: "#274062"}}/>
                    <MdCss style={{fontSize: "3rem", color: "#274062"}}/>
                    <MdJavascript style={{fontSize: "3rem", color: "#274062"}}/>
                    <IoLogoReact style={{fontSize: "2rem", color: "#274062"}}/>
                </Icons>
            </AboutWrapper>
        </Wrapper>
        </>
    )
};

const Wrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 70vh;
`
const AboutWrapper = styled.div`
width: 45vw;
`
const Title = styled.div`
font-size: 2rem;
padding-bottom: 2rem;
text-align: center;
`
const SubTitle = styled.h2`
padding-top: 8vh;
font-weight: 600;
font-size: 1.3rem;
text-align: center;
`
const Icons = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
gap: 5vh;
padding-top: 2vh;
`
export default About;