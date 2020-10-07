import React from 'react';

class RepresentativesIndexItem extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        // debugger
        // 1660 Topping Ave Bronx NY 10457
        return (
            <>
                <div className="official-info">
                    <li>{ this.props.official.name }</li>
                    <li>{ this.props.official.party }</li>
                    <li>{ this.props.name ? this.props.name : "" } </li>
                </div>
                <div className="address-box">
                    <li>{ this.props.official.address ? this.props.official.address[0].line1 : ""}</li>
                    <li>{ this.props.official.address ? this.props.official.address[0].line2 : ""}</li>
                    <li>{ this.props.official.address ? this.props.official.address[0].city + ', ' + this.props.official.address[0].state : ""}</li>
                    <li>{ this.props.official.address ? this.props.official.address[0].zip : ""}</li>
                </div>
                <div className="contact-info">
                    <li>{ this.props.official.emails ? this.props.official.emails.map(email => email) : "" }</li>
                    <li>{ this.props.official.phones ? this.props.official.phones.map(number => number) : "" }</li>
                    <a href={`${ this.props.official.urls ? this.props.official.urls.map(url => url) : "#"}`}>Website</a>
                </div>
            </>
        )
    }
}

export default RepresentativesIndexItem;