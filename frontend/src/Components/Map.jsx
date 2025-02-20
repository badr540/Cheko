import  { use, useEffect, useRef, useState } from "react";
import * as ReactDOMServer from 'react-dom/server';
import mapboxgl from "mapbox-gl";
import MapPopupBody from "./MapPopupBody";
import restaurantData from "../assets/restaurantData";
import 'mapbox-gl/dist/mapbox-gl.css';

import 'mapbox-gl/dist/mapbox-gl.css';
mapboxgl.accessToken = "pk.eyJ1IjoiYmFkcjU0MCIsImEiOiJjbTc4OGdra3AxOGlnMnJzZ2FlY2JucWJjIn0.aMEmOVU6LDaGuJEFndOrmQ";

const Map = () => {
  const [restaurants, setRestaurants] = useState(restaurantData)
  const mapContainerRef = useRef(null);
  

  useEffect(() => {

    fetch("/api/restaurant")
      .then(response => response.json())
      .then(data =>{console.log(data), setRestaurants(data)})
      .catch(error => console.log("Error:", error));

    mapboxgl.accessToken = "pk.eyJ1IjoiYmFkcjU0MCIsImEiOiJjbTc4OGdra3AxOGlnMnJzZ2FlY2JucWJjIn0.aMEmOVU6LDaGuJEFndOrmQ";
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: "mapbox://styles/mapbox/streets-v12",
      center: [46.71008, 24.791574],
      zoom: 13,
    });

    restaurants.forEach(restaurant => {
      const popupHTML = ReactDOMServer.renderToString(<MapPopupBody restaurant={restaurant} />);
      new mapboxgl.Marker({color:"#F4CBDF"})
          .setLngLat([restaurant.lng, restaurant.lat])
          .setPopup(new mapboxgl.Popup().setHTML(popupHTML))
          .addTo(map);
    })


  return () => {
    map.remove();
  };


}, [restaurantData]);


  return <div ref={mapContainerRef} style={{ width: "100%", height: "100vh" }}></div>
};

export default Map;
//restaurantData.forEach(restaurant => {
//  console.log(restaurant)
//  new mapboxgl.Marker()
//      .setLngLat([restaurant.lng, restaurant.lat])
//      .setPopup(new mapboxgl.Popup().setHTML(`<h3>${restaurant.name}</h3>`))
//      .addTo(map);
//});