export const WorkItem = ({ title, description, url, img }) => {
    return (
        <div className=" w-full h-[200px]  md:w-[450px] md:h-[300px] bg-base-400 rounded-xl relative overflow-hidden border-base-400 border-4">

            <img src={img} className="absolute top-0 left-0 w-full h-full" alt="" />

            <div className="absolute h-full w-2/3 bg-[#000000dd] right-0 gap-2 p-4 ">
                <h3 className="title-gradinet font-montserrat font-semibold text-lg">{title}</h3>
                <p className=" h-[60%] w-full text-justify overflow-hidden overflow-ellipsis whitespace-normal font-montserrat font-normal text-sm text-white-100">{description}</p>
                <a href={url} className="mt-3 rounded-lg p-1 bg-gradient-to-r from-blue-200 via-blue-100 to-blue-200 inline-block">
                    <div className="hover:bg-base-400 bg-base-100 rounded-lg pr-2 pl-2 pt-1 pb-1 inline-block text-sm text-blue-100">
                        Ver proyecto
                    </div>
                </a>
            </div>
        </div>
    )
}
