import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import WorkCard from './WorkCard'

const WorkExpierence = () => {

  const useStyles = makeStyles({
    image: {
      width: "60px",
      borderRadius: "50%",
      boxShadow: "0px 0px 5px 0px rgba(0,0,0,0.3)",
      left: "-15px",
      top: "-20px",
      position: "absolute",
      margin: "auto",
      zIndex: "3"
    },
    card:{
      border:'unset',
      boxShadow: "0px 0px 5px 0px rgba(0,0,0,0.3)",
    },
    cardBar:{
      borderRadius: "0.5rem",
      padding: "15px 0px",
      background: "linear-gradient(45deg,#ffcb52,#ff7b02)",
      color: "white",
      position: "absolute",
      top: "0",
      left: "0",
      right: "0"
    }
  });
  
  const classes = useStyles();

  return (
    <WorkCard classes={classes}/>
  );
};

export default WorkExpierence;
