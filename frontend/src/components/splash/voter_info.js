import React from 'react';

class VoterInfo extends React.Component {
    render() {
        return (
            <div>
                { this.props.voterinfo.state[0].name }
            </div>
        )
    }
}

export default VoterInfo;