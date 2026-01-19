import ArrowSvg from "./ArrowSvg"
import { useState, useEffect } from "react"
import CarType from "./CarType"
import CarImages from "./CarImages"
const CarOptions = () =>{
    const partContent = {fontSize:"1.4rem", display: "flex", justifyContent:"space-between", cursor:"pointer", height: "60px"}

    const partContentP = { }

    const container = {display: "flex", justifyContent: "space-between",width: "100%",height: "100%",}

    const partHeading = {fontFamily: "Tomorrow, sans-serif", fontSize: "1.5rem",color: "#89898f", marginBottom: "7px"} 

    const part1 = {width:"20%",padding: "20px"}

    const part2 = {width:"72%",padding: "20px"}

    const carOptionContent = ["Budget Friendly", "Deluxe", "Break the Bank"]

    const [activeOption, setActiveOption] = useState(0)

    sessionStorage.setItem("Car_Options", activeOption)
    // const seen = sessionStorage.getItem("Car_Options")
    // setActiveOption(seen)

    return(
        <div style={container}>
            <div style={part1}>
                <p style={partHeading}><u>Car Options</u></p>
                {carOptionContent.map((carOption, index)=>{
                    return(
                        <div style={partContent} onClick={()=>{setActiveOption(index)}} key={index}>
                            <p style={partContentP} className={activeOption === index ? "active" : ""}>{carOption}</p>
                            <ArrowSvg activeOptions = {activeOption} indexs = {index}/>
                        </div>
                    )
                })}
            </div>

            <div style={part2}>
                <p style={partHeading} ><u>Car Type</u></p>
                <CarType smth = {activeOption}/>
            </div>
        </div>
        
    )
}
export default CarOptions