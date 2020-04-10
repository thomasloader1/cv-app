import React from 'react'
import PropTypes from 'prop-types'

const SkillExtraInfo = (props) => {
    
    const { extraInfo } = props;
    return(
            <div>
                <p>{extraInfo}</p>
            </div>
            )
};

SkillExtraInfo.propTypes ={
    extraInfo: PropTypes.string.isRequired,
}

export default SkillExtraInfo;