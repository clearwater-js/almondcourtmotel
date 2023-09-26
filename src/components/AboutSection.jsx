//import React from "react";
import { createUseStyles } from "react-jss";

const AboutSection = () => {
    const classes = useStyles();
    return (
        <div className={classes.container}>
            <h1>About</h1>
        </div>
    );
    }

export default AboutSection;

const useStyles = createUseStyles({
    container: {
        height: "80vh",
    }
})