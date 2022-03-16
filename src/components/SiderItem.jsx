import { Link } from "react-router-dom"

export const SiderItem = ({text, link}) => {
    return (
        <Link to={link} className="h-9 border-b-2 border-b-base-300 flex items-center justify-center w-full">
            <span className="text-base-400 font-montserrat hover:text-blue-100 ease-in duration-100">{text}</span>
        </Link>
    )
}
