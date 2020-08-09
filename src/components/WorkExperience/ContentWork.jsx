import React from 'react';

const ContentWork = React.forwardRef((props, ref) => {
    let { work } = props;
    return (
        <div ref={ref} className="info-content bg-dark d-none">
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
    )
})

export default ContentWork;