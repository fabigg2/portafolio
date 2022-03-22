import { Link, useNavigate } from "react-router-dom"

export const SiderItem = ({ text, link, setShow }) => {
    const navigate = useNavigate();

    const to = ()=>{
        setShow();
        navigate(link)
    }
    return (
        <div
            onClick={to}
            className=" cursor-pointer h-9 border-b-2 border-b-base-300 flex items-center justify-center w-full">
            <span className="text-base-400 font-montserrat hover:text-blue-100 ease-in duration-100">{text}</span>
        </div>
    )
}
