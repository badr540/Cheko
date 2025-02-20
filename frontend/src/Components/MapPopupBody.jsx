import { useContext } from "react";
import RestaurantContext from "../contexts/RestaurantContext";
function MapPopupBody(props){
    const setCurrResturant = useContext(RestaurantContext)
    const restaurant = props.restaurant;
    
    const CardStyle = {
      display:" flex",
      alignItems:" center",
      width: "350px",
      height:" 150px",
      border:" None",
      borderRadius:"15px",
      padding:" 10px",
      background:"#FFFFFF",
      cursor:" pointer",
      gap: "10px"
    }

    const ImageStyle = {
      height:" 100%",
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
      fontSize:" 1.2em",
      fontWeight:" bold",
      margin: "0px"
    }


    const FooterStyle = {
      display:" flex",
      alignItems:" center",
      gap:" 10px",
      color:" #777",
    }


    const BtnStyle = {
      padding:"1px",
      height: "100%",
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

                <button  style={BtnStyle} onClick={()=> {setCurrResturant(restaurant.id)} }>+</button>
            </div>
          </div>
        </div>
    </>
      );
};
  
  export default MapPopupBody;