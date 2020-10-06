import React from 'react';
import ReactDOM from 'react-dom';
import MarkerManager from '../../utils/marker_manager';
import {withRouter} from 'react-router-dom';
import GoogleMapReact from 'google-map-react';
import Key from '../../../config/key';

const MapComponent = ({text})=> (
    <div style={{
    color: 'white', 
    background: 'grey',
    padding: '15px 10px',
    display: 'inline-flex',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '100%',
    transform: 'translate(-50%, -50%)'
    }}>

    </div>
)


class MapContainer extends React.Component {
    constructor(props){
        super(props)
        this.startPosition = {
            center: { lat: 40.727034, lng: -73.952228 },
            zoom: 13,
        }
    }



    

    render(){
        return(
            <>
            <div id="map-view">
                <GoogleMapReact
                    bootstrapURLKeys={{key: `${Key.googleAPI}`}}
                    defaultCenter={this.startPosition.center}
                    defaultZoom={this.startPosition.zoom}
                >
                <MapComponent 
                    lat={this.startPosition.center.lat}
                    lng={this.startPosition.center.lng}
                    text={'My Place'}
                    />
                </GoogleMapReact>
            </div>
            </>
        )
    }

}
  