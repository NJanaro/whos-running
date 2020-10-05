import axios from 'axios';

export const getElections = () => {
    return axios.get('https://www.googleapis.com/civicinfo/v2/elections?key=<YOUR_API_KEY>')
}