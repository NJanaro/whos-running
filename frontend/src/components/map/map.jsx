import React from "react";
import ReactDOM from "react-dom";
import { withRouter } from "react-router-dom";
import GoogleMapReact from "google-map-react";
import Key from "../../config/key";
import "../../stylesheets/components/map.scss";
import Geocode from "react-geocode";



Geocode.setRegion("us");
Geocode.setApiKey(`${Key.googleAPI}`);




const MapComponent = ({ text }) => <div>dot</div>;

export class MapContainer extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props);
    this.directions = {}
    this.state = {
      startEnd: [],
    };
    this.fetchCoords = this.fetchCoords.bind(this);
  }

  fetchCoords(location) {
    Geocode.fromAddress(location).then(
      (response) => {
        const { lat, lng } = response.results[0].geometry.location;

        let newCoor = Array.prototype.concat(this.state.startEnd, [{lat, lng}])
        console.log(newCoor)
        this.setState({
          startEnd: newCoor,
        });
        console.log(this.state.startEnd);
      },
      (error) => {
        console.error(error);
      }
    );
  }

  componentDidMount() {
      console.log(
        this.props.info.voterinfo.normalizedInput.line1 +
          " " +
          this.props.info.voterinfo.normalizedInput.city
      );
      this.fetchCoords(
        this.props.info.voterinfo.pollingLocations[0].address.line1 +
          " " +
          this.props.info.voterinfo.normalizedInput.city
      );
      this.fetchCoords(
        this.props.info.voterinfo.normalizedInput.line1 + " " +
        this.props.info.voterinfo.normalizedInput.city 
      );
  }

//   renderMarkers(map, maps) {
//     for (let i = 0; i < this.state.startEnd.length; i++) {
//         // debugger
//         let coords = this.state.startEnd[i];
//         let myLatLng = new maps.LatLng(coords.lat, coords.lng);
//         let marker = new maps.Marker({
//           position: myLatLng,
//           map,
//           title: "Hello World!",
//         });
//         // debugger
//         // return marker;
//     }
//   }

  drawRoute(map, maps) {
            const directionsRenderer = new maps.DirectionsRenderer();
            directionsRenderer.setMap(map);
            const directionsService = new maps.DirectionsService();
            let start = this.state.startEnd[0];
            let finish = this.state.startEnd[1];
            const request = {
                origin: start,
                destination: finish,
                travelMode: 'WALKING'
            }

            return directionsService.route(request, (result, status)=> {
                if (status == "OK") {
                    directionsRenderer.setDirections(result);
                }
            })
        }

  render() {
    return this.state.startEnd.length === 2 ? (
      <>
        <div id="map-view">
          <GoogleMapReact
            bootstrapURLKeys={{ key: `${Key.googleAPI}` }}
            defaultCenter={this.state.startEnd[0]}
            defaultZoom={5}
            onGoogleApiLoaded={
                ({ map, maps }) => this.drawRoute(map, maps)
                // ({ map, maps }) => this.renderMarkers(map, maps)
            }
            yesIWantToUseGoogleMapApiInternals

          >
          </GoogleMapReact>
        </div>
      </>
    ) : null;
  }
}

// info:
// voterinfo:
// contests: [{…}]
// election: {id: "2000", name: "VIP Test Election", electionDay: "2021-06-06", ocdDivisionId: "ocd-division/country:us"}
// kind: "civicinfo#voterInfoResponse"
// normalizedInput:
// city: "Brooklyn"
// line1: "110 Meserole Avenue"
// state: "NY"
// zip: "11222"
// __proto__: Object
// pollingLocations: Array(1)
// 0:
// address:
// city: "Brooklyn"
// line1: "131 Norman Avenue"
// locationName: "PS 34"
// state: "NY"
// zip: "11222"