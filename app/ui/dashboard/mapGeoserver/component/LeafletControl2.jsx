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
import country from "../data/country.json";
import LayerControl from "./LeafletControl2/LayerControl";
import { GroupedLayer } from "./LeafletControl2/GroupedLayer";

const LeafletControl = () => {
  const position = [51.505, -0.09];
  const rectangle = [
    [51.49, -0.08],
    [51.5, -0.06],
  ];
  const map = useMap();

  return (
    <LayerControl position="topright">
      <GroupedLayer checked name="OpenStreetMap" group="Base Layers">
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </GroupedLayer>

      <GroupedLayer name="OpenStreetMap B&W" group="Base Layers">
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png"
        />
      </GroupedLayer>

      <GroupedLayer checked name="Indonesia GeoJSON" group="Layer Group">
        <LayerGroup>
          <GeoJSON
            data={indonesia}
            attribution="Indonesia"
            id="Indonesia GeoJSON"
          />
        </LayerGroup>
      </GroupedLayer>

      <GroupedLayer checked name="Indonesia GeoJSON" group="Layer Group">
        <LayerGroup>
          <GeoJSON data={country} attribution="Indonesia" id="Feature group" />
        </LayerGroup>
      </GroupedLayer>
    </LayerControl>
  );
};

export default LeafletControl;
