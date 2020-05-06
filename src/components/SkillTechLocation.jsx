import React, { Component } from "react";
import { PropTypes } from "prop-types";
import Skill from "./Skill.jsx";
import "./styles.scss";

class SkillTechLocation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lang: props,
    };
  }
  render() {
    const { onSkillClick } = this.props;
    const { lang } = this.state;
    return (
      <div onClick={onSkillClick} className="m-3">
        <Skill lang={lang} />
      </div>
    );
  }
}

SkillTechLocation.propTypes = {
  lang: PropTypes.object,
  onSkillClick: PropTypes.func,
};

export default SkillTechLocation;
