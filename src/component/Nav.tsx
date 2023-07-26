import { Link } from "react-router-dom";
import { styled } from "styled-components";
import { Container } from "../style/styles";

const Nav = () =>{    
    return (
            <Nav_style>
                <Logo className="logo">
                    <Link to="/">Capture </Link>
                </Logo>
                <List>
                    <li><Link to="/about">1. About Us</Link></li>
                    <li><Link to="/work">2. Our work</Link></li>
                    <li><Link to="/contactUs">3. Contact Us</Link></li>
                </List>
            </Nav_style>
)}


const Nav_style = styled(Container)`
    z-index: 5;
    position: sticky;
    top: 0;
    background-color: #282828;
    color: white;
    min-height: 10vh;
    justify-content: space-between;
    @media screen and (max-width: 750px){
        flex-direction: column;
        padding: 2em 0;
    }
    a{
        border-bottom : 2px solid transparent;
    }
`
const Logo = styled.div`
    @media screen and (max-width: 750px){
            padding-bottom: 2em;
    }
    a{
        color : white;
        font-size: 1.5rem;
        font-family: 'Lobster',cursive;
        font-weight: lighter;
    }
`
const List = styled.ul`
    display: flex;
    @media screen and (max-width:920px){
        width : 100%;
        justify-content : space-between;
        padding : 1rem 1.3rem;
    }
    li{
        margin-left: 3em;
        font-size: 1.2rem;
        @media screen and (max-width:750px){
            margin-left : 0;
        }
        @media screen and (max-width:390px){
            font-size: 1rem;
        }
    }
    a{
        transition: all ease-in-out;
        color :white;
        padding-bottom: 10px;
        border-bottom : 3px solid transparent;
    }
`

export default Nav;