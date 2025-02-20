import { use, useContext, useState } from "react";
import Popup from "../Components/Popup";
import ItemPopupBody from "./ItemPopupBody";
import OrderContext from "../contexts/OrderContext";

function ItemCard(props) {
    const [amount, setAmount] = useState(0)
    const [orders,setOrders] = useContext(OrderContext)
    const [showPopup, setPopup] = useState(false);
    
    const itemCardStyle = {
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

    const itemImageStyle = {
      height:" 100%",
      objectFit:"cover",
      aspectRatio: "1/1",
      borderRadius:" 6px",
    }

    const itemContentStyle ={
      height: "100%",
      flexGrow:" 1",
      display:" flex",
      flexDirection:" column",
      justifyContent:"space-between",
      
    }

    const itemNameStyle ={
      fontSize:" 1.2em",
      fontWeight:" bold",
      margin: "0px"
    }
    
    const itemCalStyle = {
      fontSize:" 0.9em",
      color:" #777",
      marginTop: "0px",
      paddingBottom: "10px"

  
    }

    const itemFooterStyle = {
      display:" flex",
      alignItems:" center",
      gap:" 10px"
    }

    const itemPriceStyle = {
      marginRight: "auto",
      color:"#F4CBDF",
    }

    const actionBtnStyle = {
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

    const bestSellerStyle = {

      width: "fit-content",
      padding: "0.1rem 0.5rem",
      backgroundColor: "#D0EAE3",  
      color: "#599887",  
      fontSize: "0.75rem",
      fontWeight: "500",
      borderRadius: "0.375rem",
      marginLeft: "-35px"
    }
    

    const item = props.item

    const decreaseAmount = () => {
        if(amount>0){
          setAmount((prevVal) => prevVal-1)
          let idx = orders.findIndex(curItem => curItem.name == item.name)
          if (idx >= 0){
            setOrders( prevArray => [...prevArray.slice(0, idx), ...prevArray.slice(idx + 1)]);
          }
        }
    }

    const increaseAmount = () => {
      setAmount((prevVal) => prevVal+1)
      setOrders(items => [...items,item])
    }


    const popupChildren = (<ItemPopupBody item={item} amount={amount} decreaseAmount={decreaseAmount} increaseAmount={increaseAmount} />)
    
    return (
    <>
        <Popup  children = {popupChildren} trigger={showPopup} closePopup={() => setPopup(prevVal => !prevVal) } />
        
        <div style={itemCardStyle} onClick={() => setPopup(prevVal => !prevVal)}>
          <img src={item.image} alt={item.name} style={itemImageStyle}  />
          <div style={itemContentStyle}>
            <h3 style={itemNameStyle} >{item.name} </h3>
            <span style={itemCalStyle}>{item.calories} cal</span>
            {item.bestSeller && <span style={bestSellerStyle}>Best Seller</span>}
            <div style={itemFooterStyle}>
                <span style={itemPriceStyle}>{item.price} SR</span>
                <button style={actionBtnStyle} onClick={(e) => (e.stopPropagation(), decreaseAmount())}>-</button>
                <span>{amount}</span>
                <button  style={actionBtnStyle} onClick={(e) => (e.stopPropagation(), increaseAmount())}>+</button>
            </div>
          </div>
        </div>
    </>
      );
};

  
export default ItemCard