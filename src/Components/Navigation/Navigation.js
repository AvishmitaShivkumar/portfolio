import { NavLink } from "react-router-dom";
import styled from "styled-components";
import banner from "./banner.jpg";



const Navigation = () => {

    return(
        <>
        <Wrapper>
            <NavItems>
                <NavItem to="/projects">Projects</NavItem>
                <NavItem to="/about" >About</NavItem>
                <NavItem to="/contact" >Contact</NavItem>
            </NavItems>
            <TitleWrapper to="/">
                <Banner src={banner} alt="banner"/>
                <SiteTitle className="title" ><div>avishmita</div><div>shivkumar</div></SiteTitle>
            </TitleWrapper>
        </Wrapper>
        </>
    )
};


const Wrapper = styled.div`
display: flex;
justify-content: center;
gap: 3vw;
position: sticky;
top: 0;
z-index: 10;
background-color: white;
`
const NavItems = styled.div`
display: flex;
justify-content: flex-start;
align-items: center;
gap: 1vh;
width: 40vh;
padding: 2vh;
position: absolute;
left: 0;
`
const NavItem = styled(NavLink)`
text-decoration: none;
color: var(--accent-color);
padding: 4vh 2vh;


&.active {
    font-weight: 600;
    border: 0.1rem solid var(--accent-color)
}
`;

const TitleWrapper = styled(NavLink)`
overflow: hidden;
position: relative;
text-align: center;
width: 40vw;
text-decoration: none;


&.active {
    height: 40vh;
}

&.active .title {
    margin-top: 20vh;
    font-size: 3.5rem;
}
`
const Banner = styled.img`
opacity: 0.45;
position: absolute;
left: 0;
top: 0;
width: 100%;
`
const SiteTitle = styled.h1`
position: relative;
color: var(--primary-color);
/* text-decoration: none; */
font-size: 2rem;
font-weight: 600;
font-family: var(--font-family);
padding: 1vh;

`
export default Navigation;

