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
    }

    componentDidMount() {
        // debugger
        this.props.fetchElections();
    }

    handleClick(id) {
        this.setState({
            election_id: id
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
        const userInputAddy = [this.state.address, 2000];
        this.props.fetchVoterInfo(userInputAddy);
    }

    render() {
        let elections;
        let info;
        let bool = this.props.voterInfo.kind === "civicinfo#voterInfoResponse" ? true : false;
        if(this.props.elections) {
            elections = this.props.elections.map(election => {
                return <ElectionIndexItem onClick={ () => this.handleClick(election.id) } key={ election.id } election={ election } />
            })
        }
        if(bool){
            // debugger
            info = <VoterInfo voterinfo={ this.props.voterInfo } />
        } 
        return (
            <>
                <div className={ bool ? "hide" : "splash-container" }>
                    <div className={ this.state.splash_address ? "hide" : "splash" }>
                        <h1>Who's Running</h1>
                        <div className="splash-elections">
                            { elections }
                        </div>
                        <div className={ this.state.splash_address ? "search-box" : "hide" }>
                            <input type="text" placeholder="Enter your address" onChange={ this.handleInput('address') }></input>
                            <button type="submit" onClick={ this.handleSubmit }>Get Information</button>
                        </div>
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