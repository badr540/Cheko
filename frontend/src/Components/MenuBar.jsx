import { useState,useRef, useContext } from "react";
import Seperator from "./Seperator";
import OrderBody from "./OrderBody";
import DropDown from "./DropDown";
import OrderContext from "../contexts/OrderContext";
function MenuBar(props) {

    const orders = useContext(OrderContext)[0]
    const [showDropdown, setDropdown] = useState(false);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);
    const menuRef = useRef(null);
  
    const handleMouseDown = (e) => {
      setIsDragging(true);
      setStartX(e.pageX - menuRef.current.offsetLeft);
      setScrollLeft(menuRef.current.scrollLeft);
    };
  
    const handleMouseUp = () => {
      setIsDragging(false);
    };
  
    const handleMouseMove = (e) => {
      if (!isDragging) return;
      
      const x = e.pageX - menuRef.current.offsetLeft;
      const walk = (x - startX) * 2; // Multiply by 2 for faster scrolling
      menuRef.current.scrollLeft = scrollLeft - walk;
    };
  
    const handleWheel = (e) => {
      e.preventDefault();
      menuRef.current.scrollLeft += e.deltaY;
    };
  
    function scrollToCategory(categoryName){

        const elements = document.getElementsByClassName('category-name');
        for (let el of elements) {
            if (el.textContent.includes(categoryName)) {
                el.scrollIntoView({ behavior: "smooth", block: "start" });
                break;
            }
          }
    }

    const menuBarStyle = {
        marginTop: "50px",
        display:" flex",
        width: "100%",
        height: "60px",
        alignItems: "center"
    }

    const scrollableMenuBarStyle = {
        height: "100%",
        width: "100%",
        overflowX: "scroll",
        display:" flex",
        gap:"20px",
        cursor: "grab",
        msOverflowStyle: "none",  // IE/Edge
        scrollbarWidth: "none",
        alignItems: "center",
        "&::-webkit-scrollbar": { // Chrome/Safari/Opera
            display: "none"
        }
    }

    const menuBarBtnStyle = {
        display:"inline-flex",
        whiteSpace:"nowrap",
        alignItems:" center",
        height: "55px",
        border:"None",
        borderRadius:"8px",
        padding:" 10px",
        color: "black",
        background:"#FFFFFF",
        gap: "10px",
    }

    const iconStyle = {
        borderRadius:"8px",
        height: "100%",
        aspectRatio: "1/1"
    }
    
    
    const placeHolderIcon = (<svg style={iconStyle} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <rect width="100" height="100" fill="#E5DBDF"/>
      </svg>
      )
    const buttons = props.MenuBarData.map((data, idx) => <button key={idx} style={menuBarBtnStyle} onClick={()=>scrollToCategory(data.category)}>{placeHolderIcon} {data.category} {data.size}</button>)
    
    const dropDownChildren = (<OrderBody/>) 
    return (
        <div style={menuBarStyle}>
            <div ref={menuRef}
                 style={scrollableMenuBarStyle}
                 onMouseDown={handleMouseDown}
                 onMouseUp={handleMouseUp}
                 onMouseLeave={handleMouseUp}
                 onMouseMove={handleMouseMove}
                 onWheel={handleWheel}>
                {buttons}
            </div>
            <Seperator/>
            <button style={menuBarBtnStyle} onClick={() => setDropdown(prevVal => !prevVal)}>{placeHolderIcon} orders {orders.length}</button>
            <DropDown trigger={showDropdown}>
              <OrderBody/>
            </DropDown>
        </div>
    )
  }
  
  export default MenuBar