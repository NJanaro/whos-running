import React from 'react';
import '../../stylesheets/components/_nav.scss';

class Navbar extends React.Component {
    // constructor(props) {
    //     super(props)

    // }

    render() {
        return (
            <section className="navbar">
                <li className="home-btn" onClick={ () => this.props.history.push("/") }>Home</li>
            </section>
        )
    }
}

export default Navbar;