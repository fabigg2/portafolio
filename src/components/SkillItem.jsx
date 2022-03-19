import { useEffect, useRef } from "react";
// import { getLocalImages } from "../utils/helpers"

export const SkillItem = ({name, image, color, level='80%'}) => {
    const range = useRef();
    useEffect(()=>{
        range.current.style.background = color;
        range.current.style.width = level;
    }, [color, level])
    return (
        <div className="w-full">
            <div className="flex">
                <img src={image} alt="react logo" className=" w-5 h-5" />
                <h5 className=" font-montserrat font-light text-white-100">{name}</h5>
            </div>
            <div className=" h-[2px] bg-base-500 rounded-xl w-full">
                <div ref={range} className={` h-full w-0 rounded-xl transition-all ease-in duration-[1.5s]`}></div>
            </div>
        </div>
    )
}
