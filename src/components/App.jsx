import Profile from "./Profile";
import user from "../data/user.json";
import data from "../data/data.json";
import Statistics from "./Statistics";
import friends from "../data/friends.json";
import FriendList from "./FriendList";
import transactions from "../data/transactions.json";
import TransactionHistory from "./TransactionHistory";

function App() {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />;
      <TransactionHistory items={transactions} />;
    </>
  );
}

export default App;
