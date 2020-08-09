import React, { Fragment } from "react";
import ContentWork from "./ContentWork";
import './WorkCard.scss'

class WorkCard extends React.Component {

  constructor(props) {
    super(props)
    this.showHideContent = this.showHideContent.bind(this);
    this.contentRef = React.createRef();
    this.containerRef = React.createRef();
  }

  showHideContent = () => {
    console.log(this.contentRef.current, this.containerRef)
    this.contentRef.current.classList.toggle("d-none")
    this.containerRef.current.classList.toggle("work-expanded")
    
  };

  render() {
    let { work } = this.props;
    return (
      <Fragment>
        <div ref={this.containerRef} id={work.id} className={`${work.id} py-4`}>
          <div className="card-bar text-center position-relative w-100">
            <div className="head-card">
              <img src={process.env.PUBLIC_URL + work.image} className="logo-work" alt={work.name} />
              <h5 className="rubik-700 text-uppercase text-white spacing-3">{work.name}</h5>
              <p className="rubik-500 spacing-3 bg-dark rounded-xl px-2 py-1 d-inline-block">{work.start + " - " + work.end}</p>
              <a className="bg-dark d-block font-weight-bold" onClick={this.showHideContent}>+</a>
            </div>
          </div>
          <ContentWork work={work} ref={this.contentRef} />
        </div>
      </Fragment>
    )
  }
};

export default WorkCard;
