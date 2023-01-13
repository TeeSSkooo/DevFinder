import { Helmet } from 'react-helmet';

import GithubServise from '../../services/GithubService';
import { loading, confirmedUser, error } from '../../actions';

import './UsersList.scss';
import './media.scss';

function getUniqueUsers(users) {
  const usersJson = [];

  users.forEach((user) => usersJson.push(JSON.stringify(user)));

  const uniqueUsers = Array.from(new Set(usersJson));

  return uniqueUsers.map((userJson) => JSON.parse(userJson));
}

const UsersList = ({ users, setUser, dispatch }) => {
  const filteredUsers = users.filter((user) => user.login);
  const uniqueUsers = getUniqueUsers(filteredUsers);

  const githubService = new GithubServise();

  const handleClick = (event) => {
    dispatch(loading());

    githubService
      .getUserByName(event.currentTarget.dataset.userLogin)
      .then((user) => {
        setUser(user);

        dispatch(confirmedUser());
      })
      .catch(() => dispatch(error()));
  };

  return (
    <>
      <Helmet>
        <title>Dev Finder</title>
        <meta name="description" content="Users list" />
      </Helmet>
      <section className="users">
        <div className="users__container">
          <ul className="users__list">
            {uniqueUsers.map((user) => {
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
    </>
  );
};

export default UsersList;
