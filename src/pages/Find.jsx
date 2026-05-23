import { useNavigate } from "react-router-dom"

import Header2 from "../components/Header2"
import Footer from "../components/Footer"



function Find() {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-[linear-gradient(to_top_right,#03448C,#19B48E)] text-white">

            <Header2 />

            <div className="flex flex-col items-center justify-center text-center px-6 pt-24">

                <h1 className="text-9xl md:text-8xl font-black leading-none mt-4">
                    FIND GROUP
                </h1>

                <p className="max-w-xl mt-6 text-sm md:text-base text-white/90 text-lg">
                    Through this feature, students can create a group by providing important details such as the group name, project description, and the number of members required.
                </p>

                <div className="mt-6 flex gap-3 w-full max-w-md">

                    <input
                        type="text"
                        placeholder="Search for groups..."
                        className="flex-1 px-5 py-3 rounded-2xl bg-[#C0F2F1] text-[#03448C] placeholder-[#03448C]/60 outline-none shadow-md"
                    />

                    <button className="bg-[#19B48E] px-6 py-3 rounded-xl font-semibold hover:scale-105 transition">
                        Search
                    </button>

                </div>

            </div>

            {/* <Footer /> */}

        </div>
    )
}

export default Find