import { useContext } from "react"
import { useQuery } from "react-query"
import { Paragraf } from "../components/Paragraf"
import { Loading } from "../components/ui/load/loiding"
import { WorkItem } from "../components/WorkItem"
import context from "../context/context"
import { workRepository } from "../repository/work"

export const Works = () => {
    const { data, isLoading, isSuccess } = useQuery('work', workRepository.findAll);
    const [state] = useContext(context);


    return (
        <div className=" p-3 sm:p-8 md:p-12 w-full flex flex-col h-full gap-12">
            <div className="flex flex-col gap-3 w-full font-montserrat font-semibold ">
                <h2 className=" text-4xl md:text-5xl lg:text-6xl title-gradinet p-2">{state.section.works.content.titles[0]}</h2>

                {
                    state.section.works.content.paragraf.map((paragraf, id) => (
                        <Paragraf key={id}>{paragraf}</Paragraf>
                    ))
                }
            </div>

            <div className="w-full md:p-3 flex flex-wrap gap-8 relative">
                {
                    isLoading && <Loading />
                }
                {
                    isSuccess && data.data.data.map((work) => (
                        <WorkItem {...work} />
                    ))
                }
            </div>

        </div>
    )
}
