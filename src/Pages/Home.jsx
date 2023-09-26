import Header from "../components/Header";
import Footer from "../components/Footer";

import homepicture from "../assets/home_About.jpg";
import { createUseStyles } from "react-jss";
import Fade from "react-reveal/Fade";
//import Slide from "react-reveal/Slide";

//section imports
import AboutSection from "../components/AboutSection";



const Home = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Header />
      <div className={classes.home}>
        <Fade right>
        <div className={classes.text}>
          <h2>1, 2 Bedroom & Studio Apartments</h2>
          <h2>Almond Cottage</h2>
          <h2>Relaxed, Friendly & Award Winning Service</h2>
        </div>
        </Fade>
        
      </div>
      <AboutSection />
    <Footer />
    </div>
  );
};

export default Home;

const useStyles = createUseStyles({
  home: {
    width: "100%",
    backgroundImage: `url(${homepicture})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "80vh",
    display: "flex",
    justifyContent: "right",
    alignItems: "center",
    paddingTop: "10rem",
  },
  container: {
    
  },
  text: {
    display: "flex",
    height: "80%",
    width: "40%",
    backgroundColor: "rgba(60, 95, 48, 0.6)",
    justifyContent: "center",
    alignItems: "left",
    flexDirection: "column",
    paddingLeft: "2rem",
    
    "& h2": {
      color: "#f5f5f5",
      fontFamily: "Raleway, sans-serif",
      fontWeight: "400 !important",
        fontSize: "2rem",
    },
  },
});
