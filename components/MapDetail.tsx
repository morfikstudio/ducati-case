"use client"

import {
  Map,
  MapMarker,
  MapPopup,
  MapTileLayer,
  MapZoomControl,
} from "@/components/ui/map"

function MapDetail({
  center,
  popupContent,
}: {
  center: [number, number]
  popupContent?: string
}) {
  return (
    <Map center={center} zoom={16}>
      <MapTileLayer />
      <MapZoomControl />
      <MapMarker position={center}>
        {popupContent && <MapPopup>{popupContent}</MapPopup>}
      </MapMarker>
    </Map>
  )
}

export default MapDetail
