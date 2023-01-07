import { useState } from 'react';

import Header from '../header/Header';
import SearchBar from '../search-bar/SearchBar';

import './App.scss';

export default function App() {
  const [darkTheme, setDarkTheme] = useState(false);

  const changeTheme = () => setDarkTheme((darkTheme) => !darkTheme);

  return (
    <div className={`app ${darkTheme ? 'dark-theme' : 'light-theme'}`}>
      <Header darkTheme={darkTheme} setDarkTheme={changeTheme} />
      <SearchBar />
    </div>
  );
}
