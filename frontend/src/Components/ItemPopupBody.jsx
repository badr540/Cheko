function ItemPopupBody(props){
  const item = props.item;

  const itemCardStyle = {
    display:" flex",
    flexDirection:" column",
    justifyContent:"space-between",
    borderRadius:" 16px",
    height: "65vh",
    aspectRatio: "1/1",
    padding: "20px",
    background:"#FFFFFF",
    gap: "10px",
  }

  const itemImageStyle = {
    height: "40%",
    objectFit: "cover",
    borderRadius:" 6px",
  }

  const itemNameStyle ={
    display:"inline-flex",
    fontSize:" 1.2em",
    fontWeight:" bold",
    paddingRight: "15px",
    margin: "0px"
  }
  
  const itemCalStyle = {
    fontSize:" 0.9em",
    color:" #777",
    marginTop: "0px",
    paddingBottom: "10px"
  }

  const descriptionStyle = {
    fontSize:" 0.7em",
    color:" #777",
    paddingBottom: "10px",
    height: "100px"
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
  }

  return (
      <div style={itemCardStyle}>
        <div>
          <div>
            <h3 style={itemNameStyle}>{item.name}</h3>
            {item.bestSeller && <span style={bestSellerStyle}>Best Seller</span>}
          </div>
          <span style={itemCalStyle}>{item.calories} cal</span>
        </div>
        <p style={descriptionStyle}>{item.description}</p>
        <img style={itemImageStyle} src={item.image} alt={item.name} />
        <div style={itemFooterStyle}>
            <span style={itemPriceStyle}>{item.price} SR</span>
            <button style={actionBtnStyle} onClick={props.decreaseAmount}>-</button>
            <span>{props.amount}</span>
            <button  style={actionBtnStyle} onClick={props.increaseAmount}>+</button>
        </div>
      </div>
  )

}

export default ItemPopupBody;