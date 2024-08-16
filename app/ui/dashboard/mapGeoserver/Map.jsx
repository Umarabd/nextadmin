"use client";
import React, { useState } from "react";
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
  GeoJSON,
  ScaleControl,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { WMSTileLayer } from "react-leaflet/WMSTileLayer";
import "leaflet-control-geocoder/dist/Control.Geocoder.css";
import "leaflet-control-geocoder/dist/Control.Geocoder.js";

import Legend from "./component/Legend";
import LeafletControl2 from "./component/LeafletControl2";
import LeafletControl from "./component/LeafletControl";
import $ from "jquery";
const position = [-6.1753991, 106.8271095];

const Map = () => {
  return (
    <div>
      <MapContainer
        center={position}
        zoom={6}
        scrollWheelZoom={true}
        style={{ height: "80vh" }}
        attributionControl={false}
      >
        <Legend />
        <LeafletControl2 />
        {/* <LeafletControl position="bottomright" /> */}
        <ScaleControl position="bottomright" />
      </MapContainer>
    </div>
  );
};

export default Map;
