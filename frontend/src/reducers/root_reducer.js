import { combineReducers } from 'redux';
import electionReducer from './election_reducer';

const rootReducer = combineReducers({
    elections: electionReducer
});

export default rootReducer;