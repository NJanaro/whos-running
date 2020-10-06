import React from 'react';

export default (props) => {
    return(
        <div className="election-item">
            <h2>Name: { props.election.name }</h2>
            <span>Date: { props.election.electionDay }</span>
        </div>
    )
}