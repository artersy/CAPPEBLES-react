import { useState } from "react";
import { useNavigate } from "react-router-dom";

import logo from "../assets/logo.png";
import profile from "../assets/profile.png";
import notificationsIcon from "../assets/notifications.png";

import Notification from "../components/Notification";
import FindModal from "../components/FindModal";

export default function Header2({
  onOpenAbout,
  notifications,
  setNotifications,
}) {
  const navigate = useNavigate();

  const [showNotification, setShowNotification] = useState(false);
  const [showFind, setShowFind] = useState(false);

  const addNotification = (notif) => {
    setNotifications((prev) => [notif, ...prev]);
  };

  const unreadCount = notifications.filter((n) => n.unread).length;

  return (
    <>
      <header className="w-full bg-transparent px-6 md:px-10 lg:px-16 py-5 flex items-center justify-between">

        <div className="flex items-center gap-3">
          <img src={logo} alt="logo" className="w-10 h-10" />
        </div>

        <div className="flex items-center gap-6">

          <div
            onClick={() => setShowNotification(true)}
            className="relative cursor-pointer"
          >
            <img src={notificationsIcon} className="w-7 h-7" />

            {unreadCount > 0 && (
              <div className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] min-w-[18px] h-[18px] flex items-center justify-center rounded-full">
                {unreadCount}
              </div>
            )}
          </div>

          <a href="/home" className="hover:text-blue-500 transition">
            Home
          </a>

          <a href="/create" className="hover:text-blue-500 transition">
            Create
          </a>

          <a href="/find" className="hover:text-blue-500 transition">
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
              alt="profile"
              className="w-10 h-10 rounded-full border object-cover"
            />
          </div>

        </div>
      </header>

      <Notification
        isOpen={showNotification}
        notifications={notifications}
        setNotifications={setNotifications}
        onClose={() => setShowNotification(false)}
      />

      <FindModal
        openModal={showFind}
        setOpenModal={setShowFind}
        onNotify={addNotification}
      />
    </>
  );
}