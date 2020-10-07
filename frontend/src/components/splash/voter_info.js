import React from 'react';

class VoterInfo extends React.Component {
    render() {
        let arr;
        const info = this.props.voterinfo;
        let pA, lJ, eAB, eO;
        if(info.state[0]) {
            if(info.state[0].local_jurisdiction) {
                if(info.state[0].local_jurisdiction.electionAdministrationBody) {
                    if(info.state[0].local_jurisdiction.electionAdministrationBody.physicalAddress) {
                        pA = info.state[0].local_jurisdiction.electionAdministrationBody.physicalAddress
                    } else {
                        pA = info.state[0].local_jurisdiction.electionAdministrationBody
                    }
                } else {
                    pA = info.state[0].local_jurisdiction;
                }
            } else {
                pA = info.state[0];
            }
        } 
        if (info.state[0]) {
            if (info.state[0].local_jurisdiction) {
                lJ = info.state[0].local_jurisdiction.name ? info.state[0].local_jurisdiction.name : false;
                if (info.state[0].local_jurisdiction.electionAdministrationBody) {
                    if (info.state[0].local_jurisdiction.electionAdministrationBody.electionInfoUrl) {
                        eAB = info.state[0].local_jurisdiction.electionAdministrationBody.electionInfoUrl;
                    }
                    if(info.state[0].local_jurisdiction.electionAdministrationBody.electionOfficials) {
                        eO = info.state[0].local_jurisdiction.electionAdministrationBody.electionOfficials;
                    }
                }
            }
        }
        const electionOfficials = eO;
        if(electionOfficials) {
            arr = electionOfficials.map((official, idx) => {
                return (
                <li key={idx}>
                    <p>{ official.name ? `name: ${ official.name}` : "" }</p>
                    <p>{ official.officePhoneNumber ? `Office Phone Number: ${ official.officePhoneNumber }` : "" }</p>
                </li>
            )})
        }
        return (
            <div className="voterinfo">
                <p>{ info.election.name ? `Election: ${ info.election.name }` : "" }</p>
                <p>{ info.election.electionDay ? `Date: ${ info.election.electionDay }` : "" }</p>
                { pA ? <>
                    <p>{ pA.line1 ? `Polling address: ${ pA.line1 }` : "" }</p>
                    <p>{ pA.city ? `City: ${ pA.city }` : "" }</p>
                    <p>{ pA.state ? `State: ${ pA.state }` : "" }</p>
                    <p>{ pA.zip ? `Zip: ${ pA.zip }` : "" }</p>
                    <p>{ lJ ? `county: ${ lJ }` : "" }</p>
                </> : null }
                { eAB ? 
                    <p>{ eAB ? `Election Info: ${ eAB }` : ""}</p>
                      : null }
                <div className="election-officials">{ arr }</div>
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