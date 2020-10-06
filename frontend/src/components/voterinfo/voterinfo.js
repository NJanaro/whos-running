import React from 'react';

class VoterInfo extends React.Component {

    render() {
        return (
            <div className="dashboard">
                <div className="voter-info">
                    {this.props.VoterInfo}
                    Hello
                </div>
            </div>
        );
    }
}

export default VoterInfo;