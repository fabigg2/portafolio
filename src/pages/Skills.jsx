import { useContext } from "react";
import { useQuery } from "react-query";
import { Paragraf } from "../components/Paragraf";
import { SkillItem } from "../components/SkillItem";
import { Loading } from "../components/ui/load/loiding";
import context from "../context/context";
import { techRepository } from "../repository/tech";

export const Skills = () => {

  const { data, isLoading, isSuccess } = useQuery('tech', techRepository.findAll);

  const [state] = useContext(context);



  return (
    <div className="p-12 w-fullm flex flex-col md:flex-row h-full overflow-x-hidden gap-12 md:gap-14 lg:gap-24">
      <div className="flex flex-col gap-3 w-full  md:w-2/4 font-montserrat font-semibold ">
        <h2 className=" text-4xl md:text-5xl lg:text-6xl title-gradinet p-2">{state.section.skills.content.titles[0]}</h2>

        {
          state.section.skills.content.paragraf.map((paragraf, id) => (
            <Paragraf key={id}>{paragraf}</Paragraf>
          ))
        }
      </div>

      <div className="w-full  md:max-h-[500px] md:h-full md:overflow-y-scroll flex flex-col gap-3 md:p-3 scroll relative">
        {
          isLoading && <Loading />
        }
        {
          isSuccess && data.data.data.map(({ name, color, img }) => (
            <SkillItem name={name} image={img} color={color} />
          ))
        }

      </div>
    </div>
  )
}
