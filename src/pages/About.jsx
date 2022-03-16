import { Paragraf } from "../components/Paragraf"
import { CircleAnimation } from "../components/ui/circle-animation"


export const About = () => {
  return (
    <div className=" p-12 w-fullm flex flex-col md:flex-row gap-20 md:gap-2 h-full justify-around overflow-x-hidden">
      <div className="flex flex-col gap-3 w-full  md:w-2/4 font-montserrat font-semibold">
        <h2 className=" text-5xl md:text-7xl title-gradinet p-2">¿Quien soy?</h2>
        <Paragraf>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat id omnis quidem dolores quibusdam nihil dolorem, nam consectetur. Id pariatur eum sit perspiciatis ea possimus consequatur recusandae autem rerum at!
        </Paragraf>
        <Paragraf>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam quam corporis, sed sapiente aut quod consectetur incidunt id officia reiciendis amet, iure ipsam corrupti! Officiis, inventore error. Velit, exercitationem quia!
        </Paragraf>
      </div>
      <CircleAnimation />
    </div>
  )
}
