import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useAnimation, Variants } from "framer-motion";

export const pageAnim: Variants = {
    hidden:{
        opacity:0,
        y:300,
    },
    show:{
        y:0,
        opacity:1,
        transition:{
            duration: 0.5,
            when:"beforeChildren",
            staggerChildren: 0.25,
        }
    },
    exit:{
        opacity:0,
        transition:{
            duration:.75,
        }
    }
}

export const titleAnim: Variants = {
    hidden : {
        y : 200,
    },
    show : {
        y: 0,
        transition:{
            duration:.75,
            transition:'easeOut'
        }
    }
}

export const photoAnim: Variants =  {
    hidden: {
        scale: 1.5,
        opacity:0,
    },
    show:{
        scale: 1,
        opacity:1,
        transition:{duration: .75, transition:'easeInOut'}
    }
}

export const fade: Variants = {
    hidden:{
        opacity:0,
    },
    show:{
        opacity:1, 
        transition:{ease:'easeOut', transition:0.75}
    }
}

export const useScroll = ()=>{
    const controls = useAnimation();
    const [element, view] = useInView({threshold:0.3});
    useEffect(()=>{
        if(view){
            controls.start('show');
        }else{
            controls.start('hidden');
        }
    });
    return [element, controls];
}

export const scrollAnim: Variants = {
    hidden: {
        opacity:0,
        scale: 1.2,
    },
    show: {
        opacity:1,
        scale: 1,
        transition : {transition: 'easeOut', duration:.75}
    }
}

export const lineAnim: Variants = {
    hidden:{
        width : '0%'
    },
    show:{
        width: '100%',
        transition:{duration:1.5, transition:'easeOut'}
    }

}

export const slider: Variants = {
    hidden:{
        x: '-130%',
        skew : "45deg"
    },
    show:{
        x: '100%',
        skew : '0deg', 
        transition : {
            duration: .5, 
            ease:'easeOut'
        }
    }
}

export const sliderContainer: Variants = {
    hidden:{
        opacity: 1
    },
    show: {
        opacity: 1,
        transition: {staggerChildren:0.15, 
            // when:"beforeChildren",
         }
    }
    
}

export const awardAnim: Variants = {
    hidden : {
        opacity : 0,
        y: 100,
    },
    show:{
        opacity: 1,
        y: 0,
        transition : {duration : 0.5}
    }
}