import React, { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import { students } from "../data/data";
import ConfirmAddModal from "./ConfirmAddModal";
import RequestSentModal from "./RequestSentModal";

function CreateSearchBar({
  openSearchBar,
  setOpenSearchBar,
  onAddStudent,
}) {
  const [search, setSearch] = useState("");
  const [activeId, setActiveId] = useState(null);

  const [openConfirm, setOpenConfirm] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState(null);

  const [openRequestSent, setOpenRequestSent] = useState(false);

  const cardRefs = useRef({});

  if (!openSearchBar) return null;

  const filteredStudents = students.filter((student) =>
    student.name.toLowerCase().includes(search.toLowerCase())
  );

  const ExpandHandler = (id) => {
    setActiveId((prev) => (prev === id ? null : id));
  };

  useEffect(() => {
    Object.entries(cardRefs.current).forEach(([id, el]) => {
      if (!el) return;

      const isActive = Number(id) === activeId;

      gsap.to(el, {
        height: isActive ? 150 : 50,
        duration: 0.3,
        background: isActive ? "#B3A9A9" : "#D9D9D9",
        ease: "power1.inOut",
      });

      const arrow = el.querySelector(".arrow");
      const container = el.querySelector(".container");

      if (arrow) {
        gsap.to(arrow, {
          rotate: isActive ? 180 : 0,
          duration: 0.3,
        });
      }

      if (container) {
        if (isActive) {
          gsap.set(container, { display: "block" });

          gsap.fromTo(
            container,
            { opacity: 0, y: -10 },
            { opacity: 1, y: 0, duration: 0.3 }
          );
        } else {
          gsap.to(container, {
            opacity: 0,
            y: -10,
            duration: 0.2,
            onComplete: () => {
              gsap.set(container, { display: "none" });
            },
          });
        }
      }
    });
  }, [activeId]);

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex justify-center items-center z-50 px-4">

      <div className="relative w-full max-w-[42rem] bg-[#eaf4f4] rounded-2xl p-6 shadow-2xl">

        <button
          onClick={() => setOpenSearchBar(false)}
          className="absolute top-4 right-4 text-3xl hover:scale-110"
        >
          ×
        </button>

        <div className="flex gap-3 mt-8">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search students..."
            className="flex-1 border border-gray-400 rounded-md px-3 py-2 outline-none text-[#0e9995] bg-white font-semibold"
          />

          <button className="bg-[#0e9995] text-white px-6 py-2 rounded-md">
            Search
          </button>
        </div>

        <div className="w-full h-[1px] bg-[#0e9995] opacity-40 my-6" />

        <h2 className="text-gray-500 mb-4">
          {search.trim() === "" ? "Suggestions:" : "Results:"}
        </h2>

        <div className="flex flex-col gap-3 max-h-[300px] overflow-y-auto">

          {filteredStudents.map((student) => (
            <div
              key={student.id}
              ref={(el) => (cardRefs.current[student.id] = el)}
              className="bg-[#D9D9D9] rounded-lg overflow-hidden cursor-pointer"
              style={{ height: "50px" }}
              onClick={() => ExpandHandler(student.id)}
            >

              <div className="flex justify-between items-center px-3 py-2">

                <h1
                  className="font-bold text-[1rem] cursor-pointer hover:text-[#0e9995] text-black"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedStudent(student);
                    setOpenConfirm(true);
                  }}
                >
                  {student.name}
                </h1>

                <div className="flex items-center gap-2">

                  {activeId === student.id && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedStudent(student);
                        setOpenConfirm(true);
                      }}
                      className="bg-[#12908E] text-white text-xs px-5 py-1 rounded-lg hover:scale-105 transition"
                    >
                      Add
                    </button>
                  )}

                  <img
                    src="/arrowdown.png"
                    className="w-5 h-5 arrow"
                  />
                </div>
              </div>

              <div className="container px-4 pb-4 text-black space-y-2 hidden">

                <p className="text-sm text-gray-700">
                  {student.role}
                </p>

                <p className="text-xs text-gray-500 mt-1 mb-2">
                  Skills: {student.skills}
                </p>

                <div className="flex justify-end mt-2">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedStudent(student);
                      setOpenConfirm(true);
                    }}
                    className="bg-[#12908E] text-white px-3 py-2 rounded-xl"
                  >
                    Add to Group
                  </button>
                </div>

              </div>

            </div>
          ))}

        </div>
      </div>

      <ConfirmAddModal
        openConfirm={openConfirm}
        setOpenConfirm={setOpenConfirm}
        selectedStudent={selectedStudent}
        onConfirm={(student) => {
          if (onAddStudent) {
            onAddStudent(student);
          }

          setOpenConfirm(false);
          setOpenRequestSent(true);
        }}
      />

      <RequestSentModal
        openModal={openRequestSent}
        setOpenModal={setOpenRequestSent}
      />

    </div>
  );
}

export default CreateSearchBar;