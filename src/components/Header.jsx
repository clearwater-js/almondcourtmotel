import React, { useState } from "react";
import { createUseStyles } from "react-jss";
import logo from "../assets/SVGLogo.svg";
import menu from "../assets/menu.svg";
import close from "../assets/close.svg";

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
      <nav className={classes.nav}>
        <div className={classes.hamburger} onClick={toggleMenu}>
          <img src={showMenu ? close : menu} alt="menu" />
        </div>
        <div
          className={`${classes.menu} ${showMenu ? classes.show : ""}`}
          onClick={toggleMenu}
        >
          <a href="/" className={classes.link}>
            HOME
          </a>
          <a href="/about" className={classes.link}>
            ABOUT
          </a>
          <a href="/features" className={classes.link}>
            FEATURES
          </a>
          <a href="/book" className={classes.link}>
            BOOK ONLINE
          </a>
          <a href="/contact" className={classes.link}>
            CONTACT
          </a>
        </div>
      </nav>
    </header>
  );
};

const useStyles = createUseStyles({
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1rem 2rem",
    backgroundColor: "#f5f5f5",
    color: "#fff",
    height: "10vh",
  },
  logo: {
    width: "auto",
    height: "90%",
    maxWidth: "100%",
  },
  logoImg: {
    width: "100%",
    height: "100%",
    objectFit: "contain",
  },
  nav: {
    display: "flex",
    justifyContent: "right",
    alignItems: "center",
    width: "70%",
    fontFamily: "Raleway, sans-serif",
    fontWeight: "400",
    "@media (max-width: 768px)": {
      width: "100%",
    },
  },
  hamburger: {
    display: "none",
    cursor: "pointer",
    "@media (max-width: 768px)": {
      display: "block",
      marginRight: "1rem",
    },
  },
  menu: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "right",
    alignItems: "center",
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
    paddingLeft: "1rem",
    paddingRight: "1rem",
    "&:hover": {
      color: "#fff",
      backgroundColor: "#376e34",
      padding: "0.5rem 1rem",
      transition: "all 0.4s ease-in-out",
    },
    "@media (max-width: 768px)": {
      fontSize: "2rem",
      margin: "1rem",
    },
  },
  show: {
    display: "flex",
  },
});

export default Header;
