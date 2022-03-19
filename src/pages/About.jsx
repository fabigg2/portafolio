import { useContext } from "react"
import { Paragraf } from "../components/Paragraf"
import { CircleAnimation } from "../components/ui/circle-animation"
import context from "../context/context"


export const About = () => {
  const [state] = useContext(context);


  return (
    <div className=" p-12 w-fullm flex flex-col md:flex-row gap-20 md:gap-2 h-full justify-around overflow-x-hidden">
      <div className="flex flex-col gap-3 w-full  md:w-2/4 font-montserrat font-semibold">
        <h2 className=" text-5xl md:text-7xl title-gradinet p-2">{state.section.about.content.titles[0]}</h2>
        {
          state.section.about.content.paragraf.map((paragraf, id) => (
            <Paragraf key={id}>{paragraf}</Paragraf>
          ))
        }
      </div>
      <CircleAnimation />
    </div>
  )
}
