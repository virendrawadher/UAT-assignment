import React from "react"
import './App.css';
import {
    withGoogleMap,
    withScriptjs,
    GoogleMap,
    Marker,
    InfoWindow
  } from "react-google-maps";
  import {compose, withProps} from "recompose"

const API_KEY = "AIzaSyDhRn8MS-pZIRnrkgICkF0xma8Pvw-NDhc";

export const MapWrapper = compose(
    withProps({
      googleMapURL: `https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${API_KEY}&v=3.34`,
      loadingElement: <div style={{ height: `100%` }} />,
      containerElement: <div style={{ height: `100%` }} />,
      mapElement: <div style={{ height: `100%` }} /> ,
    }), 
    withScriptjs,
    withGoogleMap
  )(React.memo((props) => 
    <GoogleMap
      defaultCenter = {{
        lat: 19.075983, 
        lng: 72.877655
        }}
        defaultZoom = {11}
    >
      <Marker position = {{lat: props.mapData.Lat, lng: props.mapData.Lng}} onClick = {() => props.setSelectedMarker(props.mapData)}>
      {props.selectedMarker && <InfoWindow position = {{lat: props.selectedMarker.Lat, lng: props.selectedMarker.Lng}} onCloseClick = {() => props.setSelectedMarker(null)} style = {{display: "none"}}>
        <div>
          <table className = "maptable">
            <tr>
              <th className = "contentinsidemap">Panel Name</th>
              <td className = "contentinsidemap">{props.selectedMarker.panel_name}</td>
            </tr>
            <tr>
              <th className = "contentinsidemap">Lat</th>
              <td className = "contentinsidemap">{props.selectedMarker.Lat}</td>
            </tr>
            <tr>
              <th className = "contentinsidemap">Lng</th>
              <td className = "contentinsidemap">{props.selectedMarker.Lng}</td>
            </tr>
          </table>
        </div>
      </InfoWindow>}
      </Marker>
      <div>
        <button onClick = {props.closeMap} className = "panelButton close">X</button>
      </div>
    </GoogleMap>
  ))