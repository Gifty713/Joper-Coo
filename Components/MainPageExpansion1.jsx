import {useState, useEffect} from "react";
import ArrowSvg from "./ArrowSvg";
import "./MainPageExpansion1.css"
import CarType from "./CarType";
import CarOptions from "./CarOptions";
const MainPageExpansion1=()=>{
    const container = {display: "flex", justifyContent: "space-between",width: "100%",height: "100%",}

    const part = {width:"27%",padding: "20px"}

    const partHeading = {fontFamily: "Tomorrow, sans-serif", fontSize: "1.5rem",color: "#89898f", marginBottom: "7px"}   

    const partContentType = {fontSize:"1.3rem", display: "flex", flexDirection:"column", justifyContent:"space-between", cursor:"pointer",}

    return(   
        <CarOptions/>
    )
}
export default MainPageExpansion1

         