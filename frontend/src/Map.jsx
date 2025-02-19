import  { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";

// Set your Mapbox access token
mapboxgl.accessToken = "pk.eyJ1IjoiYmFkcjU0MCIsImEiOiJjbTc4OGdra3AxOGlnMnJzZ2FlY2JucWJjIn0.aMEmOVU6LDaGuJEFndOrmQ";

const Map = () => {
  const mapContainerRef = useRef(null);

  useEffect(() => {
    // Initialize the map
    const map = new mapboxgl.Map({
      container: mapContainerRef.current, // Reference to the map div
      style: "mapbox://styles/mapbox/streets-v11", // Map style
      center: [-74.5, 40], // Longitude, Latitude
      zoom: 9, // Initial zoom level
    });

    return () => map.remove(); // Cleanup on unmount
  }, []);

  return <div ref={mapContainerRef} style={{ width: "100%", height: "500px" }} />;
};

export default Map;
