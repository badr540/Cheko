//import { useState } from 'react'
import Header from './Components/Header.jsx'
import MainContent from './Components/MainContent.jsx';
import { DarkModeProvider } from './contexts/DarkModeContext.jsx';
import { ItemProvider } from './contexts/ItemContext.jsx';
import { RestaurantProvider } from './contexts/RestaurantContext.jsx';
import { useState} from 'react'




function App() {
  const Tabs = ["Home", "Map"]


  
  const [currentTab,setCurrentTab] = useState(0);

  function changeTab(tabIdx){
    setCurrentTab(tabIdx)
  }

  return (
    <>
      <RestaurantProvider>
      <ItemProvider>
      <DarkModeProvider >

        <Header tabs={Tabs} currTab={currentTab} changeTabCallBack={changeTab}/>
        <MainContent tabs={Tabs} currTab={currentTab}/>

      </DarkModeProvider>
      </ItemProvider>
      </RestaurantProvider>
    </>
  )
}

export default App

