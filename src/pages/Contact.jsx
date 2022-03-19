import { useContext } from "react";
import { useForm } from 'react-hook-form';
import { useMutation } from "react-query";
import { CharginModal } from "../components/CharginModal";
import { Paragraf } from "../components/Paragraf"
import { Loading } from "../components/ui/load/loiding";
import context from "../context/context";
import { messageRepository } from "../repository/message";

export const Contact = () => {
    const [state] = useContext(context);

    const { mutate, isLoading, isSuccess, isError } = useMutation(data => messageRepository.create(data));
    const { register, handleSubmit, reset } = useForm();


    const sendMessage = (data) => {
        console.log(data);
        mutate(data, {
            onSuccess: async () => {
                reset();
            },
            onError: async () => {
            }

        })
    }

    return (
        <div className=" p-8 md:p-12 w-fullm flex flex-col md:flex-row  h-full overflow-x-hidden gap-5">
            {
                isLoading && <CharginModal>
                    <Loading />
                </CharginModal>
            }
            <div className="flex flex-col gap-3 w-full  md:w-1/2 font-montserrat font-semibold">
                <h2 className=" text-5xl md:text-7xl title-gradinet p-2">{state.section.contact.content.titles[0]}</h2>
                {
                    state.section.contact.content.paragraf.map((paragraf, id) => (
                        <Paragraf key={id}>{paragraf}</Paragraf>
                    ))
                }
            </div>

            <div className=" bg-base-100 w-full md:w-1/2 md:h-full flex justify-center content-center z-10">
                <form onSubmit={handleSubmit(sendMessage)} className="w-full flex flex-col gap-5 shadow p-6 rounded-md " >
                    {
                        isSuccess && <h2 className=" border-[1px] border-[#007000] p-1 text-l text-center text-[#007000]">Su mensaje ha sido enviado</h2>
                    }
                    {
                        isError && <h2 className=" border-[1px] border-[#d31313] p-1 text-l text-center text-[#d31313]">Su mensaje ha sido enviado</h2>
                    }
                    <div className="w-full flex flex-col md:flex-row gap-2">
                        <div className="w-full">
                            <span className=" text-base-600">Nombre:</span>
                            <input
                                {...register("name", { required: true })}
                                type="text"
                                className=" shadow-f block w-full bg-base-600 p-2 rounded-md outline-none font-montserrat text-base font-semibold  text-base-250" />
                        </div>
                        <div className="w-full text-base-600">
                            <span>Email:</span>
                            <input {...register("email", { required: true })}
                                type="emal"
                                className="shadow-f  block w-full bg-base-600 p-2 rounded-md outline-none font-montserrat text-base font-semibold  text-base-250" />
                        </div>
                    </div>

                    <div className="w-full text-base-600">
                        <span>Asunto: </span>
                        <input
                            type="text"
                            autoComplete="off"
                            {...register("subject", { required: true })}
                            className="shadow-f  block w-full bg-base-600 p-2 rounded-md outline-none font-montserrat text-base font-semibold  text-base-250" />
                    </div>


                    <div className="w-full text-base-600">
                        <span className="block">Mensaje:</span>
                        <textarea
                            {...register("msg", { required: true })}
                            className="shadow-f w-full h-[200px] rounded-lg bg-base-600 p-2 outline-none font-montserrat text-base font-semibold  text-base-250"></textarea>
                    </div>

                    <div>
                        <button type="sumit" href="/" className="mt-3 rounded-lg p-1 bg-gradient-to-r from-blue-200 via-blue-100 to-blue-200 inline-block border-none outline-none">
                            <div className=" bg-base-100 rounded-lg pr-4 pl-4 pt-1 pb-1 inline-block text-sm text-blue-100">
                                Enviar
                            </div>
                        </button>
                    </div>

                </form>

            </div>
        </div>
    )
}
