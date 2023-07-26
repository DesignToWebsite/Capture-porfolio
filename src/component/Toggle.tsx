import { motion } from "framer-motion";
import {useState} from "react";


const Toggle = ({children, title}) =>{
    const [toogle, setToggle] = useState(false)
    return(
        <motion.div layout className="question"
        onClick={()=>setToggle(!toogle)}>
            <motion.h3 layout className="green">{title}</motion.h3>
            {toogle ? children : ""}
        </motion.div>
    )
}

export default Toggle;