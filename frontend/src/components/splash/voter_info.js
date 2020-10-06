import React from 'react';

class VoterInfo extends React.Component {
    render() {
        // debugger
        return (
            <div>
                { this.props.voterinfo.state[0].name }
            </div>
        )
    }
}

export default VoterInfo;