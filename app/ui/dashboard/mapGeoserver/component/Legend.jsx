import { useEffect } from "react";
import L from "leaflet";
import "./Legend.css";
import { useMap } from "react-leaflet";
import $ from "jquery";

function Legend() {
  const map = useMap();
  function noSpace(str) {
    return str.replace(/\s/g, "");
  }

  useEffect(() => {
    if (map) {
      const legend = L.control({ position: "bottomleft" });

      map.on("layeradd", (e) => {
        console.log(e.layer.options.id);
        var lgdDiv = noSpace("#" + e.layer.options.id);
        $(lgdDiv).show();
      });
      map.on("layerremove", (e) => {
        var lgdDiv = noSpace("#" + e.layer.options.id);
        $(lgdDiv).hide();
      });

      legend.onAdd = () => {
        const div = L.DomUtil.create("div", "info legend");
        div.innerHTML =
          "<div><h2 style='text-align:center'>Legend</h2></div>" +
          "<div id= 'IndonesiaGeoJSON' > <svg width= '100' height= '100' xmlns= 'http://www.w3.org/2000/svg'> <rect width='30' height='30' x='0' y='0' style='fill:rgb(255,255,255);stroke-width:3;stroke:blue' />  </svg></div>" +
          "<div id= 'Featuregroup'  ><h4>This is the legend feature group</h4></div>" +
          "<b>Lorem ipsum dolor sit amet consectetur adipiscing</b>";
        return div;
      };
      console.log(legend);

      legend.addTo(map);
    }
  }, [map]);
  return null;
}

export default Legend;
