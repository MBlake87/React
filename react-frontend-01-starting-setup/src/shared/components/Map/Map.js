import React, { useRef, useEffect } from "react";
import mapboxgl from "mapbox-gl";

import "./Map.css";

const Map = (props) => {
  const mapRef = useRef();
  // Center should be array and lng first => [lng, lat]
  const { center, zoom } = props;

  const APIKEY = "ADD YOUR TOKEN FROM Mapbox site";

  useEffect(() => {
    mapboxgl.accessToken =
      "pk.eyJ1IjoibWJsYWtlODciLCJhIjoiY2xtNXc5ZnFmNHBwajNkcHZzMXRvMDhueiJ9.SuKggDV0VSSN8db2J6chfA";
    const map = new mapboxgl.Map({
      container: mapRef.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: center,
      zoom: zoom,
    });

    new mapboxgl.Marker().setLngLat(center).addTo(map);

    // new mapboxgl.Marker({ position: center, map: map });
  }, [center, zoom]);

  return (
    <div
      ref={mapRef}
      // className={`map ${props.className}`}
      style={props.style}
    ></div>
  );
};

export default Map;
