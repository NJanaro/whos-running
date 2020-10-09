import React from 'react';

class ElectionIndexItem extends React.Component {
    // constructor(props) {
    //     super(props);

    // }

    render() {
        return(
            <div className="election-item" >
                <h2>{ this.props.election.name }</h2>
                <span>Date: { this.props.election.electionDay }</span>
            </div>
        )
    }
}

export default ElectionIndexItem;