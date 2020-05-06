import React, { Fragment } from "react";
import { withStyles } from "@material-ui/core/styles";
import { Card, CardMedia } from "@material-ui/core";

const BoxSoft = ({icon, name, lang, classes }) => {
    return (
        <Fragment>
            <Card className={classes.item}>
                <CardMedia className={classes.media} image={process.env.PUBLIC_URL+""+icon}/>
            </Card>
        </Fragment>
    );
}

export default withStyles({
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
        height: "50px",
        backgroundSize: "contain",
        backgroundPosition: "center"
    }

})(BoxSoft);
