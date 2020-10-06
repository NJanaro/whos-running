import React from 'react';
import ElectionIndexItem from '../election/election_index_item';
import VoterInfo from './voter_info';
import '../../stylesheets/components/_splash.scss';

class Splash extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            address: "",
            splash_address: false,
            election_id: null
        }
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.resetForm = this.resetForm.bind(this);
    }

    componentDidMount() {
        // debugger
        this.props.fetchElections();
    }

    handleClick(id) {
        // debugger
        this.setState({
            election_id: id,
            splash_address: true
        })
    }

    resetForm() {
        this.setState({
            address: "",
            splash_address: false,
            election_id: null
        })
    }

    handleInput(field) {
        return (e) => {
            this.setState({
                [field]: e.currentTarget.value
            })
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        const userInputAddy = [this.state.address, this.state.election_id];
        this.props.fetchVoterInfo(userInputAddy);
    }

    render() {
        let elections;
        let info;
        let bool = this.props.voterInfo.kind === "civicinfo#voterInfoResponse" ? true : false;
        if(this.props.elections) {
            elections = this.props.elections.map(election => {
                return <li key={ election.id } onClick={ () => this.handleClick(election.id) }><ElectionIndexItem election={ election } /></li>
            })
        }
        if(bool){
            // debugger
            info = <VoterInfo voterinfo={ this.props.voterInfo } />
        } 
        return (
            <>
                <div className={ bool ? "hide" : "splash-container" }>
                    <h1 className="home" onClick={ () => this.props.history.push("/") }>Who's Running</h1>
                    <div className={ this.state.splash_address ? "hide" : "splash" }>
                        <div className="splash-elections">
                            { elections }
                        </div>
                    </div>
                    <div className={ this.state.splash_address ? "search-box" : "hide" }>
                        <span className="go-back" onClick={ this.resetForm }>Go Back</span>
                        <input type="text" placeholder="Enter your address" onChange={ this.handleInput('address') }></input>
                        <button type="submit" onClick={ this.handleSubmit }>Get Information</button>
                    </div>
                </div>
                <div className={ bool ? "vi-container" : "hide" }>
                    { info ? info : null }
                </div>
            </>
        )
    }
}

export default Splash;