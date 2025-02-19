function Tab(props) {


  const tabStyle = {
    color: (props.isCurrentTab) ?  "black" :" white",
    backgroundColor: (props.isCurrentTab) ? "#F4CBDF" :"rgba(0, 0, 0, 0.0)",
    padding:" 10px",
    marginTop:" 0",
    borderRadius:"0px",
    borderBottomRightRadius:" 8px",
    borderBottomLeftRadius:" 8px",
  
    border: "none" 
  }

  return (
    <button style={tabStyle} onClick={()=> props.changeTabCallBack(props.tabId)}>
        {props.name}
    </button>
  )
}
  
export default Tab