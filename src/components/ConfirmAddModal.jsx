import React from "react";

function ConfirmAddModal({
    openConfirm,
    setOpenConfirm,
    onConfirm,
    selectedStudent,
}) {
    if (!openConfirm) return null;

    return (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex justify-center items-center z-50 px-4">

            <div className="w-full max-w-[30rem] bg-[#eaf4f4] rounded-2xl px-6 py-8 shadow-2xl text-center">

                <h1 className="text-[#0e9995] font-bold text-2xl">
                    Confirm Add Student
                </h1>

                <div className="w-full h-[1px] bg-[#0e9995] my-4 opacity-50" />

                <p className="text-[#0e9995] text-base">
                    Are you sure you want to add{" "}
                    <span className="font-bold">
                        {selectedStudent?.name}
                    </span>
                    {" "}to the group?
                </p>

                <div className="flex justify-center gap-4 mt-6">

                    <button
                        onClick={() => setOpenConfirm(false)}
                        className="bg-gray-400 text-white px-6 py-2 rounded-xl hover:scale-105 duration-200"
                    >
                        Cancel
                    </button>


                    <button
                        onClick={() => {
                            onConfirm(selectedStudent);
                            setOpenConfirm(false);
                        }}
                        className="bg-[#0e9995] text-white px-6 py-2 rounded-xl hover:scale-105 duration-200"
                    >
                        Confirm
                    </button>

                </div>

            </div>
        </div>
    );
}

export default ConfirmAddModal;