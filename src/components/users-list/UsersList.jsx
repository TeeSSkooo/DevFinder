import './UsersList.scss';
import './media.scss';

import GithubServise from '../../services/GithubService';

const UsersList = ({ users, user, setUser, setProcess }) => {
  const filteredUsers = users.filter((user) => user.login);

  const githubService = new GithubServise();

  const handleClick = (event) => {
    setProcess('loading');

    githubService
      .getUserByName(event.currentTarget.dataset.userLogin)
      .then((user) => {
        setUser(user);
        setProcess('confirmed user');
      })
      .catch(() => setProcess('error'));
  };

  return (
    <section className="users">
      <div className="users__container">
        <ul className="users__list">
          {filteredUsers.map((user) => {
            return (
              <li
                className="users__list-item"
                tabIndex="0"
                onClick={handleClick}
                key={user.id}
                data-user-login={user.login}
              >
                <div className="users__img">
                  <img src={user.thumbnail} alt="Avatar" />
                </div>
                <div className="users__login">@{user.login}</div>
                <div className="users__id">id: {user.id}</div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default UsersList;
