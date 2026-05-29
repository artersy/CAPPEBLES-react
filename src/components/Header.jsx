import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import profile from "../assets/profile.png";
import About from "../components/About";

export default function Header({ onOpenAbout }) {
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

        <button
          onClick={onOpenAbout}
          className="hover:text-blue-500 transition"
        >
          About
        </button>

        <div onClick={() => navigate("/auth")} className="cursor-pointer">
          <img
            src={profile}
            alt="Profile"
            className="w-10 h-10 rounded-full border object-cover"
          />
        </div>

      </div>
    </header>
  );
}