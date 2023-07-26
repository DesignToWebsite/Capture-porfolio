import {  Routes, Route, useLocation} from "react-router-dom"
import Nav from "./Nav"
import GlobalStyle from "../style/GlobalStyle"
import AboutUs from "../pages/AboutUs";
import OurWork from "../pages/OurWork";
import ContactUs from "../pages/ContactUs";
import MovieDetails from "../pages/MovieDetails";
import { AnimatePresence } from "framer-motion";
import Scroll from "./Scroll";

function App() {
    const location = useLocation();
    return(
        <>
            <GlobalStyle />
            <Nav />
            <AnimatePresence mode="wait">
                <Routes location={location} key={location.pathname}>
                    <Route path="/" element={<AboutUs />} />
                    <Route path="/about" element={<AboutUs />} />
                    <Route path="/work" element={<OurWork />} />
                    <Route path="/contactUs" element={<ContactUs />} />
                    <Route path="/work/:id" element={<MovieDetails />} />
                </Routes>
            </AnimatePresence>
            <Scroll />
        </>
    )
}

export default App
