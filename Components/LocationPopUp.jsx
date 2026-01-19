const LocationPopUp =({handle, key})=>{
    const styleLocationPopUp = {border:"1px solid black", width:"125px", height:"107px", margin: "0",
        backgroundColor:"white",position:"absolute", top:"24px", right:"-4px", zIndex:"1", textAlign:"center"
    }
    const styleState = { height: "fit-content", fontSize: "1rem", margin: "0"}
    const states = ["Awka", "Yenagoa", "Abuja", "Lagos"]
    const carTypes = ["a", "b", "c", "d", "e"]

    // sett = switch 
    return(
    <div style={styleLocationPopUp}>
        {states.map((state, key)=>{
            return(
                <div style={{cursor:"pointer"}} key={key}>
                    <p style={styleState} onClick={()=>{handle(state)}}>{state}</p>
                    {key != 3 && <hr style={{margin:"0px"}}/>}
                </div>
            )
        })}
    </div>
    )
}
export default LocationPopUp