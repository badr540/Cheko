function DropDown(props){
    const Style = {
      position: "absolute",
      top:"20px",
      left: -250,
      zIndex: 10 
    }

    return (
    <div style={{position: "relative"}}>
      {props.trigger && ( 
        <ul style={Style}>
           {props.children}
        </ul>
      )}
    </div>
  );
}

export default DropDown