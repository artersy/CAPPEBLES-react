import { useState } from "react";
import { useNavigate } from "react-router-dom";

import CreateModal from "../components/CreateModal";
import CreateSearchBar from "../components/CreateSearchBar";
import Notification from "../components/Notification";
import About from "../components/About";

import Header2 from "../components/Header2";
import Footer from "../components/Footer";

function Create() {
    const navigate = useNavigate();
    const [selectedStudent, setSelectedStudent] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [openSearchBar, setOpenSearchBar] = useState(false);

    const [notifications, setNotifications] = useState([
        {
            id: 1,
            title: "Application Submitted",
            message: "Wait for approval.",
            time: "Just now",
            unread: true,
        },
    ]);

    const [showNotifModal, setShowNotifModal] = useState(false);
    const [showAbout, setShowAbout] = useState(false);

    const handleCreateGroup = () => {
        const newNotification = {
            id: Date.now(),
            title: "Group Created",
            message: "Your group has been created successfully.",
            time: new Date().toLocaleTimeString(),
            unread: true,
        };

        setNotifications((prev) => [newNotification, ...prev]);
    };

    return (
        <div className="min-h-screen bg-[linear-gradient(to_top_right,#03448C,#19B48E)] text-white relative">

            <Header2
                notifications={notifications}
                setNotifications={setNotifications}
                onOpenAbout={() => setShowAbout(true)}
            />

            <About
                isOpen={showAbout}
                onClose={() => setShowAbout(false)}
            />

            <div className="flex flex-col items-center justify-center text-center px-6 pt-24">

                <h1 className="text-9xl md:text-8xl font-black leading-none mt-4">
                    CREATE GROUP
                </h1>

                <p className="max-w-xl mt-6 text-sm md:text-base text-white/90 text-lg">
                    Through this feature, students can create a group by
                    providing important details such as the group name,
                    project description, and the number of members required.
                </p>

                <div className="mt-6 flex gap-3 w-full max-w-md">

                    <input
                        type="text"
                        placeholder="Search for students..."
                        readOnly
                        onClick={() => setOpenSearchBar(true)}
                        className="flex-1 px-5 py-3 rounded-2xl bg-[#C0F2F1] text-[#03448C] cursor-pointer"
                    />

                    <button
                        onClick={() => setShowModal(true)}
                        className="bg-[#19B48E] px-6 py-3 rounded-xl font-semibold"
                    >
                        Create
                    </button>

                </div>
            </div>

            {/* CREATE MODAL */}
            {showModal && (
                <CreateModal
                    onClose={() => setShowModal(false)}
                    onCreate={handleCreateGroup}
                />
            )}

            {/* SEARCH MODAL */}
            {openSearchBar && (
                <CreateSearchBar
                    openSearchBar={openSearchBar}
                    setOpenSearchBar={setOpenSearchBar}
                    onSelectStudent={(student) => {
                        setSelectedStudent(student);
                    }}
                />
            )}

            {selectedStudent && (
                <div className="mt-8 bg-white rounded-xl p-5 text-black">
                    <h1 className="text-xl font-bold">
                        {selectedStudent.name}
                    </h1>

                    <p className="mt-2 pr-4 bg-gray-200 rounded-lg inline-block">
                        {selectedStudent.role}
                    </p>

                    <p className="mt-2 text-gray-600 text-sm">
                        Skills: {selectedStudent.skills}
                    </p>
                </div>
            )}

            {/* NOTIFICATIONS */}
            <Notification
                isOpen={showNotifModal}
                notifications={notifications}
                onClose={() => setShowNotifModal(false)}
            />

            {/* <Footer /> */}
        </div>
    );
}

export default Create;