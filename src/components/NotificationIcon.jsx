function NotificationIcon({ notifications, onClick }) {
  const unreadCount = notifications.filter(n => n.unread).length;

  return (
    <div className="relative cursor-pointer" onClick={onClick}>

      <span className="text-white text-2xl">
        🔔
      </span>

      {unreadCount > 0 && (
        <div className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] min-w-[18px] h-[18px] px-1 flex items-center justify-center rounded-full">
          {unreadCount > 9 ? "9+" : unreadCount}
        </div>
      )}

    </div>
  );
}

export default NotificationIcon;