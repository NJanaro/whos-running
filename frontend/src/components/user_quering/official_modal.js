import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../../fontawesome';

class OfficialModal extends React.Component {
    constructor(props) {
        super(props);

    }
    
    componentDidMount() {
        window.twttr.widgets.load();
    }

    render() {
        const official = this.props.official;
        let tid;
        if(this.props.official.channels) {
            for(let i = 0; i < this.props.official.channels.length; i++) {
                if(official.channels[i].type === "Twitter") {
                    tid = official.channels[i].id
                }
            }
        }
        // debugger
        return (
            <div className="modal-content">
                <div className="top">
                    <div className="left">
                        { official.photoUrl ? <img src={ official.photoUrl } alt={""}/> : <h2 className="no-image">NO IMAGE</h2>}
                    </div>
                    <div className="right">
                        <h2>{ this.props.official.name }</h2>
                        <li>{ this.props.name ? this.props.name : "" } </li>
                        <li>{ this.props.official.party }</li>
                        <br />
                        <li>{ this.props.official.address ? this.props.official.address[0].line1 : ""}</li>
                        <li>{ this.props.official.address ? this.props.official.address[0].line2 : ""}</li>
                        <li>{ this.props.official.address ? this.props.official.address[0].city + ', ' + this.props.official.address[0].state : ""}</li>
                        <li>{ this.props.official.address ? this.props.official.address[0].zip : ""}</li>
                        <br />
                        <li>{ this.props.official.emails ? this.props.official.emails.map(email => email) : "" }</li>
                        <li>{ this.props.official.phones ? this.props.official.phones.map(number => number) : "" }</li>
                        { this.props.official.urls ? this.props.official.urls.map((url,idx) => {
                            return <a key={ idx } href={ url }>Website</a>
                            }) : ""
                        }
                        <div className="socials">
                            { this.props.official.channels ? this.props.official.channels.map((social, idx) => {
                                if(social.type === "Facebook"){
                                    return <a key={ idx } href={ "Facebook.com/" + social.id }><FontAwesomeIcon icon={["fab", "facebook"]}/></a>
                                } else if(social.type === "YouTube"){
                                    return <a key={ idx } href={ "Youtube.com/" + social.id }><FontAwesomeIcon icon={["fab", "youtube"]}/></a>
                                }
                            }) : ""}
                        </div>
                    </div>
                </div>
                <div className="bottom">
                <a className="twitter-timeline" data-width="300" data-height="300" href={`https://twitter.com/${tid}?ref_src=twsrc%5Etfw`}>
                </a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script> 
                </div>
            </div>
        )
    }
}

export default OfficialModal;