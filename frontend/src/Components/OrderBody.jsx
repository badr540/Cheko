function OrderBody(props){
    
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
    const subtotal = props.subtotal
    console.log(props.subtotal)
    const tax = subtotal * 0.15

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

        <button style={btnStyle}>Place Order</button>
    </div>

    )
}
export default OrderBody