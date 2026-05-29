import React from 'react'

import { Navigate, useNavigate } from 'react-router-dom'

function SuccessModal({ openModal,setOpenModal}) {
    const navigate = useNavigate()

    const navigaHandler = () =>{
        navigate('/home')
    }

    return (
        <div
            className="
                fixed
                inset-0
                bg-black/40
                backdrop-blur-sm
                flex
                justify-center
                items-center
                z-50
                px-4
            "
        >
            <div
                className="
                    w-full
                    max-w-[95%]
                    sm:max-w-[30rem]
                    md:max-w-[34rem]
                    bg-[#eaf4f4]
                    rounded-2xl
                    px-6
                    py-8
                    shadow-2xl
                    text-center
                "
            >
                <h1
                    className="
                        text-[#0e9995]
                        font-bold
                        text-xl
                        sm:text-2xl
                    "
                >
                    Application Submitted
                </h1>
                <div
                    className="
                        w-full
                        h-[1px]
                        bg-[#0e9995]
                        my-4
                        opacity-50
                    "
                />
                <p
                    className="
                        text-[#0e9995]
                        text-sm
                        sm:text-base
                    "
                >
                    Your application for Stone Cap has been
                    successfully submitted.
                </p>
                <button
                    onClick={() => navigaHandler()}
                    className="
                        mt-6
                        bg-[#0e9995]
                        text-white
                        px-8
                        py-2
                        rounded-xl
                        hover:scale-105
                        duration-200
                    "
                >
                    Close
                </button>

            </div>
        </div>
    )
}

export default SuccessModal