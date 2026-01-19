import "./MainPageExpansion1.css"
const ArrowSvgMini =(props)=>{
    return(
        <svg className="mySvg" viewBox="0 0 24 24" style={{marginTop: "3px",}} fill="none" xmlns="http://www.w3.org/2000/svg" width="30">
        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M9 6L15 12L9 18" stroke="#33363F" className = {props.activeOptionsMini === props.indexMini ? `currentSvg` : ``} strokeWidth="1.5"></path> </g></svg>
    )                  
}
export default ArrowSvgMini