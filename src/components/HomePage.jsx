import Banner from "../components/Banner";
import StatsCards from "../components/Stat";
import FriendsDash from "../components/FriendsDash";

import friendsData from "../data/friends.json";

const HomePage = () => {
  return (
    <>
      <Banner />
      <StatsCards />
      <FriendsDash friends={friendsData} />
    </>
  );
};

export default HomePage;