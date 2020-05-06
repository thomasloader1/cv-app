import React, { Fragment } from "react";

export default ({ name, stars }) => {
  return (
    <Fragment>
      <div className="d-flex flex-column">
      <h6 className="open-sans mb-0">{name}</h6>
        <div className="d-flex mt-2 justify-content-between">
            <div className="circle-white mx-1"></div>
            <div className="circle-white mx-1"></div>
            <div className="circle-white mx-1"></div>
            <div className="circle-white mx-1"></div>
            <div className="circle-white mx-1"></div>
        </div>
      </div>
    </Fragment>
  );
};
