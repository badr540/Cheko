import Select from 'react-select'
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

function FilterBody(){
    //category dropdown
    //price and calorie sliders
    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' },
        { value: 'w', label: 'Vanilla' },
        { value: 'vaanilla', label: 'Vanivalla' },
        { value: 'vanidlla', label: 'Vansilla' },
        { value: 'vavnilla', label: 'Vanilgla' },
    ]
    
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
        <div style={{ alignItems:"center", gap:"10px"}}>
            <label >calories:</label>
            <Slider range min={0} max={20} defaultValue={[3, 10]}  />
        </div>
        <div style={{ alignItems:"center", gap:"10px"}}>
            <label >Price:</label>
            <Slider range min={0} max={20} defaultValue={[3, 10]}  />
        </div>

        <Select placeholder="Select Category" isMulti={true} options={options}/>

    </div>)
}

export default FilterBody