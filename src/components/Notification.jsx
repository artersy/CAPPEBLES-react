function Notification({
    isOpen,
    notifications,
    onClose,
}) {
    if (!isOpen) return null;

    return (
        <>
            <div
                className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40"
                onClick={onClose}
            />

            <div
                className="
                fixed top-0 right-0
                h-screen w-[400px]
                bg-[#0A3A78]
                shadow-2xl
                z-50
                flex flex-col
                border-l border-cyan-400/20
                animate-slideIn
                "
            >
                <div className="flex items-center justify-between px-6 py-5 border-b">
                    <h2 className="text-lg font-semibold text-white">
                        Notifications
                    </h2>

                    <button
                        onClick={onClose}
                        className="
                        w-8 h-8
                        rounded-full
                        border
                        flex items-center justify-center
                        hover:bg-[#0A3A78]/30
                        "
                    >
                        ✕
                    </button>
                </div>

                <div className="flex-1 overflow-y-auto p-4">
                    {notifications.length === 0 ? (
                        <div className="flex flex-col items-center justify-center h-full text-center">
                            <div className="w-14 h-14 rounded-full bg-[#0A3A78]  mb-4" />

                            <h3 className="font-semibold text-gray-800">
                                No Notifications
                            </h3>

                            <p className="text-sm text-gray-500 mt-2">
                                You're all caught up.
                            </p>
                        </div>
                    ) : (
                        notifications.map((notif) => (
                            <div
                                key={notif.id}
                                className="
                                bg-[#C0F2F1]
                                rounded-xl
                                p-4
                                mb-3
                                border
                                "
                            >
                                <div className="flex justify-between items-start">
                                    <h3 className="font-semibold text-black">
                                        {notif.title}
                                    </h3>

                                    {notif.unread && (
                                        <div className="w-2 h-2 rounded-full bg-blue-500 mt-2" />
                                    )}
                                </div>

                                <p className="text-sm text-gray-600 mt-1">
                                    {notif.message}
                                </p>

                                <span className="text-xs text-gray-400 block mt-2">
                                    {notif.time}
                                </span>
                            </div>
                        ))
                    )}
                </div>

                {/* Footer */}
                <div className="border-t px-5 py-4">
                    <button className="text-sm text-gray-200 hover:text-white ">
                        Mark all as read
                    </button>
                </div>
            </div>
        </>
    );
}

export default Notification;