import React from 'react';

class VoterInfo extends React.Component {
    render() {
        const info = this.props.voterinfo;
        debugger
        return (
            <div className="voterinfo">
                election: { info.election.name }
                date: { info.election.electionDay}
                Polling address: {info.state[0].local_jurisdiction.electionAdministrationBody.physicalAddress.line1}
                city: {info.state[0].local_jursidiction.electionAdministrationBody.physicalAddress.city}
            </div>
        )
    }
}

export default VoterInfo;

// Polling address: {info.state[0].local_jursidiction.electionAdministrationBody.physicalAddress.line1}
//                 city: {info.state[0].local_jursidiction.electionAdministrationBody.physicalAddress.city}
//                 state: {info.state[0].local_jursidiction.electionAdministrationBody.physicalAddress.state}
//                 zip: {info.state[0].local_jursidiction.electionAdministrationBody.physicalAddress.zip}
//                 county: {info.state[0].local_jursidiction.electionAdministrationBody.name}
//                 website: {info.state[0].local_jursidiction.electionAdministrationBody.electionInfoUrl}
//                 election officials : {info.state[0].local_jursidiction.electionAdministrationBody.electionOfficials.map( official => {return (official.officePhoneNumber)})}