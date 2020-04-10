import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Skill extends Component{
    constructor(props){
        super(props);

        const {lang} = props;

        this.state = {
            lang
        }
    }

    render(){
        const {lang} = this.state;
        return (
            <React.Fragment>
                <img src={process.env.PUBLIC_URL +""+ lang.icon} height="60" alt={lang.name}/> 
            </React.Fragment>
            )
    }
};

Skill.propTypes = {
    lang: PropTypes.any.isRequired,
}

export default Skill;