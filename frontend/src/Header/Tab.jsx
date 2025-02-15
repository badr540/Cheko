function Tab(props) {

    return (
      <div className={props.className}>
        <a>
            {props.name}
        </a>
      </div>
    )
    // change tabs to buttons
  }
  
export default Tab