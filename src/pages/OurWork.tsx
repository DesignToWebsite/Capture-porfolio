import { styled } from "styled-components";
//images
import athlete from "../img/athlete-small.png";
import theracer from "../img/theracer-small.png";
import goodtimes from "../img/goodtimes-small.png";

import { Container } from "../style/styles";
import {
  fade,
  lineAnim,
  useScroll,
  slider,
  sliderContainer,
  pageAnim,
  photoAnim,
} from "../animation";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
const OurWork = () => {
  const [element1, controls1] = useScroll();
  const [element2, controls2] = useScroll();
  const [element3, controls3] = useScroll();
  return (
    <Work
      style={{ background: "#fff" }}
      variants={pageAnim}
      exit="exit"
      initial="hidden"
      animate="show"
    >
      <motion.div variants={sliderContainer} initial="hidden" animate="show">
        <Frame1 variants={slider} />
        <Frame2 variants={slider} />
        <Frame3 variants={slider} />
        <Frame4 variants={slider} />
      </motion.div>
      <motion.div className="item" variants={fade} >
        <h2>The athlete</h2>
        <Line
          variants={lineAnim}
          ref={element1}
          initial="hidden"
          animate={controls1}
        />
        <Link ref={element1} to="/work/the-athlete">
          <motion.div className="image">
            <motion.img
              src={athlete}
              variants={photoAnim}
              ref={element1}
              initial="hidden"
              animate={controls1}
              alt="athlete"
            />
          </motion.div>
        </Link>
      </motion.div>
      <motion.div
        className="item"
        variants={fade}
        ref={element2}
        initial="hidden"
        animate={controls2}
      >
        <h2>The racer</h2>
        <Line
          variants={lineAnim}
          ref={element2}
          initial="hidden"
          animate={controls2}
        />
        <Link to="/work/good-times">
          <motion.div className="image">
            <motion.img
              variants={photoAnim}
              ref={element2}
              initial="hidden"
              animate={controls2}
              src={theracer}
              alt="the racer"
            />
          </motion.div>
        </Link>
      </motion.div>
      <motion.div
        className="item"
        variants={fade}
        ref={element3}
        initial="hidden"
        animate={controls3}
      >
        <h2>Good Times</h2>
        <Line
          variants={lineAnim}
          ref={element3}
          initial="hidden"
          animate={controls3}
        />
        <Link to="/work/the-racer">
          <motion.div className="image">
            <motion.img
              variants={photoAnim}
              ref={element3}
              initial="hidden"
              animate={controls3}
              src={goodtimes}
              alt="Good Times"
            />
          </motion.div>
        </Link>
      </motion.div>
    </Work>
  );
};

const Work = styled(Container)`
  padding-top: 3rem;
  padding-bottom: 3rem;
  color: black;
  flex-direction: column;
  h2 {
    font-size: 3rem;
    padding: 1rem 0;
  }
  .image {
    overflow: hidden;
    height: 70vh;
    img {
      width: 100%;
      object-fit: cover;
    }
  }

  .item {
    margin-bottom: 3rem;
  }
`;
const Line = styled(motion.div)`
  height: 0.5rem;
  background-color: #23d997;
  margin-bottom: 3rem;
`;

//frame Animation

const Frame1 = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  background: #fffebf;
  z-index: 2;
`;

const Frame2 = styled(Frame1)`
  background: #ff8efb;
`;

const Frame3 = styled(Frame1)`
  background: #8ed2ff;
`;
const Frame4 = styled(Frame1)`
  background: #8effa0;
`;

export default OurWork;
