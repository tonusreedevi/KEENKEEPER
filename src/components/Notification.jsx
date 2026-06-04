const Notification = ({ show, message }) => {
  if (!show) return null;

  return (
    <div className="fixed top-5 right-5 z-[150] pointer-events-none">
      <div className="bg-[#1a4a3e] text-white p-5 rounded-2xl shadow-2xl min-w-[320px]">
        <p className="font-bold">Action Logged</p>
        <p className="text-white/80 text-sm">{message}</p>
      </div>
    </div>
  );
};

export default Notification;
