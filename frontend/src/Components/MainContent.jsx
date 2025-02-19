import { useState } from "react";

import MenuBar from './MenuBar'
import MenuSection from './MenuSection'
import MenuData from '../assets/data'
import Map from "../Map";

function MainContent({tabs, currTab}) {
  const [orders, setOrders] = useState([])

  const mainContentStyle = {
    color:" black",
    placeContent:" center",
    width:" 75vw",
    margin:" 0 auto",
    marginTop:" 25px",
  }
  
  console.log(orders)
  function addOrder(item){
    setOrders([...orders,item])
  }
  function removeOrder(itemToRemove){
    let idx = orders.findIndex(item => item.name == itemToRemove.name)
    if (idx >= 0){
      setOrders( prevArray => [...prevArray.slice(0, idx), ...prevArray.slice(idx + 1)]);
    }
  }
  const MenuSections = MenuData.map((data,idx) => <MenuSection addOrderCallBack ={addOrder} removeOrderCallBack={removeOrder} key ={idx} name={data.category} items={data.items}/>)
  const MenuBarData = MenuData.map((data) => ({category: data.category, size: data.items.length}))

  let CurrentView = (<></>)
  if(tabs[currTab] == "Home"){
    CurrentView = (
    <div>
      <main style={mainContentStyle}>
        <MenuBar MenuBarData={MenuBarData} orders={orders}/>
        {MenuSections}
      </main>
    </div>
    )
  }
  else{
    CurrentView = (<Map />)
  }
  
  return (
    <>
    {CurrentView}
    </>
  )
}

export default MainContent
  