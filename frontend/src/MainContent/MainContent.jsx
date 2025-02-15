import './MainContent.css'
import MenuBar from './MenuBar'
import MenuCategory from './MenuCategory'

function MainContent() {

    return (
        <main className="main-content">
        <MenuBar/>
        <MenuCategory name="breakfast"/>
      </main>
    )
  }
  
  export default MainContent
  