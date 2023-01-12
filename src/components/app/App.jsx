import { useState } from 'react';

import Header from '../header/Header';
import SearchBar from '../search-bar/SearchBar';
import SearchError from '../search-error/SearchError';
import Skeleton from '../skeleton/Skeleton';
import Spinner from '../spinner/Spinner';
import UserInfo from '../user-info/UserInfo';
import UsersList from '../users-list/UsersList';

import './App.scss';

function setContent(process, props) {
  switch (process) {
    case 'waiting':
      return <Skeleton />;
    case 'loading':
      return <Spinner isDarkTheme={props.isDarkTheme} />;
    case 'confirmed list':
      return (
        <UsersList
          users={props.users}
          user={props.user}
          setUser={props.setUser}
          setProcess={props.setProcess}
        />
      );
    case 'confirmed user':
      return (
        <UserInfo
          isDarkTheme={props.isDarkTheme}
          user={props.user}
          setProcess={props.setProcess}
        />
      );
    case 'error':
      return <SearchError isDarkTheme={props.isDarkTheme} />;
    default:
      throw new Error('Unexpected process!');
  }
}

export default function App() {
  const [isDarkTheme, setDarkTheme] = useState(false);
  const [user, setUser] = useState(null);
  const [users, setUsers] = useState([]);
  const [process, setProcess] = useState('waiting');

  const changeTheme = () => setDarkTheme((darkTheme) => !darkTheme);

  return (
    <div className={`app ${isDarkTheme ? 'dark-theme' : 'light-theme'}`}>
      <Header darkTheme={isDarkTheme} setDarkTheme={changeTheme} />
      <SearchBar
        isDarkTheme={isDarkTheme}
        setProcess={setProcess}
        users={users}
        setUsers={setUsers}
      />
      {setContent(process, { isDarkTheme, setProcess, user, setUser, users })}
    </div>
  );
}
