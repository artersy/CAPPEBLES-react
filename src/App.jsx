import { BrowserRouter, Routes, Route } from "react-router-dom"

import Landing from "./pages/Landing"
import Start from "./pages/Start"

import Home from "./pages/Home"
import Create from "./pages/Create"
import Find from "./pages/Find"

import About from "./components/About"

import Auth from "./pages/Auth"
import Signup from "./pages/Signup"

import Profile from "./pages/Profile"
import EditProfile from "./pages/EditProfile"


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/start" element={<Start />} />
        
        <Route path="/Auth" element={<Auth />} />
        <Route path="/signup" element={<Signup />} />

        <Route path="/home" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/find" element={<Find />} />

        <Route path="/about" element={<About />} />
        
        <Route path="/profile" element={<Profile />} />
        <Route path="/edit-profile" element={<EditProfile />} />


      </Routes>
    </BrowserRouter>
  )
}

export default App