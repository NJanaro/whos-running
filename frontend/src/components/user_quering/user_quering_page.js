import React from 'react';
import RepresentativesIndex from './representatives_index';
import '../../stylesheets/components/_representatives.scss';

class UserQuerying extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            address: "",
            levels: "administrativeArea1",
            roles: "deputyHeadOfGovernment"
        }
        this.handleChoice = this.handleChoice.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const arr = [ this.state.address, this.state.levels, this.state.roles]
        // debugger
        this.props.getRepInfo(arr);
    }

    handleChoice(field) {
        return(e) => {
            this.setState({
                [field]: e.target.value
            })
        }
    }

    render() {
        return (
            <div className="main-content">
                <section className="inner-content">
                    <div className="instructions">
                        <div>
                            <span>Get information on your representatives by your address!</span>
                            <h2>Level of Administration</h2>
                            <p><b>Administrative Area 1 -</b> indicates a first-order civil entity below the country level. Within the United States, these administrative levels are states.</p>
                            <p><b>Administrative Area 2 -</b> indicates a second-order civil entity below the country level. Within the United States, these administrative levels are counties.</p>
                            <p><b>Country -</b> indicates the National-level governments, such as the US Federal Government.</p>
                            <p><b>Locality -</b> indicates an incorporated city or town political entity.</p>
                        </div>
                        <div>
                            <h2>Role of Administration</h2>
                            <p><b>Deputy Head of Government -</b> indicates the officer responsible for assuming the head of government role in the event of the death or incapacity of the elected head of government. 
                                    In the US, this is the Vice President. This office may have other duties as well.</p>
                            <p><b>Head of Government -</b> indicates The chief executive officer of a government. 
                                    In the US, this is the President; in other countries, it is often the Prime Minister. 
                                    At lower levels this may be a governor or mayor.</p>
                            <p><b>Head of State -</b> indicates The chief public representative of a government. The head of state of a country is usually called the President.</p>
                            <p><b>Legislator Lower Body -</b> A member of the lower body of a bicameral legislature. 
                                    A bicameral legislature is one where two seperate houses, sections, or chambers make up the body. </p>
                            <p><b>Legislator Upper Body -</b> A member of the upper body of a bicameral legislature, or the only body of a unicameral legislature. 
                                    A bicameral legislature is one where two seperate houses, sections, or chambers make up the body.
                                    A unicameral legislature is one where there is one house, section or chamber. </p>
                        </div>
                    </div>
                    <form onSubmit={ this.handleSubmit }>
                        <input type="text" placeholder="Enter your address" onChange={ this.handleChoice('address') }/>
                        <label>Level of Administration
                            <select value={ this.state.levels } onChange={ this.handleChoice('levels') }>
                                <option value=" "></option>
                                <option value="administrativeArea1">Administrative Area 1</option>
                                <option value="administrativeArea2">Administrative Area 2</option>
                                <option value="country">Country</option>
                                <option value="locality">Locality</option>
                            </select>
                        </label>
                        <label>Role of Administration
                            <select value={ this.state.roles } onChange={ this.handleChoice('roles') }>
                                <option value=" "></option>
                                <option value="deputyHeadOfGovernment">Deputy Head of Government</option>
                                <option value="headOfGovernment">Head of Government</option>
                                <option value="headOfState">Head of State</option>
                                <option value="legislatorLowerBody">Legislator Lower Body</option>
                                <option value="legislatorUpperBody">Legislator Upper Body</option>
                            </select>
                        </label>
                        <button type="submit">Get Information</button>
                    </form>
                </section>
                { this.props.repsInfo.kind ? <section className="representativesInfo">
                <RepresentativesIndex repsInfo={ this.props.repsInfo }/>
                </section> : null }
            </div>
        )
    }
}

export default UserQuerying;