import styled from "styled-components";
import { Container } from "../style/styles"
import { faq } from "../data/faq";
import { LayoutGroup, motion } from "framer-motion";
import Toggle from "./Toggle";
import { fade, scrollAnim, useScroll } from "../animation";

const Faq = () =>{
    const [element, controls] = useScroll();
    return(
        <FaqStyle variants={scrollAnim} ref={element} animate={controls} initial='hidden'>
            <h2>Any Questions?</h2>
            <h2 className="green">FAQ</h2>
            
            <LayoutGroup>
            {faq.map((item, index) =>(
                <Toggle title={item.title}  key={index}>
                    <div className="answer">
                        <motion.p variants={fade} initial='hidden' animate='show'>{item.small}</motion.p>
                        <motion.p variants={fade} initial='hidden' animate='show'>{item.answer}</motion.p>
                    </div>
                </Toggle>
            ))}
            </LayoutGroup>
        
        </FaqStyle>
    )
};

const FaqStyle = styled(Container)`
    flex-direction:column;
    align-items: baseline;
    margin : 2em 0 0 0;
    padding-bottom : 5rem;
    overflow-x : hidden;
    h2{
        font-size: 3rem;
        line-height: 1.2;
        @media screen and (max-width:920px){
            font-size: 2.8rem;
        }
    }
    .question{
        color : white;
        border-bottom: 5px solid white;
        width: 100%;
        padding:5rem 0 1rem 0;
        margin-bottom : 2rem;
        @media screen and (max-width:920px){
            padding : 3rem 0 1rem 0;
        }
        h3{
            font-size: 1.8rem;
            padding-bottom: 1rem;
            cursor: pointer;
            @media screen and (max-width:920px){
                font-size: 1.5rem;
                margin-bottom : .7rem;
            }
        }
        .answer{
            /* display : none; */
            padding: 2rem 0 0 0;
            p{
                padding-bottom: 1rem;
                font-size: 1.5rem;
                font-weight: lighter;
                line-height: 1.4;
                @media screen and (max-width:920px){
                    font-size: 20px;
                }
            }
        }
    }
`
    



export default Faq;