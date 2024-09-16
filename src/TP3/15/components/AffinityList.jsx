import PropTypes from 'prop-types';
import UserItem from "./UserItem";

const AffinityList = ({ votedItems }) => {
  const users = [
    { id: 1, name: "User 1", votes: [{ item: "Movie 1", vote: "like" }] },
    { id: 2, name: "User 2", votes: [{ item: "Movie 1", vote: "dislike" }] }
  ];

  const calculateAffinity = (userVotes) => {
    let affinity = 0;
    votedItems.forEach((item) => {
      const match = userVotes.find((uv) => uv.item === item.item);
      if (match && match.vote === item.vote) {
        affinity++;
      }
    });
    return (affinity / votedItems.length) * 100;
  };

  return (
    <div className="affinity-list">
      <h2>Usuários com gostos parecidos</h2>
      {users.map((user) => (
        <UserItem
          key={user.id}
          name={user.name}
          affinity={calculateAffinity(user.votes)}
        />
      ))}
    </div>
  );
};

AffinityList.propTypes = {
  votedItems: PropTypes.arrayOf(
    PropTypes.shape({
      item: PropTypes.string.isRequired,
      vote: PropTypes.string.isRequired
    })
  ).isRequired
};

export default AffinityList;
