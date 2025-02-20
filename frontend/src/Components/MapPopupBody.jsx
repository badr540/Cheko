import { useContext, useState } from "react";


function MapPopupBody(props){
    const restaurant = props.restaurant;
    
    const CardStyle = {
      display:" flex",
      height: "95px",
      alignItems:" center",
      border:" None",
      borderRadius:"15px",
      background:"#FFFFFF",
      gap: "10px"
    }

    const ImageStyle = {
      width:"40%",
      objectFit:"cover",
      aspectRatio: "1/1",
      borderRadius:" 6px",
    }

    const ContentStyle ={
      height: "100%",
      flexGrow:" 1",
      display:" flex",
      flexDirection:" column",
      justifyContent:"space-between",
      
    }

    const NameStyle ={
      color: "black",
      fontSize:" 1.2em",
      fontWeight:" bold",
      margin: "0px"
    }


    const FooterStyle = {
      display:" flex",
      alignItems:" center",
      gap:" 10px",
      color:" #777",
      justifyContent:"space-between",
    }


    const BtnStyle = {
      padding:"1px",
      height: "30px",
      aspectRatio: "1/1",
      background:"#F4CBDF",
      color:"#000000",
      border:"none",
      borderRadius:" 6px",
      fontSize:" 0.8em",
      fontWeight: "500"
    }
    

    return (
    <>
        
        <div style={CardStyle}>
          <img src={restaurant.logo} alt={restaurant.name} style={ImageStyle}  />
          <div style={ContentStyle}>
            <h3 style={NameStyle} >{restaurant.name} </h3>
            <div style={FooterStyle}>
                <span >Menu list</span>

                <button  style={BtnStyle} onClick={props.callBack}>+</button>
            </div>
          </div>
        </div>
    </>
      );
};
//setCurrResturantId(restaurant.id)
  export default MapPopupBody;