import React from "react";
import {
  Circle,
  FeatureGroup,
  LayerGroup,
  LayersControl,
  MapContainer,
  Marker,
  Popup,
  Rectangle,
  TileLayer,
  useMap,
  GeoJSON,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-control-geocoder/dist/Control.Geocoder.css";
import "leaflet-control-geocoder/dist/Control.Geocoder.js";
import indonesia from "../data/indonesia.json";

const LeafletControl = () => {
  const map = useMap();

  return (
    <LayersControl position="topright">
      <LayersControl.Overlay checked name="Indonesia GeoJSON">
        <GeoJSON data={indonesia} />
      </LayersControl.Overlay>
    </LayersControl>
  );
};

export default LeafletControl;
