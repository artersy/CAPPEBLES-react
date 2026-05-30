import React from "react";

function RequestSentModal({ openModal, setOpenModal }) {
  if (!openModal) return null;

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex justify-center items-center z-50 px-4">

      <div className="w-full max-w-[30rem] bg-[#eaf4f4] rounded-2xl px-6 py-8 shadow-2xl text-center">

        <h1 className="text-[#0e9995] font-bold text-2xl">
          Student Request Sent!
        </h1>

        <div className="w-full h-[1px] bg-[#0e9995] my-4 opacity-50" />

        <p className="text-[#0e9995] text-base">
          Your request to add students to the group has been submitted. Please wait for confirmation.
        </p>

        <button
          onClick={() => setOpenModal(false)}
          className="mt-6 bg-[#0e9995] text-white px-8 py-2 rounded-xl hover:scale-105 duration-200"
        >
          Close
        </button>

      </div>
    </div>
  );
}

export default RequestSentModal;        