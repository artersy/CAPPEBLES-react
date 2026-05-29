import { useState } from "react";
import { useNavigate } from "react-router-dom";

import logo from "../assets/logo.png";
import profile from "../assets/profile.png";
import notificationsIcon from "../assets/notifications.png";

import Notification from "../components/Notification";
import About from "../components/About";

export default function Header2({ onOpenAbout }) {
  const navigate = useNavigate();

  const [showNotification, setShowNotification] = useState(false);

  const notifications = [
    {
      id: 1,
      title: "Group Created",
      message: "Your group has been created successfully.",
      time: "Just now",
    },
  ];

  return (
    <>
      <header className="w-full px-45 py-5 flex items-center justify-between">

        <div className="flex items-center gap-3">
          <img
            src={logo}
            alt="Logo"
            className="w-10 h-10 rounded-full object-cover"
          />
        </div>

        <div className="flex items-center gap-6">

          <div
            onClick={() => setShowNotification(true)}
            className="cursor-pointer"
          >
            <img
              src={notificationsIcon}
              alt="Notifications"
              className="w-7 h-7 rounded-full object-cover"
            />
          </div>

          <a
            href="/home"
            className="hover:text-blue-500 transition"
          >
            Home
          </a>

          <a
            href="/create"
            className="hover:text-blue-500 transition"
          >
            Create
          </a>

          <a
            href="/find"
            className="hover:text-blue-500 transition"
          >
            Find
          </a>

          <button
          onClick={onOpenAbout}
          className="hover:text-blue-500 transition"
        >
          About
        </button>

          <div
            onClick={() => navigate("/profile")}
            className="cursor-pointer"
          >
            <img
              src={profile}
              alt="Profile"
              className="w-10 h-10 rounded-full border object-cover"
            />
          </div>

        </div>
      </header>

      <Notification
        isOpen={showNotification}
        notifications={notifications}
        onClose={() => setShowNotification(false)}
      />
    </>
  );
}