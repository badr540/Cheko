function DropDown(props){
    const Style = {
      position: "absolute",
      top:"20px",         // Positions it right below the trigger
      left: -250,            // Aligns with left edge of parent
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