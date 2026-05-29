import { developers } from "../data/data";

export default function About({ isOpen, onClose }) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">

            <div className="relative w-full max-w-6xl h-[92vh] overflow-y-auto rounded-[35px] border border-cyan-400/20 bg-[#0A3A78] shadow-2xl p-6 md:p-10">

                <button
                    onClick={onClose}
                    className="absolute top-5 right-5 w-11 h-11 rounded-full
                        border
                        flex items-center justify-center
                        hover:bg-[#0A3A78]/30
                        "
                >
                    ✕

                </button>



                <div className="grid md:grid-cols-2 gap-8 items-center">

                    <div className="bg-white/10 border border-white/10 rounded-[30px] p-8 md:p-10">

                        <h1 className="text-5xl md:text-7xl font-extrabold leading-none mb-8">
                            CAP <br />
                            PEBBLES
                        </h1>

                        <p className="text-white/80 text-base md:text-lg leading-8">
                            CapPebbles was created by a group of students from STI
                            College, Section A602, as part of their academic initiative
                            to develop a platform that supports collaboration among
                            students.
                        </p>

                        <br />

                        <p className="text-white/80 text-base md:text-lg leading-8">
                            The CapPebbles logo, created by the students, represents
                            the concept behind the platform. The cap symbol stands
                            for “Cap,” referring to Capstone projects, while the chip
                            elements symbolize the “Pebbles,” representing students
                            as small individual pieces that come together to form a
                            complete group.
                        </p>

                    </div>

                    <div className="flex justify-center">

                        <div className="rounded-[70px] w-[360px] h-[360px] md:w-[380px] md:h-[380px] flex items-center justify-center">

                            <img
                                src="/logo.png"
                                alt="CapPebbles Logo"
                                className="w-52 md:w-64 object-contain"
                            />

                        </div>

                    </div>
                </div>

                <div className="mt-14 mb-8 text-center">

                    <h2 className="text-4xl md:text-5xl font-extrabold">
                        Developers
                    </h2>

                </div>

                <div className="grid md:grid-cols-2 gap-5 max-w-5xl mx-auto pb-6">

                    {developers.map((dev) => (
                        <div
                            key={dev.id}
                            className={`rounded-3xl p-5 flex items-center gap-4 shadow-lg transition duration-300
              
              ${dev.id === 1
                                    ? "bg-white/15 border border-cyan-300/30 md:col-span-2 md:w-[70%] md:mx-auto"
                                    : "bg-white/10 border border-white/10 hover:scale-[1.02]"
                                }`}
                        >

                            <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center text-2xl shrink-0">
                                👤
                            </div>

                            <div>
                                <h3
                                    className={`font-bold
                  
                  ${dev.id === 1
                                            ? "text-xl md:text-2xl"
                                            : "text-lg md:text-xl"
                                        }`}
                                >
                                    {dev.name}
                                </h3>

                                <p
                                    className={`${dev.id === 1
                                            ? "text-cyan-200 text-sm md:text-base"
                                            : "text-white/70 text-sm md:text-base"
                                        }`}
                                >
                                    {dev.role}
                                </p>
                            </div>

                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
}