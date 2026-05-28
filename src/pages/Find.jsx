import { useNavigate } from "react-router-dom"
import Header2 from "../components/Header2"
import Footer from "../components/Footer"

import '../utility/utility.css'
import { capstones } from '../data/data'

import FindModal from "../components/FindModal"
import SearchBar from "../components/SearchBar"

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { useState } from "react"

function Find() {
    const [title, setTitle] = useState('Suggestions')
    const [selected, setSelected] = useState(null)
    const [openModal, setOpenModal] = useState(false)
    const [openSearchBar, setOpenSeachBar] = useState(false)
    const navigate = useNavigate();

    useGSAP(() => {
        gsap.from('#Test', {
            x: -400,
            duration: 1.5,
            opacity: 0
        })

        gsap.from('.group-box', {
            y: -100,
            duration: 0.5,
            opacity: 0,
            stagger: 0.09
        })
    })

    useGSAP(() => {
        if (selected) {
            gsap.from(".container-item", {
                y: 500,
                opacity: 0,
                duration: 0.5,
                stagger: 0.010
            })
        }
    }, [selected])

    const handleMouseEnter = (e) => {
        gsap.to(e.currentTarget, {
            scale: 1.05,
            x: 30,
            duration: 0.2
        })
    }

    const handleMouseLeave = (e) => {
        gsap.to(e.currentTarget, {
            scale: 1,
            x: 0,
            duration: 0.2
        })
    }

    const handleOnclick = (item, e) => {
        const items = gsap.utils.toArray('.item')

        setSelected(item.id)

        const unclick = items.filter(el => el !== e.currentTarget)

        gsap.to(unclick, {
            x: -100,
            scale: 1,
            opacity: 0,
            duration: 0.3
        })

        gsap.to(e.currentTarget, {
            backgroundColor: "#AAA8A8",
            x: 30,
            color: "#2C2C2C",
            scale: 1.05,
            duration: 0.3,
        })

        gsap.to("#Test", {
            opacity: 0,
            duration: 0.2,
            onComplete: () => {
                setTitle("FIND GROUP")

                gsap.to("#Test", {
                    opacity: 1,
                    duration: 0.3
                })
            }
        })
    }

    return (
        <div className="min-h-screen bg-[linear-gradient(to_top_right,#03448C,#19B48E)] text-white">
            <Header2 />

            <div className="section-margin-x flex flex-col lg:flex-row items-center justify-center text-center px-4 sm:px-6 pt-20 sm:pt-24 gap-8 md:gap-20">

                <div className="flex-1 bg-transparent flex flex-col gap-4 sm:gap-5 w-full">
                    <h1
                        id="Test"
                        className="text-white font-bold text-start text-[1.25rem] sm:text-[1.875rem] mb-2"
                    >{title}</h1>
                    {capstones.map((item) => (
                        <div
                            key={item.id}
                            className="group-box item bg-white h-12 text-black rounded-2xl flex justify-between items-center px-4 sm:px-7 cursor-pointer"
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                            onClick={(e) => handleOnclick(item, e)}
                        >
                            <h1 className="font-bold text-[1.125rem] sm:text-[1.5rem] truncate">
                                {item.title}
                            </h1>

                            <img
                                className="h-8 w-8 sm:h-10 sm:w-10 object-cover flex-shrink-0"
                                src="/arrow.png"
                                alt="arrow"
                            />
                        </div>
                    ))}
                </div>

                {openModal && (
                    <FindModal openModal={openModal} setOpenModal={setOpenModal} />
                )}

                <div className="right-dev flex-1 flex flex-col items-start w-full">

                    {openSearchBar && (
                        <SearchBar openSearchBar={openSearchBar} setOpenSeachBar={setOpenSeachBar} />
                    )
                    }
                    {selected ? (
                        <div className="flex flex-col container-item w-full">
                            <input
                                className="search-bar w-full max-w-[25rem] h-[3rem] bg-amber-50 rounded-xl text-black p-3 focus:outline-none text-[0.875rem] sm:text-[1rem]"
                                placeholder="Search..."
                                onClick={() => setOpenSeachBar(true)}
                            />
                            <div className="flex items-start flex-col container-item w-full">
                                <div className="bg-white p-4 sm:p-[2rem] my-[1rem] border border-black rounded-2xl w-full">
                                    <div className="max-w-md w-full bg-white text-left">
                                        <h1 className="text-black font-bold mb-2 text-[1.125rem] sm:text-[1.25rem]">Group Description:</h1>
                                        <p className="text-gray-700 text-[0.875rem] sm:text-[1rem]">
                                            A group that aims to help reading comprehension.
                                        </p>
                                    </div>

                                    <div className="w-full bg-white mt-4">
                                        <h1 className="text-black font-bold mb-4 text-[1.125rem] sm:text-[1.25rem]">Group Requirements:</h1>
                                        <ul className="list-disc list-inside text-black space-y-2 text-left text-[0.875rem] sm:text-[1rem]">
                                            <li>UI/UX Developer</li>
                                            <li>Back-End Developer</li>
                                            <li>Java Background</li>
                                            <li>Database</li>
                                        </ul>
                                    </div>

                                    <button
                                        className="bg-black text-white py-3 px-6 rounded-lg w-full sm:w-auto sm:min-w-[20rem] hover:bg-gray-800 transition-colors text-[0.875rem] sm:text-[1rem] font-medium"
                                        onClick={() => setOpenModal(true)}
                                    >
                                        Apply
                                    </button>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="right-dev flex-1 w-full">

                            <div className="flex items-start flex-col">
                                <div className="mb-8 sm:mb-15 flex items-start flex-col">
                                    <h1 className="text-[3rem] sm:text-[4rem] md:text-[8rem] font-bold leading-tight">
                                        Find
                                    </h1>
                                    <h1 className="text-[3rem] sm:text-[4rem] md:text-[8rem] font-bold leading-tight">
                                        Group
                                    </h1>
                                </div>

                                <input
                                    className="search-bar w-full max-w-[25rem] h-[3rem] bg-amber-50 rounded-xl text-black p-3 focus:outline-none text-[0.875rem] sm:text-[1rem]"
                                    onClick={() => setOpenSeachBar(true)}
                                    placeholder="Search groups..."
                                />
                            </div>
                        </div>
                    )}
                </div>
            </div>
            {/* <Footer /> */}
        </div>
    )
}

export default Find