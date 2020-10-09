import { connect } from 'react-redux';
import { fetchElections, getVoterInfo } from '../../actions/election_actions';
import Splash from './splash';

const mapStateToProps = state => {
    return {
        elections: state.elections.elections,
        voterInfo: state.elections
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchElections: () => dispatch(fetchElections()),
        fetchVoterInfo: address => dispatch(getVoterInfo(address))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Splash);