import React from 'react'

import { useGSAP } from '@gsap/react'
import { gsap } from "gsap"

import { useRef } from 'react'

function Login({Button, setButton}) {

    const login = useRef(null)

    useGSAP(()=>{
        gsap.fromTo(login.current,{
            width:"700px",
            height:"540px",
            opacity:0.8
        },

        {
            width:"488px",
            height:"488px",
            opacity:1,
            duration:1,
            ease:'power3.inOut'
        }
    )
        
    },[Button])


    return (
        <div className="  section-margin-x flex flex-row gap-10 content-margint-top ">

            <div className="flex-1 flex flex-col px-10 py-10  bg-[#ffffff21] border border-none rounded-2xl" >
                <div className="flex-1 flex justify-start items-center">
                    <img
                        className="p-10 bg-[#ffffff21] rounded-2xl"
                        src="/logo.png"
                    />
                </div>
                <div className="flex flex-col gap-3">
                    <h2
                        className="font-bold"
                    >Welcome Back</h2>
                    <h1
                        className="text-7xl font-bold text-[#FFF]"
                    >CAP PEBBLES</h1>
                    <p
                        className="text-[#ffffffc2]"
                    >Socials: cappebbles@sti.edu | CapPebbles Official</p>
                    <p
                        className="text-[#ffffffc2]"
                    >copyright | 2026 CapPebbles. All rights reserved.</p>
                </div>

            </div>

            <div className="w-full  bg-[rgba(222,255,255,0.9)] flex flex-col py-10 px-10 rounded-2xl"
            ref={login}
            >
                <h1 className="text-center text-[#0f3c3a] font-bold text-5xl">Log in</h1>
                <form className="mt-10 flex flex-col gap-3">
                    <label className="auth-text">School Email</label>
                    <input
                        className="login-inputs"
                        type="text" name="name" required
                        placeholder="example@school.edu"
                    />

                    <label className="auth-text">Password</label>
                    <input
                        className="login-inputs"
                        type="password"
                        placeholder="••••••••" />

                    <button
                        type="submit"
                        className="auth-button bg-[#21ad7f]"
                        onClick={() => navigate("/home")}
                    > Log in</button>
                    <p className=" text-center text-black">Or</p>

                </form>
                <button
                    className=" bg-white auth-button text-black "
                    onClick={() => setButton(false)}
                > Get Started </button>

            </div>
        </div>
    )
}

export default Login