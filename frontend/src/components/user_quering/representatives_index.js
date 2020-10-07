import React from 'react';
import RepresentativesIndexItem from './representatives_index_item';

class RepresentativesIndex extends React.Component {

    render() {
        let officials;
        if(this.props.repsInfo.officials) {
            officials = this.props.repsInfo.offices.map((office, idx) => {
                return office.officialIndices.map(officialIdx => {
                    return <span className="representative-item" key={ officialIdx }><RepresentativesIndexItem name={ office.name } repsInfo={ this.props.repsInfo } official={ this.props.repsInfo.officials[officialIdx] }/></span>
                })
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