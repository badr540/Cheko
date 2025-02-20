import { useContext } from "react"
import OrderContext from "../contexts/OrderContext"

function OrderBody(props){
    const [orders,setOrders] = useContext(OrderContext)

    const bodyStyle = {
        display: "flex",
        flexDirection:" column",
        backgroundColor: "white",
        boxShadow: "5px 5px 5px rgba(0, 0, 0, 0.2)",
        minHeight: "100px",
        width: "200px",
        gap:"20px",
        padding: "25px",
        borderRadius: "8px"
    }
    
    const subTextStyle = {
        display: "flex", 
        justifyContent:"space-between",
        color: "#707173"
    }

    const mainTextStyle = {
        display: "flex", 
        justifyContent:"space-between",
        color: "black",
        fontWeight:"bold",
        overflow: "hidden",
        textOverflow: "clip",
        whiteSpace: "nowrap"
    }

    const btnStyle = {
        backgroundColor:" #F4CBDF",
        color: "black",
        borderRadius: "24px"
    }

    const subtotal = orders.reduce((acc, item) => acc + item.price, 0)
    const tax = parseFloat((subtotal * 0.15).toString().match(/^-?\d+(?:\.\d{0,2})?/)[0])
    const total = subtotal + tax

    return (
    <div style={bodyStyle}>
        <div style={subTextStyle}>
        <span>Subtotal</span>
        <span>{subtotal}</span>
        </div>
        
        <div style={subTextStyle}>
        <span>Tax</span>
        <span>{tax}</span>
        </div>

        <span style={mainTextStyle}>
            ----------------------------
        </span>
        
        <div style={mainTextStyle}>
        <span>Total</span>
        <span>{total}</span>
        </div>

        <button style={btnStyle} >Place Order</button>
    </div>

    )
}
//
export default OrderBody