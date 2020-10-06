import axios from 'axios';
// import Key from '../../../config/key';

export const getElections = () => {
    return axios.get(`https://www.googleapis.com/civicinfo/v2/elections?key=AIzaSyBtb748nfMJgTST6J-2WoOjLvadaRllRh8`)
}

export const getVoterInfo = address => {
    return axios({
        method: 'get',
        url: 'https://www.googleapis.com/civicinfo/v2/voterinfo',
        params: {
            key: 'AIzaSyBtb748nfMJgTST6J-2WoOjLvadaRllRh8',
            address: address[0],
            electionId: address[1]
        }
    })
}