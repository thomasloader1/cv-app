import React, { Fragment } from "react";
import { works } from "../../services/WorkExperience";
import './WorkCard.scss'

const WorkCard = ({ classes }) => {
  const state = {
    works,
  };

  return (
    <Fragment>
      {state.works.map((work) => (
        <div key={work.name} className="col-sm-12 col-md-6 py-3 d-flex align-items-strech">
          <div className={classes.card + " card card-body rounded-xl my-3 position-relative"}>
            <div className="text-center">
              <img
                src={process.env.PUBLIC_URL + work.image}
                className="logo-work"
                alt={work.name}
              />
              <div className="card-bar">
                <p className="rubik-500 spacing-2">{work.start + " - " + work.end}</p>
              </div>
            </div>
            <div className="info-content">
              <h4 className="rubik-700 mb-3 text-uppercase">{work.name}</h4>
              <div className="card card-body p-1">
                <p className="mt-2 mb-1 ml-2 font-14">
                  <i className="fas fa-map-marker-alt fa-sm mr-2"></i> {work.location}
                </p>
              </div>
              <div className="card card-body p-1">
                <p className="mb-3 ml-2 font-14 pt-2">
                  <i className="fas fa-suitcase fa-sm mr-2"></i>{work.charge}
                </p>
              </div>
              <ul className="list-unstyled">
                {work.tasks.map((task, index) => (
                  <li key={index} className="my-2">
                    <i className="fas fa-caret-right fa-sm mr-2"></i>
                    {task}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))}
    </Fragment>
  );
};

export default WorkCard;
