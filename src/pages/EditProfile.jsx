import { useNavigate } from "react-router-dom"

import Header2 from "../components/Header2"
import Footer from "../components/Footer"
import { Link } from "react-router-dom";


function EditProfile() {
    const navigate = useNavigate();


    function LogoutButton() {
        const navigate = useNavigate();
    }

        const handleLogout = () => {
            navigate("/");
        };

        return (
            <div className="min-h-screen bg-[linear-gradient(to_top_right,#03448C,#19B48E)] text-white">

                <Header2 />
                <div
                    className="section-margin-x"
                >
                    <div className="flex justify-center relative mb-10">
                        <div className="relative">
                            <img
                                src="sampleAvatar.png"
                                alt="profile"
                                className="w-32 h-32 rounded-full object-cover border-4 border-white"
                            />

                            <div className="absolute bottom-1 right-1 bg-white text-black p-1 rounded-full text-xs cursor-pointer">
                                ✎
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col lg:flex-row gap-10">

                        <div className="flex-1 flex flex-col gap-5">

                            <div>
                                <label className="font-semibold">Name</label>
                                <input
                                    className="w-full mt-1 p-3 rounded-lg bg-gray-200 text-black outline-none"
                                    placeholder="John Doe"
                                />
                            </div>

                            <div>
                                <label className="font-semibold">Section | Year Level</label>
                                <input
                                    className="w-full mt-1 p-3 rounded-lg bg-gray-200 text-black outline-none"
                                    placeholder="John Doe"
                                />
                            </div>

                            <div>
                                <label className="font-semibold">Program</label>
                                <input
                                    className="w-full mt-1 p-3 rounded-lg bg-gray-200 text-black outline-none"
                                    placeholder="John Doe"
                                />
                            </div>

                            <div>
                                <label className="font-semibold">School Email</label>
                                <input
                                    className="w-full mt-1 p-3 rounded-lg bg-gray-200 text-black outline-none"
                                    placeholder="John Doe"
                                />
                            </div>

                        </div>

                        <div className="flex-1 flex flex-col gap-5">

                            <div className="bg-white/90 text-black p-5 rounded-2xl">
                                <h2 className="font-bold text-lg mb-2">Skills</h2>
                                <ul className="list-disc pl-5 text-sm space-y-1">
                                    <li>Proficient in basic programming using C# and Java</li>
                                    <li>Knowledge in web development (HTML, CSS)</li>
                                    <li>Basic database management (MySQL)</li>
                                    <li>Understanding of OOP concepts</li>
                                    <li>Strong problem-solving skills</li>
                                    <li>Good communication skills</li>
                                </ul>
                            </div>

                            <div className="bg-white/90 text-black p-5 rounded-2xl">
                                <h2 className="font-bold text-lg mb-2">Background</h2>
                                <p className="text-sm">
                                    Has experience in developing small academic projects such as a cashier system,
                                    student record system, and a basic website portfolio. Seeking groupmates for
                                    Capstone Project 1.
                                </p>
                            </div>

                        </div>
                    </div>

                    <div className="flex justify-end mt-10">
                        <button className="bg-blue-700 hover:bg-blue-800 px-6 py-2 rounded-lg font-semibold"
                            onClick={handleLogout}
                        >
                            Log out
                        </button>
                    </div>
                </div>
                {/* <Footer /> */}

            </div >
        )
    
}
    export default EditProfile