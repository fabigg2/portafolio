import { useContext, useEffect } from "react"
import context from "../context/context"
import { getLocalImages } from "../utils/helpers"
import { Logo } from "./Logo"
import { SiderItem } from "./SiderItem"

export const Sider = ({show, setShow}) => {
    const [state] = useContext(context);

    useEffect(() => {
      console.log(state);
    }, [state])
    
    return (
        <div className={`z-20 md:w-36 w-4/5 bg-base-200 min-h-screen flex flex-col items-center p-2 md:p-0 fixed ease-in-out duration-700 ${!show ? 'left-[-80%]' : ' left-0'} md:left-0`}>
            
            <Logo />
            {
                state && state.nav.map(item=>(
                    <SiderItem link={item.link} text={item.title} setShow={setShow} />
                ))
            }

            <div className="flex flex-col w-full h-min content-center items-center pt-12 gap-2 ">
                <a href="https://www.facebook.com/fgarces2" className="text-base-400 h-8 w-8 hover:opacity-70 ease-in duration-300" target="_blank">
                    <img src={getLocalImages('./facebook.svg')} alt="facebook link" />
                </a>
                <a href="https://github.com/fabigg2" className="text-base-400 h-8 w-8 hover:opacity-70 ease-in duration-300" target="_blank">
                    <img src={getLocalImages('./github.svg')} alt="" />
                </a>
                <a href="http://www.linkedin.com/in/fggarces2" className="text-base-400 h-8 w-8 hover:opacity-70 ease-in duration-300" target="_blank">
                    <img src={getLocalImages('./linkedin.svg')} alt="" />
                </a>
                <a href="https://www.youtube.com/channel/UCjreJVwqtxhc5mD-nYLqpgA" className="text-base-400 h-8 w-8 hover:opacity-70 ease-in duration-300" target="_blank">
                    <img src={getLocalImages('./youtube.svg')} alt="youtube link" />
                </a>
            </div>

        </div>
    )
}
