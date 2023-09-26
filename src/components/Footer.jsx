//import React from "react";
import { createUseStyles } from "react-jss";

import jakec from "../assets/jakec.png";
import { Slide } from "react-reveal";

const useStyles = createUseStyles({
  footer: {
    background: "#1d1e2c",
    color: "#f5f5f5",
    fontFamily: "Montserrat, sans-serif",
    fontWeight: "500",
    bottom: "0",
    left: "0",
    height: "15vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    "@media (max-width: 750px)": {
      height: "auto",
      paddingTop: "1rem",
      fontsize: "0.4rem",
    },
  },
  row: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "0.5rem",
    "& p": {
      margin: "0 1rem",
      "@media (max-width: 750px)": {
        fontsize: "0.4rem",
      },
    },
    "& > a": {
      textDecoration: "none",
      color: "#FCFCEE",
      display: "flex",
      alignItems: "center",
      margin: "0 0.5rem",
      "& img": {
        width: "2rem",
        height: "2rem",
        margin: "0 0.5rem",
        transition: "all 0.3s ease-in-out",
        "&:hover": {
          transform: "scale(1.3)",
          transition: "all 0.3s ease-in-out",
        },
      },
    },
    "@media (max-width: 750px)": {
      flexDirection: "column",
      "& > a": {
        margin: "0.5rem 0",
      },
      "& .line": {
        display: "none",
      },
    },
  },
  jakec: {
    width: "2rem",
    borderRadius: "100%",
  },
});

function Footer() {
  const classes = useStyles();
  return (
    
    <footer className={classes.footer}>
        <Slide bottom>
      <div className={classes.row}>
        <p>&copy; 2023 Almond Court Motel</p>
        <p className="line">|</p>
        <a href="mailto:info@almondcourtmotel.co.nz">info@almondcourtmotel.co.nz</a>
        <p className="line">|</p>
        <a href="tel:034487667">03 448 7667</a>
      </div>
      <div className={classes.row}>
        <p>Website by</p>
        <a href="https://jakeclearwater.com">
          <img className={classes.jakec} src={jakec} alt="Jake C" />
        </a>
      </div>
      </Slide>
    </footer>
  );
}

export default Footer;
