import { useState } from "react"
import RightTabsArrow from "./RightTabsArrow"
import LocationPopUp from "./LocationPopUp"
const RentTab = () =>{
    const [showPopup, isShowPopUp] = useState(false)

    const styleContainer = {
        display: "block",width: "100%", paddingLeft:"80px",margin: "-10px auto 20px auto",padding: "8px 16px",
    }

    const styleP = {
        margin:"0",fontSize: "0.8rem",fontFamily: "Lucida Sans, Lucida Sans Regular, Lucida Grande, Lucida Sans Unicode, Geneva, Verdana, sans-serif",
        fontWeight: "500",letterSpacing: "0.4px"
    }

    const styleInputs ={
        margin: "0 0 10px 10px",width: "50%",height: "30px",border: "1px solid black",borderRadius: "7px", display:"flex", position: "relative",
        padding:"3px 6px",fontSize: "1.2rem",fontFamily: "Lucida Sans, Lucida Sans Regular, Lucida Grande, Lucida Sans Unicode, Geneva, Verdana, sans-serif"
    }

    const units = ["Location", "Car Type", "Pick up point"]
    
    const isOpen =(e)=>{
        isShowPopUp(true)
        e.stopPropagation()
    }

    const isClose = ()=>{
        showPopup && isShowPopUp(false)
    }

    const [handleChangeEntry, isHandleChangeEntry] = useState()
    const handleEntry = (text)=>{
        isHandleChangeEntry(text)
    }   
   
    return(
        <div style={styleContainer} onClick={isClose}>

            {units.map((unit, key)=>{
                return(
                    <div key={key}> 
                        <p style={styleP}>{unit}</p>
                        <div style={styleInputs} className="styleInput" onClick={isOpen}>
                            { showPopup && <LocationPopUp handle ={handleEntry} key={key}/>}
                            {handleChangeEntry && <p style={{ height:"fit-content", marginTop:"0"}}>{handleChangeEntry}</p>}
                            <RightTabsArrow/>
                        </div>
                    </div>
                )
            })}
            {/* <div>
                <p style={styleP}>Location</p>
                <div style={styleInputs} className="styleInput" onClick={isOpen}>
                    { showPopup && <LocationPopUp handle ={handleEntry}/>}
                    {handleChangeEntry && <p style={{ height:"fit-content", marginTop:"0"}}>{handleChangeEntry}</p>}
                    <RightTabsArrow/>
                </div>
            </div>
            <div>
                <p style={styleP}>Car Type</p>
                <div style={styleInputs} className="styleInput" onClick={isOpen} >
                    <RightTabsArrow/>
                </div>
            </div>
            <div>
                <p style={styleP}>Pick up point</p>
                <div style={styleInputs} className="styleInput" onClick={isOpen} >
                    <RightTabsArrow/>
                </div>
            </div> */}
            <button>Book Now</button>
        </div>
    )
}
export default RentTab