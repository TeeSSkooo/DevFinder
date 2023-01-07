import { useState } from 'react';

import Header from '../header/Header';
import SearchBar from '../search-bar/SearchBar';
import UserInfo from '../user-info/UserInfo';

import './App.scss';

export default function App() {
  const [isDarkTheme, setDarkTheme] = useState(false);

  const changeTheme = () => setDarkTheme((darkTheme) => !darkTheme);

  return (
    <div className={`app ${isDarkTheme ? 'dark-theme' : 'light-theme'}`}>
      <Header darkTheme={isDarkTheme} setDarkTheme={changeTheme} />
      <SearchBar isDarkTheme={isDarkTheme} />
      <UserInfo isDarkTheme={isDarkTheme} />
    </div>
  );
}
