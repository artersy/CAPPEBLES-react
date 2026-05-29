import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Header2 from "../components/Header2";
import Footer from "../components/Footer";

function Create() {
    const navigate = useNavigate();

    // modal state
    const [showModal, setShowModal] = useState(false);

    return (
        <div className="min-h-screen bg-[linear-gradient(to_top_right,#03448C,#19B48E)] text-white relative">

            <Header2 />

            <div className="flex flex-col items-center justify-center text-center px-6 pt-24">

                <h1 className="text-9xl md:text-8xl font-black leading-none mt-4">
                    CREATE GROUP
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

                    <button
                        onClick={() => setShowModal(true)}
                        className="bg-[#19B48E] px-6 py-3 rounded-xl font-semibold hover:scale-105 transition"
                    >
                        Search
                    </button>

                </div>

            </div>

            {showModal && (
                <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">

                    <div className="bg-[#DCE6EA] w-[90%] max-w-4xl rounded-3xl shadow-2xl p-10 relative text-[#008B8B]">

                        <button
                            onClick={() => setShowModal(false)}
                            className="absolute top-5 right-6 text-4xl text-black hover:scale-110 transition"
                        >               
                        </button>

                        <div className="grid md:grid-cols-2 gap-10">

                            <div>

                                <label className="font-bold text-lg">
                                    Name of the Group:
                                </label>

                                <input
                                    type="text"
                                    className="w-full border-b border-[#66C7C7] bg-transparent outline-none mt-4 py-2 text-black"
                                />

                                <div className="mt-10">

                                    <label className="font-bold text-lg">
                                        Members:
                                    </label>

                                    <input
                                        type="text"
                                        placeholder="Member 1"
                                        className="w-full border-b border-[#66C7C7] bg-transparent outline-none mt-4 py-2 text-black"
                                    />

                                    <input
                                        type="text"
                                        placeholder="Member 2"
                                        className="w-full border-b border-[#66C7C7] bg-transparent outline-none mt-8 py-2 text-black"
                                    />

                                    <input
                                        type="text"
                                        placeholder="Member 3"
                                        className="w-full border-b border-[#66C7C7] bg-transparent outline-none mt-8 py-2 text-black"
                                    />

                                    <input
                                        type="text"
                                        placeholder="Member 4"
                                        className="w-full border-b border-[#66C7C7] bg-transparent outline-none mt-8 py-2 text-black"
                                    />

                                </div>

                            </div>

                            <div>

                                <label className="font-bold text-lg">
                                    Description:
                                </label>

                                <textarea
                                    rows="12"
                                    className="w-full mt-4 border border-[#66C7C7] bg-white outline-none p-4 resize-none text-black shadow-md"
                                />

                            </div>

                        </div>

                        <div className="flex justify-center mt-10">

                            <button className="bg-[#118C8C] text-white px-20 py-3 rounded-lg hover:scale-105 transition">
                                Create Group
                            </button>

                        </div>

                    </div>

                </div>
            )}

            {/* <Footer /> */}

        </div>
    );
}

export default Create;