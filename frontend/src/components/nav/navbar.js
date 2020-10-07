import React from 'react';
import { Link } from 'react-router-dom'

class NavBar extends React.Component {
    render() {
        return (
            <div className="navbar">
                <Link to='/' id="splash-link">
                    <h1>Home</h1>
                </Link>
            </div>
        )
    }
}

export default NavBar;