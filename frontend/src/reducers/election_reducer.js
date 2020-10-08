import { RECEIVE_ELECTIONS, RECEIVE_REPRESENTATIVE_INFO, RECEIVE_VOTER_INFO } from '../actions/election_actions';

const electionReducer = (state = {}, action) => {
    switch(action.type) {
        case RECEIVE_ELECTIONS:
            return action.elections;
        case RECEIVE_VOTER_INFO:
            return action.voterInfo
        case RECEIVE_REPRESENTATIVE_INFO:
            return action.representativeInfo
        default:
            return state;
    }
}

export default electionReducer;