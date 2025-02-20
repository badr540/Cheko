import { useContext, useState, createContext, useEffect } from "react";

import MenuBar from './MenuBar'
import MenuSection from './MenuSection'
import Map from "./Map";

import  ItemContext  from "../contexts/ItemContext";
import RestaurantContext from "../contexts/RestaurantContext";
import { OrderProvider } from "../contexts/OrderContext";


function MainContent({tabs, currTab}) {
  const [currResturantId, setCurrResturantId] = useContext(RestaurantContext)
  const [items,setItems] = useContext(ItemContext)
  console.log(currResturantId)
  useEffect(() => {
    fetch("/api/menu-items?restaurantId=" + currResturantId)
      .then(response => response.json())
      .then(data =>{console.log(data), setItems(data)})
      .catch(error => console.error("Error:", error));
  }, [currResturantId]);

  const mainContentStyle = {
    color:" black",
    placeContent:" center",
    width:" 75vw",
    margin:" 0 auto",
    marginTop:" 25px",
  }


  const itemCategories = items.map(item => item.category)
  
  const uniqeCategories = itemCategories.filter((category,idx) => idx === itemCategories.lastIndexOf(category));
  const categoriesCount = uniqeCategories.map(c => itemCategories.reduce((count, current) => current === c ? count + 1 : count, 0))

  const MenuSections = uniqeCategories.map((category,idx) => <MenuSection key ={idx} name={uniqeCategories[idx]} items={items.filter(item => item.category === category)}/>)
  const MenuBarData = uniqeCategories.map((category, idx) => ({category: category, size: categoriesCount[idx]}))

  let CurrentView = (<></>)
  if(tabs[currTab] == "Home"){
    CurrentView = (
    
    <div>
      <OrderProvider>
        <main style={mainContentStyle}>
          <MenuBar MenuBarData={MenuBarData}/>
          {MenuSections}
        </main>
      </OrderProvider>
    </div>
    )
  }
  else{
    CurrentView = (<Map />)
  }
  

  
  return (
    <div>
      {CurrentView}
    </div>
  )
}

export default MainContent
  