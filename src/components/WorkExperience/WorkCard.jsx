import React, { Fragment } from "react";
import { works } from "../../services/WorkExperience";

const WorkCard = ({ classes }) => {
  const state = {
    works,
  };

  return (
    <Fragment>
      {state.works.map((work) => (
        <div
          key={work.name}
          className="col-sm-12 col-md-6 py-3 d-flex align-items-strech">
          <div
            className={
              classes.card + " card card-body rounded-xl my-3 position-relative"
            }>
            <div className="text-center">
              <img
                src={process.env.PUBLIC_URL + work.image}
                className={classes.image}
                alt={work.name}
              />
              <div className={classes.cardBar}>
                <span className="font-weight-bold open-sans">
                  {work.start + " - " + work.end}
                </span>
              </div>
            </div>
            <h4 className="open-sans mb-0 mt-5">{work.name} </h4>
            <span className="mt-2 mb-1 ml-2 font-14">
              <i class="fas fa-map-marker-alt fa-sm mr-2"></i>
              {work.location}
            </span>
            <span className="mb-3 ml-2 font-14 pt-2">
              <i class="fas fa-suitcase fa-sm mr-2"></i>
              {work.charge}
            </span>
            <ul className="list-unstyled">
              {work.tasks.map((task) => (
                <li key={task.name} className="my-2">
                  <i className="fas fa-caret-right fa-sm mr-2"></i>
                  {task}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </Fragment>
  );
};

export default WorkCard;
