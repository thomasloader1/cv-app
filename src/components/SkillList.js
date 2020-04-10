import React from 'react'
import PropTypes from 'prop-types';
import SkillTechLocation from './SkillTechLocation/SkillTechLocation'

const SkillList = ({ items, onSelectedSkill }) => {
    const handleSkillClick = name => {
        onSelectedSkill(name);
    }
    const dataToComponent = items => ( items.map( item => <SkillTechLocation key={item.name} icon={item.icon} name={item.name} onSkillClick={ () => handleSkillClick(item.name) }/> ) );


    return(
        <div className="d-flex justify-content-center">
            {dataToComponent(items)}
        </div>
    );
};

SkillList.propTypes = {
    items: PropTypes.array.isRequired,
    onSelectedSkill: PropTypes.func,
}

export default SkillList;