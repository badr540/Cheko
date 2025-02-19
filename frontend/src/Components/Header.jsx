import Search from './Search.jsx'
import Tab from './Tab.jsx'

function Header(props) {

  const tabs = props.tabs.map((tab,idx) => <Tab key={idx} name={tab} isCurrentTab={props.currTab == idx}  changeTabCallBack={props.changeTabCallBack} tabId={idx} className='tab'/> )
  
  const headerStyle = {
    backgroundColor:" #222",
    borderBottomRightRadius:"25px",
    width:"95%",
    height: "15vh",
  }
  const headerItemContainer = {    
    height:"100%", 
    width:" 75vw",
    marginLeft:"12vw", 
    display:" flex",
    flexDirection:" column",
    justifyContent:"space-between",
  }

  const navBarStyle = {
    display:" flex",
    gap:"20px",
  }
  
  return (
    <header style={headerStyle}>
      <div style={headerItemContainer}>
        <nav style={navBarStyle}>
          {tabs}
        </nav>
        <Search/>
      </div>
    </header>
  )
}
  
export default Header