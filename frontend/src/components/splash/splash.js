import React from 'react';

class Splash extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            address: ""
        }
        this.handleInput = this.handleInput.bind(this);
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

    }

    render() {
        return (
            <div className="center-splash">
                <h1>Who's Running?</h1>
                <div className="splash-elections">
                    
                </div>
                {/* <div className="search-box">
                    <input type="text" placeholder="Enter your address" onChange={ this.handleInput }></input>
                    <button type="submit">Get Information</button>
                </div> */}
            </div>
        )
    }
}

export default Splash;