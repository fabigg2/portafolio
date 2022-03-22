import { useContext } from "react";
import { TitleWithHover } from "../components/TitleWithHover"
import context from "../context/context";

export const Home = () => {
    const [state] = useContext(context);

    return (
        <div className=" w-full h-full p-12 md:p-16 lg:p-20">
            <div className=" flex flex-col gap-5 mb-14">
                {
                    state.section.home.content.titles.map((ms, id)=>(
                        <TitleWithHover title={ms} key={id} />
                    ))
                }
                
            </div>
            <a href="/contact" className=" rounded-lg p-1 bg-gradient-to-r from-blue-200 via-blue-100 to-blue-200 inline-block">
                <div className=" bg-base-100 rounded-lg pr-3 pl-3 pt-1 pb-1 inline-block text-lg text-blue-100">
                    Contáctame
                </div>
            </a>
        </div>
    )
}
