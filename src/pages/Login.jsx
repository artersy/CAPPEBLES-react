import { useNavigate } from "react-router-dom"

import Header from "../components/Header"
import Footer from "../components/Footer"



function Login() {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-[linear-gradient(to_top_right,#03448C,#19B48E)] text-white">

            <Header />

            <div className="flex flex-col items-center justify-center text-center px-6 pt-24">

                <h1 className="text-9xl md:text-8xl font-black leading-none mt-4">
                    LOGIN
                </h1>

                <p className="max-w-xl mt-6 text-sm md:text-base text-white/90 text-lg">
                    Please enter your credentials to access your account.
                </p>

                <input
                    type="text"
                    placeholder="Email"
                    className="flex-1 px-5 py-3 my-3 rounded-2xl bg-[#C0F2F1] text-[#03448C] placeholder-[#03448C]/60 outline-none shadow-md"
                />

                <input
                    type="password"
                    placeholder="Password"
                    className="flex-1 px-5 py-3 my-3 rounded-2xl bg-[#C0F2F1] text-[#03448C] placeholder-[#03448C]/60 outline-none shadow-md"
                />

                <button className="bg-[#19B48E] px-6 py-3 rounded-xl font-semibold hover:scale-105 transition"
                onClick={() => navigate("/home")}>
                    Login
                </button>



            </div>

            {/* <Footer /> */}

        </div>
    )
}

export default Login