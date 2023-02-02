import React from 'react';

const Presentation = (props) => {
    return (
        <div className='presentation'>
            <div className="presentation__body">
                <h1>{props.title}</h1>
            </div>
        </div>
    );
};

export default Presentation;