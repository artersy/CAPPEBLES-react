import React, { useState } from 'react'

import { capstones } from '../data/data'
import { useNavigate } from 'react-router-dom'

import { gsap } from 'gsap'
import FindModal from '../components/FindModal'

function SearchBar({ openSearchBar, setOpenSeachBar }) {
    const navigate = useNavigate()

    const [activeId, setActiveId] = useState(null)
    const [openModal, setOpenModal] = useState(false)

    const ExpandHandler = (e, id) => {
        const arrow = e.currentTarget.querySelector('.arrow')
        const description = e.currentTarget.querySelector('.container')

        const isOpen = activeId === id

        if (!isOpen) {
            gsap.to(e.currentTarget, {
                height: '150px',
                duration: 0.5,
                ease: 'power1.inOut',
                background: '#B3A9A9'
            })

            gsap.to(arrow, {
                rotate: 180,
                duration: 0.5
            })

            gsap.set(description, { display: 'block' })

            gsap.fromTo(
                description,
                {
                    opacity: 0,
                    y: -10
                },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.4,
                    ease: 'power2.out'
                }
            )

            setActiveId(id)
        } else {
            gsap.to(description, {
                opacity: 0,
                y: -10,
                duration: 0.2,
                onComplete: () => {
                    gsap.set(description, { display: 'none' })
                }
            })

            gsap.to(e.currentTarget, {
                height: '50px',
                duration: 0.5,
                background: '#D9D9D9'
            })

            gsap.to(arrow, {
                rotate: 0,
                duration: 0.5
            })

            setActiveId(null)
        }
    }

    return (
        <>
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
                    relative
                    w-full
                    max-w-[95%]
                    sm:max-w-[32rem]
                    md:max-w-[38rem]
                    lg:max-w-[42rem]
                    bg-[#eaf4f4]
                    rounded-2xl
                    p-5
                    sm:p-8
                    shadow-2xl
                    "
                >
                    <button
                        onClick={() => setOpenSeachBar(false)}
                        className="
                        absolute
                        top-4
                        right-4
                        text-3xl
                        text-black
                        hover:scale-110
                        duration-200
                        "
                    >
                        ×
                    </button>

                    <div
                        className="
                        flex
                        flex-col
                        sm:flex-row
                        gap-3
                        mt-8
                        "
                    >
                        <input
                            type="text"
                            placeholder="Stone"
                            className="
                            flex-1
                            border
                            border-gray-400
                            rounded-md
                            px-3
                            py-2
                            outline-none
                            text-[#0e9995]
                            font-semibold
                            bg-white
                            text-sm
                            sm:text-base
                            "
                        />

                        <button
                            className="
                            bg-[#0e9995]
                            text-white
                            px-6
                            py-2
                            rounded-md
                            hover:scale-105
                            duration-200
                            text-sm
                            sm:text-base
                            "
                        >
                            Search
                        </button>
                    </div>

                    <div
                        className="
                        w-full
                        h-[1px]
                        bg-[#0e9995]
                        opacity-40
                        my-6
                        "
                    />

                    <div>
                        <h2
                            className="
                            text-gray-500
                            mb-4
                            text-sm
                            sm:text-base
                            "
                        >
                            Results:
                        </h2>

                        <div className="flex flex-col gap-3">
                            {capstones.map((item) => (
                                <div
                                    key={item.id}
                                    className="
                                    capstone-search-bar-title
                                    flex
                                    justify-between
                                    items-start
                                    bg-[#D9D9D9]
                                    p-3
                                    rounded-lg
                                    overflow-hidden
                                    cursor-pointer
                                    "
                                    onClick={(e) =>
                                        ExpandHandler(e, item.id)
                                    }
                                >
                                    <div className="flex flex-col items-start">
                                        <h1 className="font-bold text-[1rem]">
                                            {item.title}
                                        </h1>

                                        <div
                                            className="container flex flex-col w-full"
                                            style={{ display: 'none' }}
                                        >
                                            <p className="mt-2 text-sm text-gray-700">
                                                {item.description}
                                            </p>

                                            <div className="flex justify-end mt-2">
                                                <button
                                                    className="
                                                    bg-[#12908E]
                                                    p-3
                                                    rounded-2xl
                                                    text-white
                                                    "
                                                    onClick={(e) => {
                                                        e.stopPropagation()
                                                        setOpenModal(true)
                                                    }}
                                                >
                                                    Join Group
                                                </button>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="w-6 h-6">
                                        <img
                                            className="
                                            h-full
                                            w-full
                                            object-fill
                                            arrow
                                            "
                                            src="/arrowdown.png"
                                            alt="arrow"
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

  
            {openModal && (
                <FindModal
                    openModal={openModal}
                    setOpenModal={setOpenModal}
                />
            )}
        </>
    )
}

export default SearchBar