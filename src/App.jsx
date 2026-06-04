

import { BrowserRouter as Router } from "react-router-dom";
import { useState } from "react";

import Navbar from "./components/NavBar";
import Footer from "./components/Footer";
import Notification from "./components/Notification";
import AppRoutes from "./components/AppRoutes";

import friendsData from "./data/friends.json";

function App() {
  const [activityLogs, setActivityLogs] = useState([]);

  const [notificationState, setNotificationState] = useState({
    show: false,
    message: "",
  });

  const recordInteraction = (type, friendName) => {
    const newLog = {
      id: Date.now(),
      type,
      with: friendName,
      date: new Date().toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
      }),
      icon:
        type === "Call"
          ? "📞"
          : type === "Text"
          ? "💬"
          : "📧",
    };

    setActivityLogs((prev) => [newLog, ...prev]);

    setNotificationState({
      show: true,
      message: `${type} with ${friendName} logged!`,
    });

    setTimeout(() => {
      setNotificationState({
        show: false,
        message: "",
      });
    }, 5000);
  };

  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-[#f8fafc] relative overflow-x-hidden">
        <Navbar />

        <Notification
          show={notificationState.show}
          message={notificationState.message}
        />

        <main className="flex-grow">
          <AppRoutes
            friendsData={friendsData}
            activityLogs={activityLogs}
            recordInteraction={recordInteraction}
          />
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;