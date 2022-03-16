import { Paragraf } from "../components/Paragraf"
import { getLocalImages } from "../utils/helpers"

export const Works = () => {
    return (
        <div className=" p-3 sm:p-8 md:p-12 w-full flex flex-col h-full gap-12">
            <div className="flex flex-col gap-3 w-full font-montserrat font-semibold ">
                <h2 className=" text-4xl md:text-5xl lg:text-6xl title-gradinet p-2">Trabajos</h2>
                <Paragraf>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet quibusdam vero neque esse aliquid ab, quasi perferendis molestias totam perspiciatis beatae omnis at quae quas tenetur accusamus doloribus deleniti autem?
                </Paragraf>
            </div>

            <div className="w-full md:p-3 flex flex-wrap gap-8">
                <div className=" w-full h-[200px]  md:w-[450px] md:h-[300px] bg-base-400 rounded-xl relative overflow-hidden border-base-400 border-4">

                    <img src={getLocalImages('./chatapp.png')} className="absolute top-0 left-0 w-full h-full" alt="" />

                    <div className="absolute h-full w-2/3 bg-[#000000dd] right-0 gap-2 p-4 ">
                        <h3 className="title-gradinet font-montserrat font-semibold text-lg">Chatapp</h3>
                        <p className=" h-[60%] w-full text-justify overflow-hidden overflow-ellipsis whitespace-normal font-montserrat font-normal text-sm text-white-100">Lorem ipsum dolor ll lfd lafd lafjlakd alfjaldfj la fdlafd al faldkal falkdalkdf aldfk aldfkal dflakdf lakfdlkaslf dk la sdlfkadlkfa dflkflkalfklasf aslfkdalsdkflafd alfkdladkfalsdfklaskdfl a falkdlf ladkflasdkfla fadklfalfdk fs lsfl li  sl  fl s ls fg slg  sl sit amet consectetur adipisicing elit. Sequi vitae nulla accusantium quos neque hic sed modi id minima beatae quaerat odio repudiandae saepe consectetur, repellat ullam repellendus voluptatibus expedita!</p>
                        <a href="/" className="mt-3 rounded-lg p-1 bg-gradient-to-r from-blue-200 via-blue-100 to-blue-200 inline-block">
                            <div className=" bg-base-100 rounded-lg pr-2 pl-2 pt-1 pb-1 inline-block text-sm text-blue-100">
                                Go to this app
                            </div>
                        </a>
                    </div>
                </div>
            </div>

        </div>
    )
}
