"use client";
import createControlledLayer from "./controlledLayer";

const GroupedLayer = createControlledLayer(function addGroup(
  layersControl,
  layer,
  name,
  group
) {
  layersControl.addGroup(layer, name, group);
});

export { GroupedLayer };
