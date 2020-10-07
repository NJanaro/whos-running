import React from 'react';
import RepresentativesIndexItem from './representatives_index_item';

class RepresentativesIndex extends React.Component {

    render() {
        let officials;
        officials = this.props.repsInfo.officials.map((official, idx) => {
            return <li key={ idx }><RepresentativesIndexItem repsInfo={ this.props.repsInfo } official={ official }/></li>
        });
        return (
            <section>
                { officials }
            </section>
        )
    }
}

export default RepresentativesIndex;