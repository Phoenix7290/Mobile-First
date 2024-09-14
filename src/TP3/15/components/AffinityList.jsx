import users from '../data/users';

const calculateAffinity = (userPreferences, otherUsers) => {
    return otherUsers.map((user) => {
      const matches = userPreferences.filter((pref, index) => pref.liked === user.preferences[index].liked);
      const affinity = (matches.length / userPreferences.length) * 100;
      return { ...user, affinity: Math.round(affinity) };
    });
  };
  

const AffinityList = ({ preferences }) => {
  const affinities = calculateAffinity(preferences, users);

  return (
    <div>
      <h2>Usuários com Afinidades Similares</h2>
      <ul>
        {affinities.map((user, index) => (
          <li key={index}>
            {user.name} - Afinidade: {user.affinity}%
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AffinityList;
