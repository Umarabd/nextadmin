/**
 *
 * LayerControl
 *
 */
"use client";
import React, { useState } from "react";
// import styled from 'styled-components';

import lodashGroupBy from "lodash.groupby";
import { LayersControlProvider } from "./layerControlContext";
import { useMapEvents } from "react-leaflet";
import { Util } from "leaflet";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Checkbox,
  FormControlLabel,
  IconButton,
  Paper,
  Typography,
} from "@mui/material";
import { ExpandMore, Layers } from "@mui/icons-material";

// Classes used by Leaflet to position controls
const POSITION_CLASSES = {
  bottomleft: "leaflet-bottom leaflet-left",
  bottomright: "leaflet-bottom leaflet-right",
  topleft: "leaflet-top leaflet-left",
  topright: "leaflet-top leaflet-right",
};

function LayerControl({ position, children }) {
  const [collapsed, setCollapsed] = useState(true);
  const [layers, setLayers] = useState([]);
  const positionClass =
    (position && POSITION_CLASSES[position]) || POSITION_CLASSES.topright;

  const map = useMapEvents({
    layerremove: () => {
      // console.log("layer removed");
    },
    layeradd: () => {
      // console.log("layer add");
    },
    overlayadd: (layer, extra) => {
      // console.log(layer, extra);
    },
  });

  const onLayerClick = (layerObj) => {
    if (map?.hasLayer(layerObj.layer)) {
      map.removeLayer(layerObj.layer);
      setLayers(
        layers.map((layer) => {
          if (layer.id === layerObj.id)
            return {
              ...layer,
              checked: false,
            };
          return layer;
        })
      );
    } else {
      map.addLayer(layerObj.layer);
      setLayers(
        layers.map((layer) => {
          if (layer.id === layerObj.id)
            return {
              ...layer,
              checked: true,
            };
          return layer;
        })
      );
    }
  };

  const onGroupAdd = (layer, name, group) => {
    setLayers((_layers) => [
      ..._layers,
      {
        layer,
        group,
        name,
        checked: map?.hasLayer(layer),
        id: Util.stamp(layer),
      },
    ]);
  };

  const groupedLayers = lodashGroupBy(layers, "group");

  // console.log(groupedLayers, "groupedLayers");
  return (
    <LayersControlProvider
      value={{
        layers,
        addGroup: onGroupAdd,
      }}
    >
      <div className={positionClass}>
        <div className="leaflet-control leaflet-bar">
          {
            <Paper
              onMouseEnter={() => setCollapsed(false)}
              onMouseLeave={() => setCollapsed(true)}
              // className={classes.container}
            >
              {collapsed && (
                <IconButton>
                  <Layers fontSize="default" />
                </IconButton>
              )}
              {!collapsed &&
                Object.keys(groupedLayers).map((section, index) => (
                  <Accordion key={`${section} ${index}`}>
                    <AccordionSummary
                      expandIcon={<ExpandMore />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <Typography>{section}</Typography>
                    </AccordionSummary>
                    {groupedLayers[section]?.map((layerObj) => (
                      <AccordionDetails>
                        <FormControlLabel
                          control={
                            <Checkbox
                              checked={layerObj.checked}
                              onChange={() => onLayerClick(layerObj)}
                              name="checkedB"
                              color="primary"
                            />
                          }
                          label={layerObj.name}
                        />
                      </AccordionDetails>
                    ))}
                  </Accordion>
                ))}
            </Paper>
          }
        </div>
        {children}
      </div>
    </LayersControlProvider>
  );
}
export default LayerControl;
