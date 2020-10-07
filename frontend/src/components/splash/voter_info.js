import React from 'react';

class VoterInfo extends React.Component {
    render() {
        const info = this.props.voterinfo;
        debugger
        return (
            <div className="voterinfo">
                <p>election: { info.election.name ? info.election.name : null}</p>
                <p>date: { info.election.electionDay}</p>
                
                <p>Polling address: {info.state[0].local_jurisdiction.electionAdministrationBody.physicalAddress.line1}</p>
                <p>city: {info.state[0].local_jurisdiction.electionAdministrationBody.physicalAddress.city}</p>
                <p>state: {info.state[0].local_jurisdiction.electionAdministrationBody.physicalAddress.state}</p>
                <p>zip: {info.state[0].local_jurisdiction.electionAdministrationBody.physicalAddress.zip}</p>
                <p>county: {info.state[0].local_jurisdiction.name}</p>
                <p>website: {info.state[0].local_jurisdiction.electionAdministrationBody.electionInfoUrl}</p>
                <div>election officials : {info.state[0].local_jurisdiction.electionAdministrationBody.electionOfficials.map( official => {return (
                    <>
                        <p>name: {official.name}</p>
                        <p>phone no. {official.officePhoneNumber}</p>
                    </>
                    )})}</div>
            </div>
        )
    }
}

export default VoterInfo;

// Polling address: {info.state[0].local_jursidiction.electionAdministrationBody.physicalAddress.line1}
//                 city: {info.state[0].local_jursidiction.electionAdministrationBody.physicalAddress.city}
//                 state: {info.state[0].local_jursidiction.electionAdministrationBody.physicalAddress.state}
//                 zip: {info.state[0].local_jursidiction.electionAdministrationBody.physicalAddress.zip}
//                 county: {info.state[0].local_jurisidiction.electionAdministrationBody.name}
//                 website: {info.state[0].local_jurisidiction.electionAdministrationBody.electionInfoUrl}
//                 election officials : {info.state[0].local_jurisidiction.electionAdministrationBody.electionOfficials.map( official => {return (official.officePhoneNumber)})}