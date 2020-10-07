import { connect } from 'react-redux';
import { getRepresentativeInfo } from '../../actions/election_actions';
import UserQuerying from './user_quering_page';

const mapStateToProps = state => {
    return {
        repsInfo: state.elections
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getRepInfo: query => dispatch(getRepresentativeInfo(query))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserQuerying);