import { RECEIVE_ELECTIONS } from '../actions/election_actions';

const electionReducer = (state = {}, action) => {
    switch(action.type) {
        case RECEIVE_ELECTIONS:
            return action.elections;
        default:
            return state;
    }
}

export default electionReducer;