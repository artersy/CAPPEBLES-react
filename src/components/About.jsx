import { useNavigate } from "react-router-dom"

import Header from "../components/Header"
import Footer from "../components/Footer"



function About() {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-[linear-gradient(to_top_right,#03448C,#19B48E)] text-white">

            <Header />

            <div className="flex flex-col items-center justify-center text-center px-6 pt-24">

                <h1 className="text-9xl md:text-8xl font-black leading-none mt-4">
                    ABOUT
                </h1>

                <p className="max-w-xl mt-6 text-sm md:text-base text-white/90 text-lg">
                    This is the About page. Here you can find information about our project, team, and mission.
                </p>
            </div>

            {/* <Footer /> */}

        </div>
    )
}

export default About