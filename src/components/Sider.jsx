import { getLocalImages } from "../utils/helpers"
import { Logo } from "./Logo"
import { SiderItem } from "./SiderItem"

export const Sider = ({show}) => {
    return (
        <div className={`z-20 md:w-36 w-4/5 bg-base-200 min-h-screen flex flex-col items-center p-2 md:p-0 fixed ease-in-out duration-700 ${!show ? 'left-[-80%]' : ' left-0'} md:left-0`}>
            
            <Logo />

            <SiderItem link="/about" text="About" />
            <SiderItem link="/skills" text="Habilidades" />
            <SiderItem link="/works" text="Trabajos" />
            <SiderItem link="/contact" text="Contacto" />

            <div className="flex flex-col w-full h-min content-center items-center pt-12 gap-2 ">
                <a href="/" className="text-base-400 h-8 w-8 hover:opacity-70">
                    <img src={getLocalImages('./facebook.svg')} alt="" />
                </a>
                <a href="/" className="text-base-400 h-8 w-8 hover:opacity-70 ease-in duration-300">
                    <img src={getLocalImages('./github.svg')} alt="" />
                </a>
                <a href="/" className="text-base-400 h-8 w-8 hover:opacity-70">
                    <img src={getLocalImages('./linkedin.svg')} alt="" />
                </a>
                <a href="/" className="text-base-400 h-8 w-8 hover:opacity-70">
                    <img src={getLocalImages('./youtube.svg')} alt="" />
                </a>
            </div>

        </div>
    )
}
