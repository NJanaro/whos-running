import React from 'react';
import RepresentativesIndexItem from './representatives_index_item';

class RepresentativesIndex extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        let officials;
        if(this.props.repsInfo.officials) {
            officials = this.props.repsInfo.officials.map((official, idx) => {
                return <li className="representative-item" key={ idx }><RepresentativesIndexItem repsInfo={ this.props.repsInfo } official={ official }/></li>
            });
        }
    
        return (
            <section className="reps-container">
                { officials }
            </section>
        )
    }
}

export default RepresentativesIndex;