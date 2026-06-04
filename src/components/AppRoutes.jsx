import { Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import FriendDetails from "./FriendDetails";
import Timeline from "./Timeline";
import FriendshipAnalytics from "./FriendAna";
import NotFound from "./NotFound";

const AppRoutes = ({
  friendsData,
  activityLogs,
  recordInteraction,
}) => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />

      <Route
        path="/friend/:id"
        element={
          <FriendDetails
            friends={friendsData}
            onAction={recordInteraction}
          />
        }
      />

      <Route
        path="/timeline"
        element={<Timeline events={activityLogs} />}
      />

      <Route
        path="/stats"
        element={<FriendshipAnalytics events={activityLogs} />}
      />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;

