import React from "react";
import { useRef, useEffect } from "react";
import "./Map.css";

const Map = (props) => {
  const mapRef = useRef();
  useEffect(() => {
    mapboxGl.accessToken =
      "pk.eyJ1IjoibWJsYWtlODciLCJhIjoiY2xkazN4YmhjMDU3ejN6cXgweW05MGxwaCJ9.8WgQ2ELZnLB_97PNuVM-qg";
    const map = new mapboxGl.Map({
      container: mapRef.current,
      style: "mapbox://styles/mapbox/streets-v11",
    });
  }, []);
  return (
    <div
      ref={mapRef}
      className={`map ${props.className}`}
      style={props.style}
    ></div>
  );
};

export default Map;
