import React from 'react';

class ElectionIndexItem extends React.Component {
    constructor(props) {
        super(props);

    }
    
    render() {
        return(
            <div className="election-item" onClick={ () => this.handleClick(election.id) }>
                <h2>Name: { props.election.name }</h2>
                <span>Date: { props.election.electionDay }</span>
            </div>
        )
    }
}