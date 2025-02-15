import Search from './Search.jsx'
import Tab from './Tab.jsx'
import './Header.css'

function Header() {

    return (
      <header className='App-header'>
        <nav className='nav-bar'>
          <Tab name="Home" className='tab'/>
          <Tab name="Map"  className="tab"/>
        </nav>
        <Search/>
      </header>
    )
  }
  
export default Header