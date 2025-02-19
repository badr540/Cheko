import { useState } from "react";
import Popup from "./Popup";
import FilterBody from "./FilterBody";
import Seperator from "./Seperator";
import DropDown from "./DropDown";
function Search() {
  const [showDropdown, setDropdown] = useState(false);

  const searchBarStyle = {

    backgroundColor:" white",
    display:" flex",
    borderRadius:" 10px",
    height: "5vh",
    padding: "10px",
    justifyContent:" space-between",
    boxShadow:" 2px 2px 5px rgba(0, 0, 0, 0.1)",
    transform:" translateY(50%)",
  }

  const searchControlsStyle = {
  width:" 45%",
  display:" flex",
  justifyContent:" space-between",
  alignItems:" center",
  }

  const searchBtnStyle = {
    backgroundColor:" #F4CBDF",
    color:" black",
  }

  const filterBtnStyle = {
    background:" rgba(0, 0, 0, 0.0)",
    color:" black",
  }

  const searchInputStyle = {
    fontSize: '16px',
    background: "rgba(0, 0, 0, 0.0)",
    flexGrow: "1",
    border: "0",
    color: "black",
  } 
  const popupChildren = (<FilterBody/>)

  return (
    <>
        
      <form style={searchBarStyle}>
        <input style={searchInputStyle} placeholder="Search"></input>

        <Seperator/>
        <div style={searchControlsStyle}>
          <button type="button" style={filterBtnStyle} onClick={() => setDropdown(prevVal => !prevVal) }>filter</button>
          <DropDown  children={popupChildren} trigger={showDropdown} />
          <button style={searchBtnStyle} type="submit">Search</button>
        </div>
      </form>
    </>
  )
}
  
export default Search