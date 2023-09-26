import { useState } from "react";
import { createUseStyles } from "react-jss";
import logo from "../assets/SVGLogo.svg";
import menu from "../assets/menu.svg";
import close from "../assets/close.svg";
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';

const Header = () => {
  const classes = useStyles();
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };



  return (
    <Slide top>
    <header className={classes.header}>
      <div>
      <nav className={classes.nav}>
        <div
          className={`${classes.menu} ${showMenu ? classes.show : ""}`}
          onClick={toggleMenu}
        >
          <div className={classes.left}>
            <a
              href="/about"
              className={`${classes.link} ${
                location.pathname === "/about" ? classes.active : ""
              }`}
            >
              ABOUT
            </a>
            <a
              href="/features"
              className={`${classes.link} ${
                location.pathname === "/features" ? classes.active : ""
              }`}
            >
              FEATURES
            </a>
            </div>
              <a href="/"><img src={logo} alt="logo" className={classes.logoImg} /></a>
            <div className={classes.right}>
            <a
              href="/book"
              className={`${classes.link} ${
                location.pathname === "/book" ? classes.active : ""
              }`}
            >
              BOOK ONLINE
            </a>
            <a
              href="/contact"
              className={`${classes.link} ${
                location.pathname === "/contact" ? classes.active : ""
              }`}
            >
              CONTACT
            </a>
            </div>
        </div>
      </nav>
      </div>
    </header>
    </Slide>
  );
};

const useStyles = createUseStyles({
  header: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: "1rem",
    backgroundColor: "#f5f5f5",
    color: "#fff",
    height: "auto",
    position: "fixed",
    width: "100%",
    zIndex: "2",
  },
  logoImg: {
    width: "100%",
    height: "100%",
    maxHeight: "100px",
    minHeight: "75px !important",
  },
  nav: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: "1rem",
    paddingBottom: "1rem",
    width: "100%",
    fontFamily: "Raleway, sans-serif",
    fontWeight: "400",
    "& div": {
      flex: 1,
      display: "flex",
      justifyContent: "center",
    },
    "@media (max-width: 768px)": {
      width: "100%",
    },
  },
  left: {
    display: "flex !important",
    justifyContent: "flex-end !important",
    paddingRight: "2rem",
  },
  right: {
    justifyContent: "flex-start !important",
    paddingLeft: "2rem",
  },
  hamburger: {
    display: "none",
    zIndex: "2",
    cursor: "pointer",
    "@media (max-width: 768px)": {
      display: "block",
    },
  },
  menu: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    width: "90vw",
    alignItems: "center",
    paddingBottom: "1rem",
    "@media (max-width: 768px)": {
      display: "none",
      position: "absolute",
      top: "11vh",
      right: "0",
      width: "100%",
      height: "90vh",
      backgroundColor: "#f5f5f5",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      zIndex: "1",
      transition: "all 0.5s ease-in-out",
    },
  },
  link: {
    textDecoration: "none",
    color: "#000",
    fontSize: "1.2rem",
    transition: "all 0.4s ease-in-out",
    padding: "0.5rem",
    paddingRight: "1rem",
    paddingLeft: "1rem",
    "& img": {},
    "&:hover": {
      backgroundColor: "#3c5f30",
      color: "#fff",
      transition: "all 0.4s ease-in-out",
    },
    "@media (max-width: 768px)": {
      fontSize: "2rem",
    },
  },
  show: {
    display: "flex",
  },
});

export default Header;
