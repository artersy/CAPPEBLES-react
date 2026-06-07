import { useNavigate } from "react-router-dom"
import { useRef, useState, useEffect } from "react"

import Header2 from "../components/Header2"
import Footer from "../components/Footer"
import { Link } from "react-router-dom";


function EditProfile({ notifications, setNotifications }) {
    const navigate = useNavigate();
    const fileInputRef = useRef(null)
    const [avatarSrc, setAvatarSrc] = useState('sampleAvatar.png')
    const [name, setName] = useState("")
    const [section, setSection] = useState("")
    const [program, setProgram] = useState("")
    const [email, setEmail] = useState("")
    const [skillsText, setSkillsText] = useState("")
    const [backgroundText, setBackgroundText] = useState("")

    useEffect(() => {
        try {
            const saved = localStorage.getItem('pebble_avatar')
            if (saved) setAvatarSrc(saved)
            const raw = localStorage.getItem('pebble_user')
            if (raw) {
                const u = JSON.parse(raw)
                setName(u.name || "")
                setSection(u.section || "")
                setProgram(u.program || "")
                setEmail(u.email || "")
                setSkillsText((u.skills && Array.isArray(u.skills)) ? u.skills.join(', ') : (u.skills || ""))
                setBackgroundText(u.background || "")
            } else {
                const rawAccount = localStorage.getItem('userData')
                if (rawAccount) {
                    const account = JSON.parse(rawAccount)
                    const fullName = `${account.firstName || ""} ${account.lastName || ""}`.trim()
                    setName(fullName)
                    setEmail(account.email || "")
                }
            }
        } catch (e) {}
    }, [])

    const handleFileChange = (e) => {
        const file = e.target.files && e.target.files[0]
        if (!file) return
        const reader = new FileReader()
        reader.onload = () => {
            const dataUrl = reader.result
            setAvatarSrc(dataUrl)
            try { localStorage.setItem('pebble_avatar', dataUrl) } catch (e) {}
        }
        reader.readAsDataURL(file)
    }

    const triggerFileSelect = () => fileInputRef.current && fileInputRef.current.click()


    const goBack = () => navigate('/profile')

        return (
            <div className="min-h-screen bg-[linear-gradient(to_top_right,#03448C,#19B48E)] text-white">

                <Header2 notifications={notifications} setNotifications={setNotifications} />
                <div
                    className="section-margin-x"
                >
                    <div className="flex items-center justify-between mb-6">
                        <button
                            onClick={goBack}
                            aria-label="Back to profile"
                            className="text-white/90 hover:text-white w-12 h-12 flex items-center justify-center rounded-md text-3xl font-extrabold"
                        >
                            ←
                        </button>
                    </div>

                    <div className="flex justify-center relative mb-10">
                        <div className="relative">
                            <img
                                src={avatarSrc}
                                alt="profile"
                                className="w-32 h-32 rounded-full object-cover border-4 border-white"
                            />

                            <div
                                onClick={triggerFileSelect}
                                className="absolute bottom-1 right-1 bg-white text-black p-1 rounded-full text-xs cursor-pointer"
                            >
                                ✎
                            </div>
                            <input
                                ref={fileInputRef}
                                type="file"
                                accept="image/*"
                                className="hidden"
                                onChange={handleFileChange}
                            />
                        </div>
                    </div>

                    <div className="flex flex-col lg:flex-row gap-10">

                        <div className="flex-1 flex flex-col gap-5">

                            <div>
                                <label className="font-semibold">Name</label>
                                <input
                                        className="w-full mt-1 p-3 rounded-lg bg-gray-200 text-black outline-none"
                                        placeholder="John Doe"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                />
                            </div>

                            <div>
                                <label className="font-semibold">Section | Year Level</label>
                                <input
                                    className="w-full mt-1 p-3 rounded-lg bg-gray-200 text-black outline-none"
                                    placeholder="A602 | 4th Year"
                                    value={section}
                                    onChange={(e) => setSection(e.target.value)}
                                />
                            </div>

                            <div>
                                <label className="font-semibold">Program</label>
                                <input
                                    className="w-full mt-1 p-3 rounded-lg bg-gray-200 text-black outline-none"
                                    placeholder="Program"
                                    value={program}
                                    onChange={(e) => setProgram(e.target.value)}
                                />
                            </div>

                            <div>
                                <label className="font-semibold">School Email</label>
                                <input
                                    className="w-full mt-1 p-3 rounded-lg bg-gray-200 text-black outline-none"
                                    placeholder="School Email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>

                        </div>

                        <div className="flex-1 flex flex-col gap-5 mt-5">

                            <div className="bg-white/90 text-black p-5 rounded-2xl">
                                <h2 className="font-bold text-lg mb-2">Skills</h2>
                                <textarea
                                    className="w-full h-32 p-3 rounded-md bg-gray-100 text-black outline-none"
                                    placeholder="e.g. React, Tailwind CSS, Frontend Development"
                                    value={skillsText}
                                    onChange={(e) => setSkillsText(e.target.value)}
                                />
                                <p className="text-xs text-gray-700 mt-2">Separate skills with commas.</p>
                            </div>

                            <div className="bg-white/90 text-black p-5 rounded-2xl">
                                <h2 className="font-bold text-lg mb-2">Background</h2>
                                <textarea
                                    className="w-full h-32 p-3 rounded-md bg-gray-100 text-black outline-none"
                                    placeholder="Write a short background. e.g. Worked on academic projects like a cashier system..."
                                    value={backgroundText}
                                    onChange={(e) => setBackgroundText(e.target.value)}
                                />
                            </div>

                        </div>
                    </div>

                    <div className="mt-6 flex justify-end">
                        <button
                            onClick={() => {
                                        const skills = skillsText.split(',').map(s => s.trim()).filter(Boolean)
                                const user = { name, section, program, email, skills, background: backgroundText }
                                try { localStorage.setItem('pebble_user', JSON.stringify(user)) } catch (e) {}
                                try {
                                    const stored = localStorage.getItem('userData')
                                    if (stored) {
                                        const parsed = JSON.parse(stored)
                                        const [firstName, ...rest] = name.split(' ')
                                        const lastName = rest.join(' ')
                                        const updatedAccount = {
                                            ...parsed,
                                            email,
                                            firstName: firstName || parsed.firstName || "",
                                            lastName: lastName || parsed.lastName || firstName || "",
                                        }
                                        localStorage.setItem('userData', JSON.stringify(updatedAccount))
                                    }
                                } catch (e) {}
                                navigate('/profile')
                            }}
                            className="bg-[#19B48E] px-6 py-3 rounded-xl font-semibold hover:scale-105 transition"
                        >
                            Save Profile
                        </button>
                    </div>

                </div>
                {/* <Footer /> */}

            </div >
        )
    
}
    export default EditProfile