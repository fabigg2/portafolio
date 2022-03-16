export const TitleWithHover = ({ title }) => {
    return (
        <h2 className=" font-montserrat text-base-500 font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-7xl">
            {title.split('').map((letter, index) => (
                <span key={index} className=" hover:text-blue-100 ease-in-out duration-300 ">{letter}</span>
            ))}
        </h2>
    )
}
