import React from 'react'
import { useState } from 'react';
import SuccessModal from './SuccessModal';


function FindModal({ openModal, setOpenModal }) {
  const [success, setSuccess] = useState(false)

  if (!openModal) return null;

  return (
    <div
      className="fixed inset-0 bg-black/50 backdrop-blur-sm flex justify-center items-center z-50 p-4"
      onClick={(e) => {
        if (e.target === e.currentTarget) setOpenModal(false);
      }}
    >
      {success ? (
        <SuccessModal openModal={openModal} setOpenModal={setOpenModal}/>
      ) :
        <div className="relative w-full max-w-[30rem] bg-[#eaf4f4] rounded-2xl p-4 sm:p-8 shadow-2xl max-h-[90vh] overflow-y-auto">

          {/* CLOSE BUTTON */}
          <button
            onClick={() => setOpenModal(false)}
            className="absolute top-3 right-3 sm:top-4 sm:right-4 w-8 h-8 flex items-center justify-center bg-white/50 hover:bg-white/80 rounded-full transition-colors"
            aria-label="Close modal"
          >
            <svg className="w-5 h-5 text-[#0e9995]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* SKILLS */}
          <div className="flex flex-wrap gap-3 sm:gap-4 mt-8 sm:mt-12">
            <button className="bg-[#0e9995] text-white px-4 sm:px-8 py-2 sm:py-3 rounded-xl font-bold shadow-md text-sm sm:text-base hover:scale-105 transition-transform duration-200">
              UI/UX
            </button>

            <button className="bg-[#d9e8e8] text-[#0e9995] px-4 sm:px-6 py-2 sm:py-3 rounded-xl font-bold shadow-md text-sm sm:text-base hover:scale-105 transition-transform duration-200">
              Backend Developer
            </button>

            <button className="bg-[#d9e8e8] text-[#0e9995] px-4 sm:px-6 py-2 sm:py-3 rounded-xl font-bold shadow-md text-sm sm:text-base hover:scale-105 transition-transform duration-200">
              Frontend Developer
            </button>

            <button className="bg-[#d9e8e8] text-[#0e9995] px-4 sm:px-6 py-2 sm:py-3 rounded-xl font-bold shadow-md text-sm sm:text-base hover:scale-105 transition-transform duration-200">
              QA Tester
            </button>

            <button className="bg-[#d9e8e8] text-[#0e9995] px-4 sm:px-6 py-2 sm:py-3 rounded-xl font-bold shadow-md text-sm sm:text-base hover:scale-105 transition-transform duration-200">
              Mobile Developer
            </button>
          </div>

          {/* FORM */}
          <div className="mt-6 sm:mt-8 flex flex-col">
            <label className="text-[#0e9995] font-semibold mb-2 text-sm sm:text-base">
              Your name
            </label>

            <input
              type="text"
              placeholder="Nad"
              className="bg-transparent border-b border-[#0e9995] outline-none pb-2 text-black text-sm sm:text-base"
            />

            <label className="text-gray-500 font-semibold mt-4 sm:mt-5 mb-2 text-sm sm:text-base">
              Your Message
            </label>

            <textarea
              className="h-28 sm:h-32 border border-[#0e9995] rounded-sm p-3 resize-none outline-none text-black bg-white text-sm sm:text-base"
              placeholder="Write your message here..."
            />

            {/* BUTTON */}
            <button
              className="mt-5 sm:mt-6 bg-[#0e9995] text-white py-2.5 sm:py-3 rounded-lg shadow-md hover:scale-105 transition-transform duration-200 text-sm sm:text-base"
              onClick={() => setSuccess(true)}
            >
              Submit Application
            </button>
          </div>
        </div>}

    </div>
  )
}

export default FindModal