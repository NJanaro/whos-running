import React from 'react';

class RepresentativesIndexItem extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <section className="representative-item">
                <li>{ this.props.official.address[0].line1 }</li>
                <li>{ this.props.official.address[0].line2 }</li>
                <li>{ this.props.official.address[0].city + ', ' + this.props.official.address[0].state }</li>
                <li>{ this.props.official.address[0].zip }</li>

                <li>{ this.props.official.name }</li>
                <li>{ this.props.official.party }</li>
            </section>
        )
    }
}

export default RepresentativesIndexItem;