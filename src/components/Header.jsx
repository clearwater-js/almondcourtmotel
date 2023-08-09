import React, { useState } from "react";
import { createUseStyles } from "react-jss";
import logo from "../assets/SVGLogo.svg";
import menu from "../assets/menu.svg";
import close from "../assets/close.svg";
import { useLocation } from "react-router-dom";

const Header = () => {
  const classes = useStyles();
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };



  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <img src={logo} alt="logo" className={classes.logoImg} />
      </div>
      <div>
      <nav className={classes.nav}>
        <div className={classes.hamburger} onClick={toggleMenu}>
          <img src={showMenu ? close : menu} alt="menu" />
        </div>
        <div
          className={`${classes.menu} ${showMenu ? classes.show : ""}`}
          onClick={toggleMenu}
        >
          <a
              href="/"
              className={`${classes.link} ${
                location.pathname === "/" ? classes.active : ""
              }`}
            >
              HOME
            </a>
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
      </nav>
      </div>
    </header>
  );
};

const useStyles = createUseStyles({
  header: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: "1rem",
    backgroundColor: "#f5f5f5",
    color: "#fff",
    height: "auto",
  },
  logo: {
    width: "auto",
    height: "90%",
    maxWidth: "100%",
  },
  logoImg: {
    width: "100%",
    height: "100%",
    maxHeight: "150px",
    objectFit: "contain",
  },
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: "1rem",
    paddingBottom: "1rem",
    width: "100%",
    fontFamily: "Raleway, sans-serif",
    fontWeight: "400",
    "@media (max-width: 768px)": {
      width: "100%",
    },
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
    justifyContent: "space-between",
    width: "60vw",
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
    "&:hover": {
      textDecoration: "underline",
      transition: "all 0.4s ease-in-out",
    },
    "@media (max-width: 768px)": {
      fontSize: "2rem",
      
    },
  },
  show: {
    display: "flex",
  },
  active: {
    textDecoration: "underline",
  },
});

export default Header;
