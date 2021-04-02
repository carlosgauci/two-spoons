// Google maps component inside the Find Us section
import React from "react"
import LocationPin from "./LocationPin"
import {
  GoogleMap,
  LoadScript,
  Marker,
  OverlayView,
} from "@react-google-maps/api"

const containerStyle = {
  width: "100%",
  height: "100%",
}

// Restaurant coords
const center = {
  lat: 35.89587711066413,
  lng: 14.464683953375353,
}

const GoogleMaps = () => {
  return (
    <LoadScript googleMapsApiKey={process.env.GATSBY_GOOGLE_MAPS_KEY}>
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={17}>
        <Marker
          position={{ lat: center.lat, lng: center.lng }}
          opacity={0.75}
        />
        <OverlayView
          position={center}
          mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
        >
          <LocationPin />
        </OverlayView>
      </GoogleMap>
    </LoadScript>
  )
}

export default GoogleMaps
