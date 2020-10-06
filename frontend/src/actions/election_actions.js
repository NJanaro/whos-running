import * as ElectionsApiUtil from '../util/elections_util';

export const RECEIVE_ELECTIONS = "RECEIVE_ELECTIONS";
export const RECEIVE_ELECTION_ERRORS = "RECEIVE_ELECTION_ERRORS";
export const RECEIVE_VOTER_INFO = "RECEIVE_VOTER_INFO";

const receiveElections = elections => {
    return {
        type: RECEIVE_ELECTIONS,
        elections
    }
}

const receiveVoterInfo = voterInfo => {
    return {
        type: RECEIVE_VOTER_INFO,
        voterInfo
    }
}

const receiveElectionErrors = errors => {
    return {
        type: RECEIVE_ELECTION_ERRORS,
        errors
    }
}

export const fetchElections = () => dispatch => {
    return ElectionsApiUtil.getElections().then(elections => {
        dispatch(receiveElections(elections.data))
    }, errors => {
        dispatch(receiveElectionErrors(errors))
    })
}

export const getVoterInfo = address => dispatch => {
    debugger
    return ElectionsApiUtil.getVoterInfo(address).then(voterInfo => {
        dispatch(receiveVoterInfo(voterInfo.data))
    }, errors => {
        receiveElectionErrors(errors)
    })
}