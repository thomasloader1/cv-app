import React from "react";
import PropTypes from "prop-types";
import SkillCard from "./SkillCard";
import { withStyles } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";
import Stars from "./Stars";

const SkillListSoft = ({ items, onSelectedSkill, onSelectedSoft, classes }) => {
  const handleSkillClick = (lang) => {
    onSelectedSkill(lang);
  };

  const handleSoftClick = (name) => {
    onSelectedSoft(name);
  };

  return (
    <Box className={classes.subContainer}>
      {items.map((item) => (
        <div key={item.name}>
          <Box
            key={item.name}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <SkillCard
              icon={item.icon}
              onSkillClick={item.stars ? handleSoftClick(item.name) : handleSkillClick(item.name)}
            />
            <Stars name={item.name} stars={item.stars} />
          </Box>
        </div>
      ))}
    </Box>
  );
};

SkillListSoft.propTypes = {
  items: PropTypes.array.isRequired,
  onSelectedSkill: PropTypes.func,
};

export default withStyles({
  subContainer: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    backgroundColor: "#ccc",
    borderRadius: "0.7rem",
    boxShadow: "inset 0px 0px 8px -3px rgba(0,0,0,0.75)",
  },
})(SkillListSoft);
