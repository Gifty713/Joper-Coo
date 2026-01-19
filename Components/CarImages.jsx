// import BMW from "../Components/CarImg/BMW_X5.jpg"
import "./CarImages.css"
const CarImages =({type})=>{
    const styleImg = {width:"100%",height:"250px",}
    const styleBtn = { } 
    
    const handleBtnHover = (e) =>{
        
    } 

    return(
        <div>
            <img src = {`../Components/CarImg/${type}.jpg`} alt="Car type" style={styleImg}  />   
            <button style={styleBtn} className= "carBtn">Book Now</button> 
        </div>
    )
}
export default CarImages