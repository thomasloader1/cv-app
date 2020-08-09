import React from "react";
import { works } from "../../services/WorkExperience";
import WorkCard from './WorkCard'

class WorkExpierence extends React.Component {

  constructor(){
    super();
    //this.workCardRef = React.createRef();
    this.state = {
      works,
    }
  }
  
  render(){
    let { works } = this.state;
    return (
      <>
      { works.map((work) => <WorkCard key={work.id} work={work}/>) }
      </>
  )}
};

export default WorkExpierence;
