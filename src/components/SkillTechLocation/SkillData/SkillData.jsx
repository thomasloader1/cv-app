import React from 'react'
import SkillPercent from './SkillPercent.jsx'
import SkillExtraInfo from './SkillExtraInfo.jsx'
import PropTypes from "prop-types"

const SkillData = (props) => {

    const {percent, extraInfo} = props;

    return (
            <div>
                <SkillPercent percent = {percent}/>
                <SkillExtraInfo extraInfo = {extraInfo}/>
            </div>
            )
};

SkillData.propTypes = {
    percent: PropTypes.number.isRequired,
    extraInfo: PropTypes.string.isRequired,
}



export default SkillData;