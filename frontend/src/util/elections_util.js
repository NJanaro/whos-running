import axios from 'axios';
import Key from '../config/keys_dev.js';

export const getElections = () => {
    return axios.get(`https://www.googleapis.com/civicinfo/v2/elections?key=AIzaSyBtb748nfMJgTST6J-2WoOjLvadaRllRh8`)
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
