import React from 'react';

class VoterInfo extends React.Component {
    render() {
        // const info = this.props.voterinfo;

        const info = {
            "kind": "civicinfo#voterinforesponse",
            "status": "success",
            "election": {
             "id": "2000",
             "name": "VIP Test Election",
             "electionDay": "2013-06-06"
            },
            "normalizedInput": {
             "line1": "1263 Pacific Ave",
             "city": "Kansas City",
             "state": "KS",
             "zip": "66102"
            },
            "pollingLocations": [
             {
              "address": {
               "locationName": "National Guard Armory",
               "line1": "100 S 20th St",
               "line2": "",
               "line3": "",
               "city": "Kansas City",
               "state": "KS",
               "zip": "66102 "
              }
             }
            ],
            "contests": [
             {
              "type": "General",
              "office": "Attorney"
             },
             {
              "type": "General",
              "office": "Sheriff"
             },
             {
              "type": "General",
              "office": "Kansas Representative 32",
              "district": {
               "name": "Kansas Representative 32",
               "scope": "stateLower",
               "id": "32"
              },
              "sources": [
               {
                "name": "Voting Information Project",
                "official": true
               }
              ]
             },
             {
              "type": "General",
              "office": "Governor/Lt. Governor",
              "candidates": [
               {
                "name": "Andrew P.  Gray",
                "party": "Libertarian",
                "email": "chair@lpks.org"
               },
               {
                "name": "Kenneth (ken) W. Cannon",
                "party": "Reform"
               },
               {
                "name": "Tom Holland",
                "party": "Democratic",
                "candidateUrl": "www.tomhollandforkansas.com",
                "email": "info@tomhollandforkansas.com"
               },
               {
                "name": "Sam Brownback",
                "party": "Republican",
                "candidateUrl": "www.brownbackforkansas.com",
                "email": "media@brownback.com"
               }
              ]
             },
             {
              "type": "General",
              "office": "KCKCC Member AL Brd of Trustee"
             },
             {
              "type": "General",
              "office": "Secretary of State",
              "candidates": [
               {
                "name": "Chris Biggs",
                "party": "Democratic"
               },
               {
                "name": "Kris Kobach",
                "party": "Republican"
               },
               {
                "name": "Phillip Horatio Lucas",
                "party": "Libertarian"
               },
               {
                "name": "Derek Langseth",
                "party": "Reform"
               }
              ]
             },
             {
              "type": "General",
              "office": "U.S. Senate",
              "district": {
               "name": "U.S. Senate",
               "scope": "statewide",
               "id": "5"
              },
              "candidates": [
               {
                "name": "Lisa Johnston",
                "party": "Democratic",
                "candidateUrl": "www.lisaforkansas.com",
                "phone": "913-662-1457",
                "email": "lisa@lisaforkansas.com"
               },
               {
                "name": "Jerry Moran",
                "party": "Republican"
               },
               {
                "name": "Michael Wm. Dann",
                "party": "Libertarian"
               },
               {
                "name": "Joseph (joe) K. Bellis",
                "party": "Reform"
               }
              ],
              "sources": [
               {
                "name": "Voting Information Project",
                "official": true
               }
              ]
             },
             {
              "type": "General",
              "office": "BD of Public Utilities 2"
             },
             {
              "type": "General",
              "office": "Attorney General",
              "candidates": [
               {
                "name": "Steve Six",
                "party": "Democratic"
               },
               {
                "name": "Derek Schmidt",
                "party": "Republican"
               },
               {
                "name": "Dennis Hawver",
                "party": "Libertarian"
               }
              ]
             },
             {
              "type": "General",
              "office": "U.S. Representative 3"
             },
             {
              "type": "General",
              "office": "Governor/Lt. Governor",
              "district": {
               "name": "Governor/Lt. Governor",
               "scope": "statewide",
               "id": "1"
              },
              "candidates": [
               {
                "name": "Andrew P.  Gray",
                "party": "Libertarian",
                "email": "chair@lpks.org"
               },
               {
                "name": "Kenneth (ken) W. Cannon",
                "party": "Reform"
               },
               {
                "name": "Tom Holland",
                "party": "Democratic",
                "candidateUrl": "www.tomhollandforkansas.com",
                "email": "info@tomhollandforkansas.com"
               },
               {
                "name": "Sam Brownback",
                "party": "Republican",
                "candidateUrl": "www.brownbackforkansas.com",
                "email": "media@brownback.com"
               }
              ],
              "sources": [
               {
                "name": "Voting Information Project",
                "official": true
               }
              ]
             },
             {
              "type": "General",
              "office": "Commissioner-At-Large 2"
             },
             {
              "type": "General",
              "office": "Kansas Senate 6"
             },
             {
              "type": "General",
              "office": "Clerk"
             },
             {
              "type": "General",
              "office": "President / Vice President"
             },
             {
              "type": "General",
              "office": "Register of Deeds"
             },
             {
              "type": "General",
              "office": "BD of Public Utilities (AL)"
             },
             {
              "type": "General",
              "office": "Commissioner 2"
             },
             {
              "type": "General",
              "office": "USD 500"
             },
             {
              "type": "General",
              "office": "State Board of Education 1"
             },
             {
              "type": "General",
              "office": "Treasurer"
             }
            ],
            "state": [
             {
              "name": "State of Kansas",
              "electionAdministrationBody": {
               "name": "Kansas",
               "electionOfficials": [
                {
                 "name": "Brad Bryant",
                 "title": "Election Director",
                 "officePhoneNumber": "785-296-4561",
                 "emailAddress": "cclark@essvote.com"
                }
               ]
              },
              "local_jurisdiction": {
               "name": "Wyandotte",
               "electionAdministrationBody": {
                "name": "Wyandotte",
                "electionInfoUrl": "http://www.wycokck.org/election",
                "electionOfficials": [
                 {
                  "name": "Bruce Newby",
                  "title": "Election Commissioner",
                  "officePhoneNumber": "(913) 573-8500",
                  "emailAddress": "hbbrooks@essvote.com"
                 }
                ]
               },
               "sources": [
                {
                 "name": "Voting Information Project",
                 "official": true
                }
               ]
              },
              "sources": [
               {
                "name": "Voting Information Project",
                "official": true
               }
              ]
             }
            ]
           };

        return (
            <div className="voter-info">
                <div className="user-address">
                    <h6>Elections and Voting Information for:</h6>
                    <h5>{info.normalizedInput.line1}, {info.normalizedInput.city}, {info.normalizedInput.state} {info.normalizedInput.zip}</h5>
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
                        {info.pollingLocations.map( location => {
                            return (
                                <div className="polling-location">
                                    <h3>{location.address.locationName}</h3>
                                    <p>Address: {location.address.line1} {location.address.line2} {location.address.line3}, {location.address.city}, {location.address.state} {location.address.zip}</p>
                                    <p>Polling Hours: {location.pollingHours || "N/A"}</p>
                                </div>
                            )
                        })}
                    </div>
                    : null }
                {/* if contests data exists */}
                { info.contests ? 
                    <div className="contests">
                        <h2>Contests</h2>
                        {info.contests.map( contest => {
                            return(
                                <div className="contest">
                                    <h3>Type: {contest.type}, Office: {contest.office}</h3>
                                    
                                </div>
                            )
                        })}
                    </div>
                    : null}
            </div>
        )
    }
}

export default VoterInfo;