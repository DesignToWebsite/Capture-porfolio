import {styled} from "styled-components"
import { Container } from "../style/styles"
import home1 from "../img/home1.png"
import Wave from "./Wave"
import { motion } from "framer-motion"
import { titleAnim, photoAnim, fade,  useScroll, pageAnim} from "../animation"

const HeaderSection = ()=>{
    const [element, controls] = useScroll();
    return(
        <Header variants={pageAnim} ref={element} animate={controls} initial='hidden'>
            <Description>
                <Hide>
                    <motion.h1 variants={titleAnim}>We work to make </motion.h1>
                </Hide>
                <Hide>
                    <motion.h1 variants={titleAnim}> your <span className="green">dreams</span> come </motion.h1>
                </Hide>
                <Hide>
                    <motion.h1 variants={titleAnim}> true. </motion.h1>
                </Hide>
                <motion.p variants={fade}>Contact us for any photography or videography ideas that you have. We have professionals with amazing skills to help you achieve it.</motion.p>
                <motion.button variants={fade}>Contact Us</motion.button>
            </Description>
            <Image>
                <motion.img variants={photoAnim}  src={home1} alt="photograpy" />
            </Image>
            <Wave />

        </Header>
    )
}

const Header = styled(Container)`
  min-height: 90vh;  
  position: relative;
  @media screen and (max-width:920px){
        flex-direction : column;
        padding-top : 3rem;
        padding-bottom : 3rem;
        align-items : center;
        /* justify-content: center; */
    }
`;
const Description = styled.div`
    z-index : 2;
    flex : 1;
    margin-right: 1em;
    @media screen and (max-width:920px){
        order : 2;
    }
    h1{
        font-size: 3.7rem; 
        @media screen and (max-width:1405px) {
            font-size: 2.8rem;
        }
        @media screen and (max-width:1109px){
            font-size: 2.5rem;
        }
        @media screen and (max-width:920px){
            width: 100%;
            font-size: 9vw;            
        }
    }
    p{
        padding : 3em 0;
        font-size: 25px;
        color : #ccc;
        @media screen and (max-width:920px){
            font-size: 20px;
            /* width : 90%; */
            
        }
    }
    button{
        padding: 1rem 2rem;
        border: 3px solid #23d997;
        background-color: transparent;
        color : white;
        font-size: 1.1em;
        font-weight: bold;
        &:hover{
            background-color: #23d997;
            color : white;
        }
    }
`
const Image = styled.div`
    flex: 1;
    z-index : 2;
    overflow : hidden;
    img{
        object-fit: cover;
        height: 80vh;
        width: 100%;
    }
    @media screen and (max-width:920px){
            margin-bottom : 3rem;
            
        }
`

const Hide = styled.div`
    overflow: hidden
`


export default HeaderSection