import { useNavigate } from "react-router-dom"

import Header2 from "../components/Header2"
import { useEffect, useState } from "react"
import Footer from "../components/Footer"



function Profile({ notifications, setNotifications }) {
    const navigate = useNavigate();
    const [avatar, setAvatar] = useState('sampleAvatar.png')
    const [user, setUser] = useState({ name: 'John Doe', section: 'A602 | 4th Year', program: 'BSIT', email: 'lea.llames@sti.edu' })

    useEffect(() => {
        try {
            const saved = localStorage.getItem('pebble_avatar')
            if (saved) setAvatar(saved)

            const raw = localStorage.getItem('pebble_user')
            if (raw) {
                const parsed = JSON.parse(raw)
                setUser(prev => ({ ...prev, ...parsed }))
            } else {
                const rawAccount = localStorage.getItem('userData')
                if (rawAccount) {
                    const account = JSON.parse(rawAccount)
                    const fullName = `${account.firstName || ""} ${account.lastName || ""}`.trim()
                    setUser(prev => ({
                        ...prev,
                        name: fullName || prev.name,
                        email: account.email || prev.email,
                    }))
                }
            }
        } catch (e) {}
    }, [])

    return (
        <div className="min-h-screen bg-[linear-gradient(to_top_right,#03448C,#19B48E)] text-white">

            <Header2 notifications={notifications} setNotifications={setNotifications} />

            <div className="section-margin-x">
                <div className="flex justify-center relative mb-10">
                    <div className="relative">
                        <img
                            src={avatar}
                            alt="profile"
                            className="w-32 h-32 rounded-full object-cover border-4 border-white"
                        />
                    </div>
                </div>

                

                <div className="flex flex-col lg:flex-row gap-10">

                    <div className="flex-1 flex flex-col gap-5">

                        <div>
                            <label className="font-semibold">Name</label>
                            <div className="w-full mt-1 p-3 rounded-lg bg-gray-200 text-black">{user.name}</div>
                        </div>

                        <div>
                            <label className="font-semibold">Section | Year Level</label>
                            <div className="w-full mt-1 p-3 rounded-lg bg-gray-200 text-black">{user.section}</div>
                        </div>

                        <div>
                            <label className="font-semibold">Program</label>
                            <div className="w-full mt-1 p-3 rounded-lg bg-gray-200 text-black">{user.program}</div>
                        </div>

                        <div>
                            <label className="font-semibold">School Email</label>
                            <div className="w-full mt-1 p-3 rounded-lg bg-gray-200 text-black">{user.email}</div>
                        </div>

                    </div>

                    <div className="flex-1 flex flex-col gap-5  mt-5">

                        <div className="bg-white/90 text-black p-5 rounded-2xl">
                            <h2 className="font-bold text-lg mb-2">Skills</h2>
                            {user.skills && user.skills.length > 0 ? (
                                <ul className="list-disc pl-5 text-sm space-y-1">
                                    {user.skills.map((s, idx) => (
                                        <li key={idx}>{s}</li>
                                    ))}
                                </ul>
                            ) : (
                                <p className="text-sm text-gray-500">You can input your skills here such as: React, Tailwind CSS, Frontend Development</p>
                            )}
                        </div>

                        <div className="bg-white/90 text-black p-5 rounded-2xl">
                            <h2 className="font-bold text-lg mb-2">Background</h2>
                            <p className="text-sm">
                                {user.background && user.background.length > 0 ? (
                                    user.background
                                ) : (
                                    <span className="text-gray-500">You can write about your background here. e.g. Worked on academic projects such as a cashier system, student record system...</span>
                                )}
                            </p>
                        </div>

                        <div className="mt-4 flex gap-4 justify-end">
                            <button
                                onClick={() => navigate("/edit-profile")}
                                className="bg-[#19B48E] px-6 py-3 rounded-xl font-semibold hover:scale-105 transition"
                            >
                                Edit Profile
                            </button>

                            <button
                                onClick={() => navigate("/")}
                                className="bg-[#19B48E] px-6 py-3 rounded-xl font-semibold hover:scale-105 transition"
                            >
                                Logout
                            </button>
                        </div>

                    </div>

                </div>
            </div>
        </div >
    )
}

export default Profile