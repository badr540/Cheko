import { useState } from "react";

import ItemCard from "./ItemCard"

function MenuSection(props) {
    const items = props.items
    const itemCards = items.map((item, idx) => <ItemCard key={idx} item={item} addOrderCallBack ={props.addOrderCallBack} removeOrderCallBack={props.removeOrderCallBack}/>)
    
    const sectionNameStyle = {
        display:" flex",
        alignItems:" center",
    }

    const sectionContainerStyle = {
        display:"grid",
        justifyContent: "center",
        gridTemplateColumns:" repeat(auto-fill, minmax(350px, 1fr))", 
        alignItems: "start",
        gap: "16px" 
        
    }

    const LineStyle = {
        flexGrow:" 1",
        height:" 1px",
        backgroundColor:"#E2E7EE",
        marginLeft:" 10px",
    }

    const sectionSeparatorStyle = {
        display: "flex",
        placeItems: "center"
    }
    
    return (
        <div>

            <div style={sectionSeparatorStyle}>
                <h2 className="category-name" style={sectionNameStyle}>{props.name}</h2>
                <div style={LineStyle}></div>
            </div>
            
            <div style={sectionContainerStyle}>
            {itemCards}
            </div>
        </div>
    )
  }
  
  export default MenuSection