import { useNavigate } from "react-router-dom"

import Header from "../components/Header.jsx"
import Footer from "../components/Footer.jsx"
import { useState } from "react";

import Login from '../components/Login.jsx'
import Register from "../components/Register.jsx";



function Auth() {

    const [Button, setButton] = useState(true)
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-[linear-gradient(to_top_right,#03448C,#19B48E)] text-white">

            <Header />
            {Button ?
                <Login Button={Button} setButton={setButton} />
                :
                <Register Button={Button} setButton={setButton}/>
            }


            {/* <Footer /> */}
        </div>



    )
}

export default Auth