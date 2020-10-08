import axios from 'axios';
import Key from '../config/key.js';

export const getElections = () => {
    return axios.get(`https://www.googleapis.com/civicinfo/v2/elections?key=${Key.googleAPI}`)
}

export const getVoterInfo = address => {
    return axios({
        method: 'get',
        url: 'https://www.googleapis.com/civicinfo/v2/voterinfo',
        params: {
            key: `${Key.googleAPI}`,
            address: address[0],
            electionId: address[1]
        }
    })
}

export const getRepresentativeInfo = query => {
    // debugger
    if(query[1] === " " && query[2] !== " ") {
        return axios({
            method: 'get',
            url: 'https://www.googleapis.com/civicinfo/v2/representatives',
            params: { 
                key: `${Key.googleAPI}`,
                address: query[0],
                roles: query[2] 
            }
        })
    } else if(query[2] === " " && query[1] !== " ") {
        return axios({
            method: 'get',
            url: 'https://www.googleapis.com/civicinfo/v2/representatives',
            params: { 
                key: `${Key.googleAPI}`,
                address: query[0],
                levels: query[1] 
            }
        })
    } else if(query[1] === " " && query[2] === " ") {
        // debugger
        return axios({
            method: 'get',
            url: 'https://www.googleapis.com/civicinfo/v2/representatives',
            params: { 
                key: `${Key.googleAPI}`,
                address: query[0] 
            }
        })
    } else {
        return axios({
            method: 'get',
            url: 'https://www.googleapis.com/civicinfo/v2/representatives',
            params: { 
                key: `${Key.googleAPI}`,
                address: query[0],
                levels: query[1],
                roles: query[2] 
            }
        })
    }
}
