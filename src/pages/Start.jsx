import { useNavigate } from "react-router-dom"

import Header from "../components/Header"
import Footer from "../components/Footer"



function Start() {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-[linear-gradient(to_top_right,#03448C,#19B48E)] text-white">

            <Header />

            <div className="flex flex-col items-center justify-center text-center px-6 pt-24">

                <h1 className="text-9xl md:text-8xl font-black leading-none mt-4">
                    Welcome back!
                </h1>
                <h1 className="text-9xl md:text-8xl font-black leading-none mt-4">
                    Cap Pebles
                </h1>

                <p className="max-w-xl mt-6 text-sm md:text-base text-white/90 text-lg">
                Ready to manage your capstone journey? Log In or  get started to create your account.                
                </p>

                <div className="flex gap-4 mt-10">
                    <button className="bg-[#C0F2F1] text-[#12908E] px-6 py-3 rounded-xl font-semibold hover:scale-105 transition"
                    onClick={() => navigate("/signup")}>
                        Get Started
                    </button>

                    <button className="bg-[#19B48E] text-white px-6 py-3 rounded-xl font-semibold hover:scale-105 transition"
                    onClick={() => navigate("/login")}>
                        Log In
                    </button>
                </div>

            </div>

            {/* <Footer /> */}

        </div>
    )
}

export default Start