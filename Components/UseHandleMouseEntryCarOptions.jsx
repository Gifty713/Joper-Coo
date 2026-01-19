import { useState, useEffect, useRef} from "react";
import TabsArrow from "./TabsArrow";
import UnTabsArrow from "./UnTabsArrow";

export default function useHandleMouseEntryCarOptions(){
    const [isHovered, setIsHovered] = useState(false)

    const handleMouseEnter =()=>{
        setIsHovered(true)
        setTrack(false)
    }

    const handleMouseMainEnter =()=>{
        setIsHovered(true)
    }

    const [track, setTrack] = useState(false)

    const checkMouseLeave = () =>{
        setTrack(true)
    }

    const checkMouseEnterMain = () =>{
        setTrack(false)
    }

    const handleMainEnter =()=>{
        handleMouseMainEnter();
        checkMouseEnterMain();
    }

    useEffect(()=>{
        if (!track) return;

        const handleMouseLeave = setTimeout(()=>{
            setIsHovered(false)
            setTrack(false)
        }, 330)

        return () => clearTimeout(handleMouseLeave);
    }, [track])

    return{
        handleMouseEnter,
        checkMouseLeave,
        isHovered,
        handleMainEnter
    }
}
