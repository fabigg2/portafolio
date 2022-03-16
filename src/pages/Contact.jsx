
export const Contact = () => {
    return (
        <div className=" p-8 md:p-12 w-fullm flex flex-col md:flex-row  h-full overflow-x-hidden gap-5">
            <div className="flex flex-col gap-3 w-full  md:w-1/2 font-montserrat font-semibold">
                <h2 className=" text-5xl md:text-7xl title-gradinet p-2">Contacto</h2>
                <p className=" font-montserrat font-normal text-l text-white-100">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi vitae nulla accusantium quos neque hic sed modi id minima beatae quaerat odio repudiandae saepe consectetur, repellat ullam repellendus voluptatibus expedita!</p>
            </div>

            <div className=" bg-base-100 w-full md:w-1/2 md:h-full flex justify-center content-center z-10">
                <form className="w-full flex flex-col gap-5 shadow p-6 rounded-md " >
                    <div className="w-full flex flex-col md:flex-row gap-2">
                        <div className="w-full">
                            <span className=" text-base-600">Nombre:</span>
                            <input type="text" className="block w-full bg-base-600 p-2 rounded-md outline-none font-montserrat text-base font-semibold  text-base-250" />
                        </div>
                        <div className="w-full text-base-600">
                            <span>Email:</span>
                            <input type="emal" className="block w-full bg-base-600 p-2 rounded-md outline-none font-montserrat text-base font-semibold  text-base-250" />
                        </div>
                    </div>
                    <div className="w-full text-base-600">
                        <span>Asunto: </span>
                        <input type="text" className="block w-full bg-base-600 p-2 rounded-md outline-none font-montserrat text-base font-semibold  text-base-250" />
                    </div>
                    <div className="w-full text-base-600">
                        <span className="block">Mensaje:</span>
                        <textarea className="w-full h-[200px] rounded-lg bg-base-600 p-2 outline-none font-montserrat text-base font-semibold  text-base-250"></textarea>
                    </div>
                    <div>
                        <a href="/" className="mt-3 rounded-lg p-1 bg-gradient-to-r from-blue-200 via-blue-100 to-blue-200 inline-block">
                            <div className=" bg-base-100 rounded-lg pr-4 pl-4 pt-1 pb-1 inline-block text-sm text-blue-100">
                                Enviar
                            </div>
                        </a>
                    </div>
                </form>

            </div>
        </div>
    )
}
