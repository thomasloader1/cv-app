import React from 'react'
import PropTypes from 'prop-types'

const SkillPercent = (props) => {
    const { percent } = props;
    return(
            <div>
                <p>{`${percent} %`}</p>
            </div>
            )
};

SkillPercent.propTypes = {
    percent: PropTypes.number.isRequired,
}

export default SkillPercent;