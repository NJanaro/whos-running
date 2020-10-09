import React from 'react';
import '../../stylesheets/components/_nav.scss';
import vote from '../../img/bigvote.png';


class Navbar extends React.Component {
    // constructor(props) {
    //     super(props)

    // }

    render() {
        return (
          <>
            <div className="navbar">
              <div className="nav-left">
                <li
                  className="home-btn"
                  onClick={() => this.props.history.push("/")}
                >
                  Home
                </li>
                <li
                  className="representatives-btn"
                  onClick={() => this.props.history.push("/representatives")}
                >
                  Representatives
                </li>
              </div>
              <div className="nav-right">
                <img id="nav-vote" src={vote} alt="vote-logo"></img>
              </div>
            </div>
          </>
        );
    }
}

export default Navbar;