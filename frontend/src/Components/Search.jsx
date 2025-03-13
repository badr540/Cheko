import { useState,useContext, useEffect } from "react";
import { Search as SearchIcon, Filter as FilterIcon}  from 'react-bootstrap-icons';
import FilterBody from "./FilterBody";
import Seperator from "./Seperator";
import DropDown from "./DropDown";
import  ItemContext  from "../contexts/ItemContext";
import RestaurantContext from "../contexts/RestaurantContext";


function Search() {
  const [currResturantId,setCurrResturantId] = useContext(RestaurantContext)
  const setItems = useContext(ItemContext)[1]
  const [showDropdown, setDropdown] = useState(false);
  const [stats, setStats] = useState({
    minPrice: 0,
    maxPrice: 200,
    minCalories: 50,
    maxCalories: 1000
  })
  
  useEffect(() => {
    fetch("/api/menu-items/min-max")
      .then(response => response.json())
      .then(data =>{console.log(data), setStats(data)})
      .catch(error => console.error("Error:", error));
  }, []);

  

  function handleSubmit(formData){
    const data = Object.fromEntries(formData)
    const categories = formData.getAll("categories")
    const allData = {
      ...data,
      categories: categories
    }
    
    let query = "/api/menu-items?"
    query += `restaurantId=${currResturantId}&`
    if (allData.search.length > 0){
      query+= `name=${allData.search}&`
    }
    if(allData.categories.length > 0 && allData.categories[0] != ''){
      query+= `categories=${allData.categories.join(',')}&`
    }

    if(allData.caloriesRange != null){

      let cRange = allData.caloriesRange.split(',').map(n => parseInt(n))
      
      if(cRange[0]!=stats.minCalories){
        query+= `minCalories=${cRange[0]}&`
      }
      
      if(cRange[1]!=stats.maxCalories){
        query+= `maxCalories=${cRange[1]}&`
      }

    }

    if(allData.priceRange != null){

      let pRange = allData.priceRange.split(',').map(n => parseInt(n))
      
      if(pRange[0]!=stats.minPrice){
        query+= `minPrice=${pRange[0]}&`
      }
      
      if(pRange[1]!=stats.maxPrice){
        query+= `maxPrice=${pRange[1]}&`
      }
      
    }

    if(allData.bestSeller == 'on'){
      query+= `bestSeller=true&`
    }

    fetch(query)
    .then(response => response.json())
    .then(data => setItems(data))
    .catch(error => console.error("Error:", error));
  }

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
    gap: "2px"
  }

  const searchInputStyle = {
    fontSize: '16px',
    background: "rgba(0, 0, 0, 0.0)",
    flexGrow: "1",
    border: "0",
    color: "black",
  } 
  const svgStyle = {
    verticalAlign: "middle",
    color:"#CCCCCC",

  }


  const drowDownChildren = (<FilterBody minPrice={stats.minPrice} maxPrice={stats.maxPrice} minCalories={stats.minCalories} maxCalories={stats.maxCalories}/>)

  return (    
    <form action={handleSubmit} style={searchBarStyle}>
        <SearchIcon size={22} style={svgStyle}/> 
        <input style={searchInputStyle} name="search" placeholder={"Search"}></input>

      <Seperator/>
      <div style={searchControlsStyle}>
      
        <button type="button" style={filterBtnStyle} onClick={() => setDropdown(prevVal => !prevVal) }> <FilterIcon size={22} style={svgStyle}/> filter</button>
        <DropDown  children={drowDownChildren} trigger={showDropdown} />
        <button style={searchBtnStyle} type="submit">Search</button>
      </div>
    </form>
  )
}
  
export default Search