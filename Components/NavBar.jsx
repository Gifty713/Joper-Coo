import bg1 from '../img/bg1.jpg'
import logo2 from "../img/logo2.png";
import TabsArrow from "./TabsArrow";
import UnTabsArrow from "./UnTabsArrow";
import "./NavBarStyling.css"
import MainPage from "./MainPage";
import useHandleMouseEntryCarOptions from "./UseHandleMouseEntryCarOptions";
import Locationstab from "./LocationsTab";
import { useState } from "react";
const NavBar = () =>{
    const {handleMouseEnter, checkMouseLeave, isHovered, handleMainEnter} = useHandleMouseEntryCarOptions()
    
    const containerStyle = {
        backgroundImage: `url(${bg1})`,width: "100%",minHeight: "100vh",backgroundSize: "cover",
        margin: "0",backgroundPosition: "center", position: "relative",
    }
   
    return(
        <div style={containerStyle}>
            <div style={{display:"flex", marginLeft:"-10px"}}>
                <div id="logo" style={{display: "flex"}}>
                    <img src= {logo2} 
                    alt="Logo of Joper and Co" 
                    className="logoStyle"/>
                    <p className="nameCompany">JOPER & CO</p>
                </div>

                <div className="tabsStyle">
                    <div id="ourOptions" >
                        <div className="individualTab"
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={checkMouseLeave}
                            >
                            <p>Our Options</p>
                            {isHovered? <UnTabsArrow/> : <TabsArrow/> }
                        </div>   
                    </div>

                    <div id="locations">
                        <div className="individualTab" style={{display:"block", position:"relative"}}>
                            <p>Our Locations</p>
                        </div> 
                    </div>

                    <div id="services">
                        <div className="individualTab">
                            <p>Services</p>
                            <TabsArrow/>
                        </div> 
                    </div>

                    <div id="contactUs">
                        <div className="individualTab">
                            <p>Contact Us</p>
                        </div> 
                    </div>
                </div>
            </div>
            <MainPage handleMainMouseEnter = {handleMainEnter} handle={checkMouseLeave} rain = {isHovered}/>
        </div>
    )
}
export default NavBar