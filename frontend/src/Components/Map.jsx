import  { use, useContext, useEffect, useRef, useState } from "react";
import { createRoot } from "react-dom/client";
import mapboxgl from "mapbox-gl";
import MapPopupBody from "./MapPopupBody";
import 'mapbox-gl/dist/mapbox-gl.css';
import RestaurantContext from "../contexts/RestaurantContext";

import 'mapbox-gl/dist/mapbox-gl.css';
mapboxgl.accessToken = "pk.eyJ1IjoiYmFkcjU0MCIsImEiOiJjbTc4OGdra3AxOGlnMnJzZ2FlY2JucWJjIn0.aMEmOVU6LDaGuJEFndOrmQ";

const Map = () => {
  const [currResturantId,setCurrResturantId] = useContext(RestaurantContext)
  const [restaurants, setRestaurants] = useState([])
  const mapContainerRef = useRef(null);
  useEffect(()=> {
    fetch("/api/restaurants")
      .then(response => response.json())
      .then(data =>{console.log(data), setRestaurants(data)})
      .catch(error => console.log("Error:", error));

  },[])

  useEffect(() => {
    mapboxgl.accessToken = "pk.eyJ1IjoiYmFkcjU0MCIsImEiOiJjbTc4OGdra3AxOGlnMnJzZ2FlY2JucWJjIn0.aMEmOVU6LDaGuJEFndOrmQ";
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: "mapbox://styles/mapbox/streets-v12",
      center: [46.71008, 24.791574],
      zoom: 13,
    });

    restaurants.forEach(restaurant => {
      const popupNode = document.createElement("div");
      const popupRoot = createRoot(popupNode);
      popupRoot.render(<MapPopupBody restaurant={restaurant} callBack={()=>setCurrResturantId(restaurant.id)} />);
      new mapboxgl.Marker({color:"#F4CBDF"})
          .setLngLat([restaurant.lng, restaurant.lat])
          .setPopup(new mapboxgl.Popup().setDOMContent(popupNode))
          .addTo(map);
    })


  return () => {
    map.remove();
  };


}, [restaurants]);


  return <div ref={mapContainerRef} style={{ width: "100%", height: "75vh", transform:" translateY(40px)" }}></div>
};

export default Map;