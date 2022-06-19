import React from "react";
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

function SeatPicker() {
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
            lat: -27.590824,
            lng: -48.551252
        }}
        zoom={15}
      >
      </GoogleMap>
  ) : <></>}  
  </div>
  
  );
}

export default SeatPicker;
