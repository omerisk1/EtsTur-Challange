import React from "react";
import { GoogleMap, useJsApiLoader,Marker } from '@react-google-maps/api';

function Maps({lat,lng}) {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyCr1VKCITf-iH-q5bPrawEJacfeglBdFf0",
  });
  
  
  return (
  <div className="map">  
    {isLoaded ? (
      <GoogleMap
        mapContainerStyle={{width:"400px", height:"400px"}}
        center={{
            lat: parseInt(lat),
            lng: parseInt(lat),
        }}
        zoom={14}
      >
        <Marker position={{ lat: parseInt(lat), lng: parseInt(lat) }}></Marker>
      </GoogleMap>
  ) : <></>}  
  </div>
  
  );
}

export default Maps;
