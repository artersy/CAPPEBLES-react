import { useNavigate } from "react-router-dom"

import Header2 from "../components/Header2"
import Footer from "../components/Footer"



function EditProfile() {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-[linear-gradient(to_top_right,#03448C,#19B48E)] text-white">

            <Header2 />

            <div className="flex flex-col items-center justify-center text-center px-6 pt-24">

                <h1 className="text-9xl md:text-8xl font-black leading-none mt-4">
                    EDIT PROFILE
                </h1>

                <p className="max-w-xl mt-6 text-sm md:text-base text-white/90 text-lg">
                    View and manage your profile information here.
                </p>

                <button className="bg-[#19B48E] px-6 py-3 rounded-xl font-semibold hover:scale-105 transition"
                onClick={() => navigate("/profile")}>
                    Go back to Profile
                </button>

            </div>

            {/* <Footer /> */ }

        </div >
    )
}

export default EditProfile