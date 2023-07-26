import { Container } from "../style/styles"
import clock from "../img/clock.svg";
import diaphragm from "../img/diaphragm.svg"
import money from "../img/money.svg"
import teamWork from "../img/teamwork.svg"
import home2 from "../img/home2.png"
import { styled } from "styled-components";
import { scrollAnim, useScroll } from "../animation";

const Services = ()=>{
    const [element, controls] = useScroll();
    return(
        <ServicesStyle
        variants={scrollAnim} ref={element} animate={controls} initial="hidden" >
            <Content>
                <h2>Hight 
                    <span className="green"> quality </span>
                     services.
                </h2>
                <div className="row">
                    <div className="col">
                        <div className="title">
                            <img src={clock} alt="clock" />
                            <p>Efficient</p>
                        </div>
                        <div className="desc">
                            lorem ipsum dolor sit amet.
                        </div>
                    </div>
                    <div className="col">
                        <div className="title">
                            <img src={teamWork} alt="team work" />
                            <p>Team work</p>
                        </div>
                        <div className="desc">
                            lorem ipsum dolor sit amet.
                        </div>
                    </div>
                    <div className="col">
                        <div className="title">
                            <img src={diaphragm} alt="diaghram" />
                            <p>Pro Grade Grear</p>
                        </div>
                        <div className="desc">
                            lorem ipsum dolor sit amet.
                        </div>
                    </div>
                    <div className="col">
                        <div className="title">
                            <img src={money} alt="money" />
                            <p>Affordable</p>
                        </div>
                        <div className="desc">
                            lorem ipsum dolor sit amet.
                        </div>
                    </div>
                </div>
            </Content>
            <Image>
                <img src={home2} alt="Quality" />
            </Image>
        </ServicesStyle>
    )
}
const ServicesStyle = styled(Container)`
    min-height: 100vh;
    @media screen and (max-width:920px){
        flex-direction : column;
        padding-top : 2rem ;
        padding-bottom: 2rem;
    }
`
const Content = styled.div`
    margin-right: 1.5rem;
    flex:1;
    h2{
        font-size: 3rem;
        margin-bottom: 1.5em;
    }
    .row{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        .col{
            padding : 1rem 1rem 2.5rem 0;
            .title{
                display: flex;
                align-items: center;
                margin-bottom: 1.5rem;
                img{
                    margin-right : 1rem;
                }
                p{
                    background-color: white;
                    color: black;
                    padding: 0.5rem 1rem;
                    font-size: 18px;
                    font-weight: bold;
                    @media screen and (max-width:920px){
                        padding: 0.4rem 0.7rem;
                    }
                }
            }
            .desc{
                color:#ccc;
                font-size: 1.4rem
            }
        }
    }
`
const Image = styled.div`
    flex: 1;
    overflow : hidden;
    img{
        width: 100%;
        height: 80vh;
        object-fit : cover;

        /* width:100%; */
    }
`
export default Services;