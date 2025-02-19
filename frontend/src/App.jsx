//import { useState } from 'react'
import Header from './Components/Header.jsx'
import MainContent from './Components/MainContent.jsx';
import { useState } from 'react'

function App() {
  const Tabs = ["Home", "Map"]

  //fetch("/api/menus")
  //.then(response => response.text())
  //.then(data => console.log("Response from backend:", data))
  //.catch(error => console.error("Error:", error));

  
  const [currentTab,setCurrentTab] = useState(0);

  function changeTab(tabIdx){
    setCurrentTab(tabIdx)
  }

  return (
    <>
      <Header tabs={Tabs} currTab={currentTab} changeTabCallBack={changeTab}/>
      <MainContent tabs={Tabs} currTab={currentTab}/>
    </>
  )
}

export default App
