import { styled } from "styled-components";
import { Container } from "../style/styles";
import { pageAnim, titleAnim } from "../animation";
import { motion } from "framer-motion";
const ContactUs = () => {
  return (
    <ContactStyle
      variants={pageAnim}
      exit="exit"
      initial="hidden"
      animate="show"
      style={{ background: "#fff" }}
    >
      <Title>
        <Hide>
          <motion.div variants={titleAnim} >Get in touch.</motion.div>
        </Hide>
      </Title>
      <div className="contact">
        <Hide>
          <motion.div variants={titleAnim} className="item">
            <div className="circle"></div>
            <h2>Send Us A Message.</h2>
          </motion.div>
        </Hide>
        <Hide>
          <motion.div variants={titleAnim} className="item">
            <div className="circle"></div>
            <h2>Send An Email.</h2>
          </motion.div>
        </Hide>
        <Hide>
          <motion.div variants={titleAnim} className="item">
            <div className="circle"></div>
            <h2>Social Media.</h2>
          </motion.div>
        </Hide>
      </div>
    </ContactStyle>
  );
};

const ContactStyle = styled(Container)`
  flex-direction: column;
  align-items: baseline;
  min-height: 100vh;
  color: black;

  .item {
    display: flex;
    align-items: center;
    margin-bottom: 4rem;
    .circle {
      width: 2.8rem;
      height: 2.8rem;
      background: #353535;
      border-radius: 50%;
      margin-right: 15px;
    }
    h2 {
      font-size: 3rem;
      color: #353535;
    }
  }
`;
const Title = styled.div`
  padding: 5rem 0;
  font-size: 20px;
`;
const Hide = styled.div`
  overflow: hidden;
`;
export default ContactUs;
