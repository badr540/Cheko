function Popup(props) {
  
  const outerStyle = {
    position: "fixed",
    top: "0",
    left: "0",
    width: "100%",
    height: "100vh",
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 9999
  }

const innerStyle = {
  position:" relative",
  alignItems:" center",

}

const closeBtnStyle = {
    position:" absolute",
    top:" 15px",
    right:" 15px",
    width:" 23px", 
    height:" 23px",
    backgroundColor: "#D6D6D6",
    color:" #fff",
    border:" none",
    borderRadius:" 50%",
    cursor:" pointer",
    fontSize:" 18px",
    display:" flex",
    alignItems:" center",
    justifyContent:" center",
    padding:"5px", 
    margin:" 0", 
    lineheight:" 1", 
}



  return (props.trigger) ? (
    <div id="popup-bg"style={outerStyle} onClick={props.closePopup}>
      <div style={innerStyle} onClick={(e) => e.stopPropagation()}>
      <button style={closeBtnStyle} onClick={props.closePopup}>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
        <line x1="20" y1="4" x2="4" y2="20"></line>
        <line x1="4" y1="4" x2="20" y2="20"></line>
    </svg>
      </button>
      {props.children}
      </div>
    </div>
  ) : "";
};

export default Popup