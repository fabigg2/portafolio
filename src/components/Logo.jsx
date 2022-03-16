import { Link } from "react-router-dom"
import { getLocalImages } from "../utils/helpers"

export const Logo = () => {

    return (
        <Link to='/' className="w-36 h-48 mb-3 md:w-full bg-base-250 flex flex-col p-2 justify-center items-center gap-1">
            <img src={getLocalImages('./logo.png')} alt="logo" className="w-4/5" />
            <h4 className="text-base-400 font-montserrat font-medium">Fabian G.</h4>
        </Link>
    )
}
