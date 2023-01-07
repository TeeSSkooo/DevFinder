import { useState } from 'react';

import Header from '../header/Header';
import SearchBar from '../search-bar/SearchBar';
import UserInfo from '../user-info/UserInfo';
import Spinner from '../spinner/Spinner';

import errorLight from '../../images/not-found-light.png';
import errorDark from '../../images/not-found-dark.png';

import './App.scss';

function setContent(process, props) {
  switch (process) {
    case 'waiting':
      return (
        <div className="preload__container">
          <div
            style={{
              padding: '15px',
              boxShadow: '0 0 15px #ccc',
              borderRadius: '15px',
              textAlign: 'center',
            }}
          >
            <h2
              style={{
                textAlign: 'center',
                color: `${props.isDarkTheme ? '#7979f6' : '#2d8fff'}`,
              }}
            >
              Let's find developers from all over the world!
            </h2>
          </div>
        </div>
      );
    case 'loading':
      return <Spinner isDarkTheme={props.isDarkTheme} />;
    case 'confirmed':
      return <UserInfo isDarkTheme={props.isDarkTheme} user={props.user} />;
    case 'error':
      return (
        <div className="error__container">
          <div
            style={{
              padding: '15px',
              boxShadow: '0 0 15px #ccc',
              borderRadius: '15px',
              textAlign: 'center',
            }}
          >
            <img
              src={`${props.isDarkTheme ? errorDark : errorLight}`}
              alt="Error"
              style={{ width: '200px', height: '200px' }}
            />
            <h2
              style={{
                textAlign: 'center',
                color: `${props.isDarkTheme ? '#7979f6' : '#2d8fff'}`,
              }}
            >
              User not found :/
            </h2>
          </div>
        </div>
      );
    default:
      throw new Error('Unexpected process!');
  }
}

export default function App() {
  const [isDarkTheme, setDarkTheme] = useState(false);
  const [user, setUser] = useState(null);
  const [process, setProcess] = useState('waiting');

  const searchUser = (name) => setUser(name);

  const changeTheme = () => setDarkTheme((darkTheme) => !darkTheme);

  return (
    <div className={`app ${isDarkTheme ? 'dark-theme' : 'light-theme'}`}>
      <Header darkTheme={isDarkTheme} setDarkTheme={changeTheme} />
      <SearchBar
        isDarkTheme={isDarkTheme}
        setUser={searchUser}
        setProcess={setProcess}
      />
      {setContent(process, { isDarkTheme, user })}
    </div>
  );
}
