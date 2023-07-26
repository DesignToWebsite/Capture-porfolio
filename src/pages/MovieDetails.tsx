import { useLocation } from "react-router-dom";
import { MovieState } from "../data/movieState";
import { useEffect, useState } from "react";
import { Container } from "../style/styles";
import { styled } from "styled-components";
import { motion } from "framer-motion";
import { pageAnim, scrollAnim, useScroll, lineAnim } from "../animation";

const MovieDetails = () => {
  const location = useLocation();
  const url = location.pathname;
  const [movies, setMovies] = useState(MovieState);
  const [movie, setMovie] = useState(null);
  useEffect(() => {
    const currentMovie = movies.filter((stateMovie) => stateMovie.url === url);
    setMovie(currentMovie[0]);
  }, [movies, url]);

  //animation
  const [img1, controls1] = useScroll();
  const [img2, controls2] = useScroll();
  const [lines, controls3] = useScroll();

  return (
    <>
      {movie && (
        <MovieStyle variants={pageAnim} exit="exit" initial='hidden' animate='show'>
          <h2>{movie.title}</h2>
          <div  className="image">
            <motion.img variants={scrollAnim} ref={img1} initial='hidden' animate={controls1} src={movie.mainImg} alt={movie.title} />
          </div>
          <MovieDescription>
                {
                    movie.awards.map((award, index) =>(
                        <motion.div variants={pageAnim} ref={lines} initial='hidden' animate={controls3} className="item" key={index}>
                            <h3>{award.title}</h3>
                            <motion.div variants={lineAnim} ref={lines} initial='hidden' animate={controls3} className="line"></motion.div>
                            <p>{award.description}</p>
                        </motion.div>
                    ))
                }
          </MovieDescription>
          <div  className="image">
            <motion.img variants={scrollAnim} ref={img2} initial='hidden' animate={controls2} src={movie.secondaryImg} alt={movie.title} />
          </div>
        </MovieStyle>
      )}
    </>
  );
};

const MovieStyle = styled(motion.div)`

  h2{
    text-align: center;
    font-size: 3rem;
    padding: 3rem 0;
  }
  .image{
    /* width : 100%; */
    overflow: hidden;
    height: 90vh;
    img{
      width: 100%;
      object-fit: cover;
    }
  }
`

const MovieDescription = styled(Container)`
  min-height: 80vh;
  justify-content: space-between;
  gap : 2rem;
  h3{
    font-size : 1.5rem;
    font-weight: bold;
  }
  .line{
    background-color : #23d997;
    padding: 3px;
    margin : 1rem 0 2rem 0; 
  }
  p{
    font-size : 1.4rem;
    color: #ccc;
    line-height: 1.6
  }
`

export default MovieDetails;
