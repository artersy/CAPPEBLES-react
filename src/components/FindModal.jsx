import React, { useState } from "react";
import SuccessModal from "./SuccessModal";

function FindModal({ openModal, setOpenModal, onNotify }) {
  const [success, setSuccess] = useState(false);

  if (!openModal) return null;

  const handleSubmit = () => {
    // 🔥 1. add notification FIRST
    if (onNotify) {
      onNotify({
        id: Date.now(),
        title: "Application Submitted",
        message: "Wait for approval.",
        time: "Just now",
        unread: true,
      });
    }

    // 🔥 2. show success modal
    setSuccess(true);
  };

  return (
    <div
      className="fixed inset-0 bg-black/50 backdrop-blur-sm flex justify-center items-center z-50 p-4"
      onClick={(e) => {
        if (e.target === e.currentTarget) setOpenModal(false);
      }}
    >
      {success ? (
        <SuccessModal
          openModal={openModal}
          setOpenModal={setOpenModal}
        />
      ) : (
        <div className="relative w-full max-w-[30rem] bg-[#eaf4f4] rounded-2xl p-4 sm:p-8 shadow-2xl max-h-[90vh] overflow-y-auto">

          <button
            onClick={() => setOpenModal(false)}
            className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center bg-white/50 rounded-full"
          >
            ✕
          </button>

          {/* FORM */}
          <div className="mt-6 flex flex-col">

            <label className="text-[#0e9995] font-semibold mb-2">
              Your name
            </label>

            <input
              type="text"
              className="border-b border-[#0e9995] outline-none pb-2 text-black"
            />

            <label className="text-gray-500 font-semibold mt-4 mb-2">
              Your Message
            </label>

            <textarea
              className="h-28 border border-[#0e9995] p-3 resize-none"
              placeholder="Write your message here..."
            />

            <button
              className="mt-6 bg-[#0e9995] text-white py-3 rounded-lg"
              onClick={handleSubmit}
            >
              Submit Application
            </button>

          </div>
        </div>
      )}
    </div>
  );
}

export default FindModal;