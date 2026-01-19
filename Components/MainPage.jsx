import { useState } from "react"
import MainPageExpansion1 from "./MainPageExpansion1"
const MainPage = (props) =>{
    const styleDiv = {
        display: "block", backgroundColor: "white", width: "85%", height: "75vh",marginTop: "-70px", 
        marginLeft:"auto", marginRight:"auto",borderRadius:"10px", transition: "display 0.5s ease-out"    
    }

    const sloganContainer = {
        display:"block", width: "40%", color: "#fff",marginTop: "10px",marginLeft:"40px",fontWeight:"500",
        fontSize:"2.5rem",fontFamily: "Tomorrow, sans-serif",letterSpacing: "5px",textShadow: "2px 2px 2px black",
    }   
  
    return(
        <div> 
            {props.rain? <div style={styleDiv} onMouseEnter={props.handleMainMouseEnter} onMouseLeave={props.handle}><MainPageExpansion1/></div> : <div style={sloganContainer} ><p >EXPERIENCE LUXURY WITH JOPER & CO,</p> <p>RENT AND BUY CARS WITH US TODAY!</p></div> }
        </div>
    )
}
export default MainPage