import React from "react";
import "leaflet/dist/leaflet.css";
import Map from "../../ui/dashboard/mapGeoserver/Map";
import dynamic from "next/dynamic";

const DynamicMap = dynamic(
  () => import("../../ui/dashboard/mapGeoserver/Map"),
  { ssr: false }
);

const Geoserver = () => {
  return <DynamicMap />;
};

export default Geoserver;
