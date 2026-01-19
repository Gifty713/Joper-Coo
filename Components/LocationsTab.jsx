import { useState } from "react"
import RentTab from "./RentTab"
import BuyTab from "./BuyTab"
const Locationstab = () =>{
    const styleDiv = {display: "block",width: "70%",height: "350px",margin: "20px auto 0 auto",
        border: "2px solid #89898f",borderRadius:"10px"
    }
    const styleBtn = {backgroundColor:"#CE2029", width:"45px", height:"25px", padding:"5px 10px", borderRadius:"13px", textAlign:"center", cursor:"pointer"}
    const altStyleBtn = {backgroundColor:"#EF0107", width:"45px", height:"25px", padding:"5px 10px", borderRadius:"13px", textAlign:"center", cursor:"pointer"}

    const [isClicked, setisClicked] = useState(true)
    // const [isUnClicked, setIsUnclicked] = useState(false)
    const isUnClicked = !isClicked
    const handleClick1 = ()=>{
        setisClicked(true)
        // setIsUnclicked(false)
    }

    const handleClick2 = ()=>{
        setisClicked(false)
        // setIsUnclicked(true)
    }

    const Cities = ["Awka", "Yenagoa", "Adamawa", "Abuja", "Lagos"]
    return(
        <div style={styleDiv} >
            <div className="states" style={{fontSize:"1.5rem", padding: "0px 8px", borderRadius: "5px", boxShadow:"1px 1px 0px rgba(0 0 0 0.5)"}}>
                {/* {Cities.map((city) =>{
                    return(
                        <div style={{display:"flex"}}>
                            <p style={{width:"80%", margin:"10px 0"}}>{city}</p>
                        </div>
                    )      
                })} */}
                <p style={{fontFamily: "Tomorrow, sans-serif", fontSize:"1.6rem", letterSpacing:"0.5px", marginBottom:"0"}}><u> Our Location</u></p>
                <div style={{display: "flex", width:"40%", justifyContent:"space-around", fontSize:"1.3rem", color:"white", marginBottom:"0"}}>
                    {isClicked? <p style={altStyleBtn} onClick={handleClick1}>Rent</p> : <p style={styleBtn} onClick={handleClick1}>Rent</p>}
                    {isUnClicked? <p style={altStyleBtn} onClick={handleClick2}>Buy</p> : <p style={styleBtn} onClick={handleClick2}>Buy</p>}
                </div>
                {isClicked? <RentTab/> : <BuyTab/>}
            </div>
        </div>
    )
}
export default Locationstab