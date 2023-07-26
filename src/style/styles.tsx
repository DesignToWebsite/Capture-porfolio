import {styled} from 'styled-components'
import {motion} from "framer-motion"


export const Container = styled(motion.div)`
    padding: 1rem 8.8rem;
    display: flex;
    align-items: center;
    overflow: hidden;
    @media screen and (max-width:1109px){
        padding : 1rem 6rem;
    }
    @media screen and (max-width:920px){
        padding : 1rem 1.3rem;
    }
`