import React from "react";
import PropTypes from "prop-types";
import SkillCard from "./SkillCard";
import { withStyles } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";

const SkillListTech = ({ items, onSelectedSkill, classes }) => {
  const handleSkillClick = (lang) => {
    onSelectedSkill(lang);
  };

  return (
      <Box className={classes.subContainer}>
        {items.map((item) => (
          <Box key={item.name} display="flex" justifyContent="center" alignItems="center">
            <SkillCard
              key={item.name}
              icon={item.icon}
              name={item.name}
              lang={item.lang}
              onSkillClick={handleSkillClick(item.name)}
            />
        </Box>
          ))}
      </Box>
  );
};

SkillListTech.propTypes = {
  items: PropTypes.array.isRequired,
  onSelectedSkill: PropTypes.func,
};

export default withStyles({
  subContainer:{
    width: "100%",
    backgroundColor: "#ccc",
    display:"flex",
    flexWrap: "wrap",
    justifyContent:"center",
    borderRadius: "0.7rem",
    boxShadow: "inset 0px 0px 8px -3px rgba(0,0,0,0.75)"
  }
})(SkillListTech);
