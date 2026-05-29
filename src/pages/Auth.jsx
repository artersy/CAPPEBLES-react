import { useNavigate } from "react-router-dom"

import Header from "../components/Header.jsx"
import Footer from "../components/Footer.jsx"
import { useState, useRef } from "react";

import Login from '../components/Login.jsx'
import Register from "../components/Register.jsx";

import { gsap } from 'gsap'
import { useGSAP } from "@gsap/react";



function Auth() {


    const [Button, setButton] = useState(true)
    const navigate = useNavigate();

    const loginRef = useRef(null);
    const registerRef = useRef(null);

   

    return (
        <div className="min-h-screen bg-[linear-gradient(to_top_right,#03448C,#19B48E)] text-white">

            <Header />
            {Button ?
                <div
                    ref={loginRef}
                >
                    <Login Button={Button} setButton={setButton} />

                </div>
                :
                <div
                    ref={registerRef}
                >
                    <Register Button={Button} setButton={setButton} />
                </div>

            }
            {/* <Footer /> */}
        </div>



    )
}

export default Auth