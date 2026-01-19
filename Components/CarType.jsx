import ArrowSvgMini from "./ArrowSvgMini"
import { useState, useEffect } from "react"
import "./MainPageExpansion1.css"
import CarImages from "./CarImages"
const CarType = (props) =>{
    const container = {display:"flex", justifyContent:"space-between"}
    const partContentType = {fontSize:"1.3rem", display: "flex", flexDirection:"column", justifyContent:"space-between", cursor:"pointer", marginTop:"-2px", width:"40%", height: "60px",}
    const partContentType2 = { width:"50%", marginTop:"20px"}
    const divFlex = {display:"flex", justifyContent:"space-between", }
    const [activeMiniOption, setActiveMiniOption] = useState(0)

    let content;
    const  first = ["Toyota Camry", "Toyota Corolla", "Honda Civic", "Kia Picanto", "Honda Accord", "Toyota Highlander"]
    const second = ["Nissan Altima", "Kia Rio", "Kia Forte", "Hyundai Elantra", "Mercedes-Benz G10"]
    const third = ["BMW X5", "Mercedes-Benz S-Class", "Genesis GV80", "Mercedes-Benz G50"]

    useEffect(()=>{
        setActiveMiniOption(0)
    }, [props.smth])

    if(props.smth === 0){
        content=first
    }else if(props.smth===1){
        content = second    
    }else if (props.smth === 2){
        content = third
    }

    return(
        <div style={container} > 
            <div style={partContentType}>
                {content.map((car, index)=>{
                    return(
                        <div style={divFlex} onClick={()=>{setActiveMiniOption(index)}} key={index}>
                            <p className={activeMiniOption === index ? "active" : ""}>{car}</p>
                            <ArrowSvgMini activeOptionsMini = {activeMiniOption} indexMini = {index}/>
                        </div>
                    )
                })}                
            </div> 
            <div style={partContentType2}><CarImages type = {content[activeMiniOption]}/></div>
        </div>
    )
}
export default CarType