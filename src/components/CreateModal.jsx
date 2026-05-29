function CreateModal({ onClose, onCreate }) {
    return (
        <div
            className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50"
            onClick={onClose}
        >
            <div
                className="bg-[#DCE6EA] w-[90%] max-w-4xl rounded-3xl shadow-2xl p-10 relative text-[#008B8B]"
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    onClick={onClose}
                    className="absolute top-5 right-6 text-4xl text-black hover:scale-110 transition"
                >
                    ×
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

                            {[1, 2, 3, 4].map((member) => (
                                <input
                                    key={member}
                                    type="text"
                                    placeholder={`Member ${member}`}
                                    className="w-full border-b border-[#66C7C7] bg-transparent outline-none mt-8 py-2 text-black"
                                />
                            ))}
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
                    <button
                        onClick={onCreate}
                        className="bg-[#118C8C] text-white px-20 py-3 rounded-lg hover:scale-105 transition"
                    >
                        Create Group
                    </button>
                </div>
            </div>
        </div>
    );
}

export default CreateModal;