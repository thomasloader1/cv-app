import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Card, CardMedia } from "@material-ui/core";

const SkillCard = ({icon, name, lang, onSkillClick }) => {

    const useStyles = makeStyles({
        item:{
            minWidth: "70px",
            maxHeight: "70px",
            margin: "1rem",
            boxSizing: "border-box",
            padding: '12px',
            textAlign: "center",
            borderRadius: "0.7rem",
        },
        media:{
            height: "40px",
            backgroundSize: "contain",
            backgroundPosition: "center"
        }
    
    });

    const classes = useStyles();

    return (
        <Fragment>
            <Card className={classes.item} onClick={onSkillClick}>
                <CardMedia className={classes.media} image={process.env.PUBLIC_URL+""+icon} />
            </Card>
        </Fragment>
    );
}

export default SkillCard;
