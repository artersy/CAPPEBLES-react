import { useNavigate } from "react-router-dom"
import logo from "../assets/logo.png"
import profile from "../assets/profile.png"

export default function Header() {
  const navigate = useNavigate();

  return (
    <header className="w-full px-8 py-4 flex items-center justify-between">

      <div className="flex items-center gap-3">
        <img
          src={logo}
          alt="Logo"
          className="w-10 h-10 rounded-full object-cover"
        />
      </div>

      <div className="flex items-center gap-6">
        <a href="/" className="hover:text-blue-500 transition">
          Home
        </a>

        <a href="/about" className="hover:text-blue-500 transition">
          About
        </a>

        <div
          onClick={() => navigate("/start")}>
          <img
            src={profile}
            alt="Profile"
            className="w-10 h-10 rounded-full border object-cover"
          />
        </div>
      </div>
    </header>
  )
}