import React from 'react';
import {MapContainer} from '../map/map';
class VoterInfo extends React.Component {
    render() {
        const info = this.props.voterinfo;
        const stateInfo = info.state[0];
        
    // Sample voterinfo query for dev
        // const info = {
        //     "kind": "civicinfo#voterinforesponse",
        //     "status": "success",
        //     "election": {
        //      "id": "2000",
        //      "name": "VIP Test Election",
        //      "electionDay": "2013-06-06"
        //     },
        //     "normalizedInput": {
        //      "line1": "1263 Pacific Ave",
        //      "city": "Kansas City",
        //      "state": "KS",
        //      "zip": "66102"
        //     },
        //     "pollingLocations": [
        //      {
        //       "address": {
        //        "locationName": "National Guard Armory",
        //        "line1": "100 S 20th St",
        //        "line2": "",
        //        "line3": "",
        //        "city": "Kansas City",
        //        "state": "KS",
        //        "zip": "66102 "
        //       }
        //      }
        //     ],
        //     "contests": [
        //      {
        //       "type": "General",
        //       "office": "Attorney"
        //      },
        //      {
        //       "type": "General",
        //       "office": "Sheriff"
        //      },
        //      {
        //       "type": "General",
        //       "office": "Kansas Representative 32",
        //       "district": {
        //        "name": "Kansas Representative 32",
        //        "scope": "stateLower",
        //        "id": "32"
        //       },
        //       "sources": [
        //        {
        //         "name": "Voting Information Project",
        //         "official": true
        //        }
        //       ]
        //      },
        //      {
        //       "type": "General",
        //       "office": "Governor/Lt. Governor",
        //       "candidates": [
        //        {
        //         "name": "Andrew P.  Gray",
        //         "party": "Libertarian",
        //         "email": "chair@lpks.org"
        //        },
        //        {
        //         "name": "Kenneth (ken) W. Cannon",
        //         "party": "Reform"
        //        },
        //        {
        //         "name": "Tom Holland",
        //         "party": "Democratic",
        //         "candidateUrl": "www.tomhollandforkansas.com",
        //         "email": "info@tomhollandforkansas.com"
        //        },
        //        {
        //         "name": "Sam Brownback",
        //         "party": "Republican",
        //         "candidateUrl": "www.brownbackforkansas.com",
        //         "email": "media@brownback.com"
        //        }
        //       ]
        //      },
        //      {
        //       "type": "General",
        //       "office": "KCKCC Member AL Brd of Trustee"
        //      },
        //      {
        //       "type": "General",
        //       "office": "Secretary of State",
        //       "candidates": [
        //        {
        //         "name": "Chris Biggs",
        //         "party": "Democratic"
        //        },
        //        {
        //         "name": "Kris Kobach",
        //         "party": "Republican"
        //        },
        //        {
        //         "name": "Phillip Horatio Lucas",
        //         "party": "Libertarian"
        //        },
        //        {
        //         "name": "Derek Langseth",
        //         "party": "Reform"
        //        }
        //       ]
        //      },
        //      {
        //       "type": "General",
        //       "office": "U.S. Senate",
        //       "district": {
        //        "name": "U.S. Senate",
        //        "scope": "statewide",
        //        "id": "5"
        //       },
        //       "candidates": [
        //        {
        //         "name": "Lisa Johnston",
        //         "party": "Democratic",
        //         "candidateUrl": "www.lisaforkansas.com",
        //         "phone": "913-662-1457",
        //         "email": "lisa@lisaforkansas.com"
        //        },
        //        {
        //         "name": "Jerry Moran",
        //         "party": "Republican"
        //        },
        //        {
        //         "name": "Michael Wm. Dann",
        //         "party": "Libertarian"
        //        },
        //        {
        //         "name": "Joseph (joe) K. Bellis",
        //         "party": "Reform"
        //        }
        //       ],
        //       "sources": [
        //        {
        //         "name": "Voting Information Project",
        //         "official": true
        //        }
        //       ]
        //      },
        //      {
        //       "type": "General",
        //       "office": "BD of Public Utilities 2"
        //      },
        //      {
        //       "type": "General",
        //       "office": "Attorney General",
        //       "candidates": [
        //        {
        //         "name": "Steve Six",
        //         "party": "Democratic"
        //        },
        //        {
        //         "name": "Derek Schmidt",
        //         "party": "Republican"
        //        },
        //        {
        //         "name": "Dennis Hawver",
        //         "party": "Libertarian"
        //        }
        //       ]
        //      },
        //      {
        //       "type": "General",
        //       "office": "U.S. Representative 3"
        //      },
        //      {
        //       "type": "General",
        //       "office": "Governor/Lt. Governor",
        //       "district": {
        //        "name": "Governor/Lt. Governor",
        //        "scope": "statewide",
        //        "id": "1"
        //       },
        //       "candidates": [
        //        {
        //         "name": "Andrew P.  Gray",
        //         "party": "Libertarian",
        //         "email": "chair@lpks.org"
        //        },
        //        {
        //         "name": "Kenneth (ken) W. Cannon",
        //         "party": "Reform"
        //        },
        //        {
        //         "name": "Tom Holland",
        //         "party": "Democratic",
        //         "candidateUrl": "www.tomhollandforkansas.com",
        //         "email": "info@tomhollandforkansas.com"
        //        },
        //        {
        //         "name": "Sam Brownback",
        //         "party": "Republican",
        //         "candidateUrl": "www.brownbackforkansas.com",
        //         "email": "media@brownback.com"
        //        }
        //       ],
        //       "sources": [
        //        {
        //         "name": "Voting Information Project",
        //         "official": true
        //        }
        //       ]
        //      },
        //      {
        //       "type": "General",
        //       "office": "Commissioner-At-Large 2"
        //      },
        //      {
        //       "type": "General",
        //       "office": "Kansas Senate 6"
        //      },
        //      {
        //       "type": "General",
        //       "office": "Clerk"
        //      },
        //      {
        //       "type": "General",
        //       "office": "President / Vice President"
        //      },
        //      {
        //       "type": "General",
        //       "office": "Register of Deeds"
        //      },
        //      {
        //       "type": "General",
        //       "office": "BD of Public Utilities (AL)"
        //      },
        //      {
        //       "type": "General",
        //       "office": "Commissioner 2"
        //      },
        //      {
        //       "type": "General",
        //       "office": "USD 500"
        //      },
        //      {
        //       "type": "General",
        //       "office": "State Board of Education 1"
        //      },
        //      {
        //       "type": "General",
        //       "office": "Treasurer"
        //      }
        //     ],
        //     "state": [
        //      {
        //       "name": "State of Kansas",
        //       "electionAdministrationBody": {
        //        "name": "Kansas",
        //        "electionOfficials": [
        //         {
        //          "name": "Brad Bryant",
        //          "title": "Election Director",
        //          "officePhoneNumber": "785-296-4561",
        //          "emailAddress": "cclark@essvote.com"
        //         }
        //        ]
        //       },
        //       "local_jurisdiction": {
        //        "name": "Wyandotte",
        //        "electionAdministrationBody": {
        //         "name": "Wyandotte",
        //         "electionInfoUrl": "http://www.wycokck.org/election",
        //         "electionOfficials": [
        //          {
        //           "name": "Bruce Newby",
        //           "title": "Election Commissioner",
        //           "officePhoneNumber": "(913) 573-8500",
        //           "emailAddress": "hbbrooks@essvote.com"
        //          }
        //         ]
        //        },
        //        "sources": [
        //         {
        //          "name": "Voting Information Project",
        //          "official": true
        //         }
        //        ]
        //       },
        //       "sources": [
        //        {
        //         "name": "Voting Information Project",
        //         "official": true
        //        }
        //       ]
        //      }
        //     ]
        //    };
        //    const stateInfo = info.state[0];

        return (
            <>
            <div className="voter-info">
                <div className="user-address">
                    <h2>Elections and Voting Information for:</h2>
                    <p>{info.normalizedInput.line1}, {info.normalizedInput.city}, {info.normalizedInput.state} {info.normalizedInput.zip}</p>
                </div>
                <div className="election">
                    <h2>Election</h2>
                    <p>Name: {info.election.name}</p>
                    <p>Date: {info.election.electionDay}</p>
                </div>

                {/* if polling locations data exists */}
                { info.pollingLocations ? 
                    <div className="polling-locations">
                        <h2>Polling Locations</h2>
                        {info.pollingLocations.map( (location, idx) => {
                            const address = location.address || "n/a"
                            return (
                                <div className="polling-location" key={idx}>
                                    <h3>{address.locationName}</h3>
                                    <p>Address: {address.line1} {address.line2} {address.line3}, {address.city}, {address.state} {address.zip}</p>
                                    <p>Notes: {location.notes || "n/a"}</p>
                                    <p>Polling Hours: {location.pollingHours || "n/a"}</p>
                                </div>
                            )
                        })}
                    </div>
                    : null }

                {/* if contests data exists */}
                { info.contests ? 
                    <div className="contests">
                        <h2>Contests</h2>
                        {info.contests.map( (contest, idx) => {
                            return(
                                <div className="contest" key={idx}>
                                    <h3>Type: {contest.type}, Office: {contest.office}</h3>
                                    { contest.candidates ? 
                                        <div className="candidates">
                                            <h4>Candidates</h4>
                                            {contest.candidates.map( (candidate, idx) => {
                                                return(
                                                    <div className="candidate" key={idx}>
                                                        <h5>{candidate.name}</h5>
                                                        <p>Party: {candidate.party || "n/a"}</p>
                                                        <p>Phone: {candidate.phone || "n/a"}</p>
                                                        <p>Email: {candidate.email || "n/a"}</p>
                                                        { candidate.candidateUrl ? 
                                                            <a href={candidate.candidateUrl}>Link to Candidate's Website</a>
                                                            : null }
                                                    </div>
                                                )
                                            })}
                                        </div>
                                        : null }
                                </div>
                            )
                        })}
                    </div>
                    : null }
                
                {/* Election Administration Info */}
                <div className="election-administration-info">
                    <h2>Election Administration Information</h2>

                    {/* State Election Administration Info */}
                    { stateInfo.electionAdministrationBody ? 
                        <div className="state-election-administration-body">
                            <h3>{stateInfo.name} Election Administration Body</h3>
                            <h4>{stateInfo.electionAdministrationBody.name}</h4>
                            <h4>
                                { stateInfo.electionAdministrationBody.electionInfoUrl ? 
                                    <a href={stateInfo.electionAdministrationBody.electionInfoUrl}>Link to State Election Info Website</a>
                                    : null }
                            </h4>
                            <h4>
                                { stateInfo.electionAdministrationBody.ballotInfoUrl ? 
                                    <a href={stateInfo.electionAdministrationBody.ballotInfoUrl}>Link to State Ballot Info Website</a>
                                    : null }
                            </h4>
                            <h4>
                                { stateInfo.electionAdministrationBody.votingLocationFinderUrl ? 
                                    <a href={stateInfo.electionAdministrationBody.votingLocationFinderUrl}>Link to State Voting Location Finder</a>
                                    : null }
                            </h4>
                            <h4>
                                { stateInfo.electionAdministrationBody.physicalAddress ? 
                                    <div>
                                        <p>Physical Address: {stateInfo.electionAdministrationBody.physicalAddress.line1}, {stateInfo.electionAdministrationBody.physicalAddress.city}, {stateInfo.electionAdministrationBody.physicalAddress.state} {stateInfo.electionAdministrationBody.physicalAddress.zip}</p>
                                    </div>
                                    : null }
                            </h4>
                            <p>Hours of Operation: {stateInfo.electionAdministrationBody.hoursOfOperation || "n/a"}</p>
                            <h4>
                            { stateInfo.electionAdministrationBody.correspondenceAddress ? 
                                    <p>Correspondence Address: {stateInfo.electionAdministrationBody.correspondenceAddress.line1}, {stateInfo.electionAdministrationBody.correspondenceAddress.city}, {stateInfo.electionAdministrationBody.correspondenceAddress.state} {stateInfo.electionAdministrationBody.correspondenceAddress.zip}</p>
                                : null }
                            </h4>
                            { stateInfo.electionAdministrationBody.electionOfficials ? 
                                <div className="state-election-administration-body-officials-list">
                                    <h4>State Election Administration Body Officials</h4>
                                    { stateInfo.electionAdministrationBody.electionOfficials.map( (official, idx) => {
                                        return (
                                            <div className="state-election-administration-body-official" key={idx}>
                                                <h5>Name: {official.name || "n/a"}</h5>
                                                <p>Title: {official.title || "n/a"}</p>
                                                <p>Office Phone: {official.officePhoneNumber || "n/a"}</p>
                                                <p>Email: {official.emailAddress || "n/a"}</p>
                                            </div>
                                        )})
                                    }
                                </div>
                                : null }
                        </div>
                        : null }

                    {/* Local Election Administration Info */}
                    { stateInfo.local_jurisdiction ? 
                        <div className="local-election-administration-body">
                            <h3>{stateInfo.local_jurisdiction.name} Election Administration Body</h3>
                            { stateInfo.local_jurisdiction.electionAdministrationBody ? 
                                <div className="local-election-administration-body-info">
                                    <h4>{stateInfo.local_jurisdiction.electionAdministrationBody.name}</h4>
                                    <h4>
                                        { stateInfo.local_jurisdiction.electionAdministrationBody.electionInfoUrl ? 
                                            <a href={stateInfo.local_jurisdiction.electionAdministrationBody.electionInfoUrl}>Link to Local Election Info Website</a>
                                            : null }
                                    </h4>
                                    <h4>
                                        { stateInfo.local_jurisdiction.electionAdministrationBody.ballotInfoUrl ? 
                                            <a href={stateInfo.local_jurisdiction.electionAdministrationBody.ballotInfoUrl}>Link to Local Ballot Info Website</a>
                                            : null }
                                    </h4>
                                    <h4>
                                        { stateInfo.local_jurisdiction.electionAdministrationBody.votingLocationFinderUrl ? 
                                            <a href={stateInfo.local_jurisdiction.electionAdministrationBody.votingLocationFinderUrl}>Link to Local Voting Location Finder</a>
                                            : null }
                                    </h4>
                                    <h4>
                                        { stateInfo.local_jurisdiction.electionAdministrationBody.physicalAddress ? 
                                            <div>
                                                <p>Physical Address: {stateInfo.local_jurisdiction.electionAdministrationBody.physicalAddress.line1}, {stateInfo.local_jurisdiction.electionAdministrationBody.physicalAddress.city}, {stateInfo.local_jurisdiction.electionAdministrationBody.physicalAddress.state} {stateInfo.local_jurisdiction.electionAdministrationBody.physicalAddress.zip}</p>
                                            </div>
                                            : null }
                                    </h4>
                                    <p>Hours of Operation: {stateInfo.local_jurisdiction.electionAdministrationBody.hoursOfOperation || "n/a"}</p>
                                    <h4>
                                        { stateInfo.local_jurisdiction.electionAdministrationBody.correspondenceAddress ? 
                                                <p>Correspondence Address: {stateInfo.local_jurisdiction.electionAdministrationBody.correspondenceAddress.line1}, {stateInfo.local_jurisdiction.electionAdministrationBody.correspondenceAddress.city}, {stateInfo.local_jurisdiction.electionAdministrationBody.correspondenceAddress.state} {stateInfo.local_jurisdiction.electionAdministrationBody.correspondenceAddress.zip}</p>
                                            : null }
                                    </h4>
                                    { stateInfo.local_jurisdiction.electionAdministrationBody.electionOfficials ? 
                                        <div className="local-election-administration-body-officials-list">
                                            <h4>Local Election Administration Body Officials</h4>
                                            {stateInfo.local_jurisdiction.electionAdministrationBody.electionOfficials.map( (official, idx) => {
                                                return (
                                                    <div className="local-election-administration-body-official" key={idx}>
                                                        <h5>Name: {official.name || "n/a"}</h5>
                                                        <p>Title: {official.title || "n/a"}</p>
                                                        <p>Office Phone: {official.officePhoneNumber || "n/a"}</p>
                                                        <p>Email: {official.emailAddress || "n/a"}</p>
                                                    </div>
                                                )})
                                            }
                                        </div>
                                        : null }
                                </div>
                                : null }
                        </div>
                        : null}
                </div>
            </div>
            <div className="map-container"><MapContainer info={this.props}/></div>
            </>
        )
    }
}

export default VoterInfo;