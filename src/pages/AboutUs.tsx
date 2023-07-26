import { pageAnim } from "../animation";
import HeaderSection from "../component/HeaderSection"
import {motion} from 'framer-motion'
import Services from "../component/Services";
import Faq from "../component/Faq";

const AboutUs = ()=>{
    return(
    <motion.div exit='exit' variants={pageAnim}  initial="hidden" animate="show">
        <HeaderSection />
        <Services />
        <Faq />
    </motion.div>
    )
}
// const AboutUsStyle = styled(motion.div)`
//     background-color : #1b1b1b;
// `
export default AboutUs;