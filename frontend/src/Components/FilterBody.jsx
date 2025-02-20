import { useState } from 'react';
import categoriesNames from '../assets/categories';
import Select from 'react-select'
import Slider from "rc-slider";

import "rc-slider/assets/index.css";

function FilterBody(props){
    //price and calorie sliders
    const [calorieSliderValue, setCalorieSliderValue] = useState([props.minCalories,props.maxCalories]);
    const [priceSliderValue, setPriceSliderValue] = useState([props.minPrice,props.maxPrice]);
    const options = categoriesNames.map(c => ({ value: c, label: c }))

    
    const FilterMenuStyle = {
        display: "flex",
        flexDirection:" column",
        backgroundColor: "white",
        color: "black",
        boxShadow: "5px 5px 5px rgba(0, 0, 0, 0.2)",
        zIndex: "1000",  
        minHeight: "100px",
        width: "200px",
        gap:"20px",
        padding: "25px",
        borderRadius: "8px"
    }


    return (
    <div style={FilterMenuStyle}>
        <div style={{display: "flex",flexDirection:" column"}} >
            <label >calories:</label>
            <span>{calorieSliderValue[0]}-{calorieSliderValue[1]}</span>
            <Slider onChange={setCalorieSliderValue} range min={props.minCalories} max={props.maxCalories} defaultValue={[props.minCalories,props.maxCalories]}  />
            <input type="hidden" name="caloriesRange" value={calorieSliderValue} />
        </div>
            
        
        <div style={{display: "flex",flexDirection:" column"}} >
            <label >Price:</label>
            <span>{priceSliderValue[0]}-{priceSliderValue[1]}</span>
            <Slider range onChange={setPriceSliderValue} allowCross={false}  min={props.minPrice} max={props.maxPrice} defaultValue={[props.minPrice,props.maxPrice]}  />
            <input type="hidden" name="priceRange" value={priceSliderValue} />
        </div>

        <label>
            <input type='checkbox' name='bestSeller' style={{backgroundColor: "white"}}></input> 
            Best Seller
        </label>
        
        <Select name="categories" placeholder="Select Category" isMulti={true} options={options}/>

    </div>)

    //
}

export default FilterBody