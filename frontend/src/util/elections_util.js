import axios from 'axios';
import Key from '../config/keys_dev.js';

export const getElections = () => {
    return axios.get(`https://www.googleapis.com/civicinfo/v2/elections?key=${Key.googleAPI}`)
}

export const getVoterInfo = address => {
    // debugger
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