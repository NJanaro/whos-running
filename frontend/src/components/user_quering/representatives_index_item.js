import React from 'react';
import OfficialModal from './official_modal';
import infoIcon from '../../img/info.png';

class RepresentativesIndexItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false
        }

        this.toggleModal = this.toggleModal.bind(this);
    }

    toggleModal() {
        const cs = this.state.modal;
        this.setState({
            modal: !cs
        })
    }

    render() {
        // debugger
        // 1660 Topping Ave Bronx NY 10457
        return (
          <>
            <span
              onClick={this.toggleModal}
              className={this.state.modal ? "close" : "hide"}
            >
              &times;
            </span>
            <div onClick={this.toggleModal} className="info-icon-box">
              <img id="info-icon" src={infoIcon} alt="info"></img>
            </div>
            <div className="official-info">
              <ul>
                <li>Name: {this.props.official.name}</li>
                <li className={this.props.official.party.slice(0, 1)}>
                  Party: {this.props.official.party}
                </li>
                <li>Position: {this.props.name ? this.props.name : ""} </li>
              </ul>
            </div>
            <div className="address-box">
              <li>
                {this.props.official.address
                  ? this.props.official.address[0].line1
                  : ""}
              </li>
              <li>
                {this.props.official.address
                  ? this.props.official.address[0].line2
                  : ""}
              </li>
              <li>
                {this.props.official.address
                  ? this.props.official.address[0].city +
                    ", " +
                    this.props.official.address[0].state
                  : ""}
              </li>
              <li>
                {this.props.official.address
                  ? this.props.official.address[0].zip
                  : ""}
              </li>
            </div>
            <div className="contact-info">
              <li>
                {this.props.official.emails
                  ? this.props.official.emails.map((email) => email)
                  : ""}
              </li>
              <li>
                {this.props.official.phones
                  ? this.props.official.phones.map((number) => number)
                  : ""}
              </li>
              {this.props.official.urls
                ? this.props.official.urls.map((url, idx) => {
                    return (
                      <a key={idx} href={url}>
                        Website
                      </a>
                    );
                  })
                : ""}
            </div>
            <section className={this.state.modal ? "modal" : "hide"}>
              <OfficialModal
                official={this.props.official}
                modal={this.state.modal}
                repsInfo={this.props.repsInfo}
                name={this.props.name}
              />
            </section>
          </>
        );
    }
}

export default RepresentativesIndexItem;