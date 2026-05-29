import { useNavigate } from "react-router-dom";
import { useState } from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Register from "../components/Register";
import About from "../components/About";

import creates from "../assets/create.png";
import find from "../assets/find.png";

function Landing() {
    const navigate = useNavigate();

    const [showAbout, setShowAbout] = useState(false);
    const [showRegister, setShowRegister] = useState(false);

    return (
        <div className="min-h-screen bg-[linear-gradient(to_top_right,#03448C,#19B48E)] text-white">

            <Header onOpenAbout={() => setShowAbout(true)} />
            <About
                isOpen={showAbout}
                onClose={() => setShowAbout(false)}
            />
            {!showRegister ? (
                <>
                    <div className="flex flex-col items-center justify-center text-center px-6 pt-24">

                        <h2 className="text-4xl font-bold uppercase">
                            Welcome to
                        </h2>

                        <h1 className="text-9xl font-black leading-none mt-4">
                            CAP PEBBLES
                        </h1>

                        <p className="max-w-xl mt-6 text-lg text-white/90">
                            Ready to manage your capstone journey? Log in or get started to create your account.
                        </p>

                        <div className="flex gap-4 mt-10">
                            <button
                                className="bg-[#C0F2F1] text-[#12908E] px-6 py-3 rounded-xl font-semibold hover:scale-105 transition"
                                onClick={() => setShowRegister(true)}
                            >
                                Get Started
                            </button>

                            <button
                                className="bg-[#19B48E] text-white px-6 py-3 rounded-xl font-semibold hover:scale-105 transition"
                                onClick={() => navigate("/home")}
                            >
                                Log In
                            </button>
                        </div>
                    </div>

                    <div className="mt-20 px-5 text-center bg-white/30 py-12">
                        <p className="max-w-5xl mx-auto mt-4 text-white/90 pb-5 text-lg">
                            The CapPebbles Web-Based Capstone Group management and information System is a web-based platform designed to monitor, manage, and advise all aspects of the IT Capstone Group. The System will serve as the official digital domain where all students, advisors, and administrators can engage simultaneously.
                        </p>
                        <h2 className="text-5xl font-bold mt-10"> Our Features </h2>
                        <p className="max-w-2xl mx-auto mt-4 text-white/90 text-lg"> These tools allow students to find groups or create their own, helping them in their academic projects.
                        </p>

                        <div className="flex flex-col gap-6 items-center mt-10">

                            <div className="w-full max-w-4xl bg-[#bff3f5] rounded-2xl p-6 flex items-center gap-6 shadow-md">
                                <div className="flex flex-col items-center min-w-[120px]">
                                    <div className="text-2xl font-black text-[#0a4a6b]">
                                        CREATE
                                    </div>
                                    <img src={creates} className="w-16 h-16 mt-2" />
                                </div>
                                <p className="text-[#0a4a6b]"> Through this feature, students can create a group by providing important details such as group name, project description, and number of members required. </p>
                            </div>

                            <div className="w-full max-w-4xl bg-[#bff3f5] rounded-2xl p-6 flex items-center gap-6 shadow-md">
                                <div className="flex flex-col items-center min-w-[120px]">
                                    <div className="text-2xl font-black text-[#0a4a6b]">
                                        FIND
                                    </div>
                                    <img src={find} className="w-16 h-16 mt-2" />
                                </div>
                                <p className="text-[#0a4a6b]"> This feature helps students who are still searching for teammates for their capstone project or other academic collaborations. </p>
                            </div>

                        </div>
                    </div>
                </>
            ) : (
                <div className="flex items-center justify-center min-h-[80vh]">
                    <Register />
                </div>
            )}

            <Footer />

        </div>
    );
}

export default Landing;