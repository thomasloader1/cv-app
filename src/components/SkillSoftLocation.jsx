import React, { Component } from 'react'


class SkillSoftLocation extends Component{
    constructor(props){
        super(props);
        const { soft, stars } = this.props;
        this.state = {
            soft,
            stars
        }
    }

    render(){
        const { soft, stars } = this.state;
        return(
        <h1>{ soft, stars}</h1>
        );
    }
}

export default SkillSoftLocation;