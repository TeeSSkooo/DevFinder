import { useState } from 'react';
import { useDebouncedCallback } from 'use-debounce';

import GithubService from '../../services/GithubService';

import lightSearch from '../../images/icons/light-search.svg';
import darkSearch from '../../images/icons/dark-search.svg';

import './SearchBar.scss';
import './media.scss';

const SearchBar = ({ isDarkTheme, setProcess, users, setUsers }) => {
  const githubService = new GithubService();

  const findUser = useDebouncedCallback((name) => {
    setProcess('loading');

    githubService
      .getUserByName(name)
      .then((user) => {
        setUsers([...users, user]);
        setProcess('confirmed list');
      })
      .catch(() => setProcess('error'));
  }, 400);

  const handleChange = (event) => {
    const inputValue = event.currentTarget.value;

    if (inputValue.length === 0) {
      setProcess('waiting');
      setUsers([]);
      return;
    }

    findUser(inputValue);
  };

  return (
    <section className="search">
      <div className="search__container">
        <form className="search__form">
          <div className="search__inner">
            <img
              className="search__icon"
              src={`${isDarkTheme ? darkSearch : lightSearch}`}
              alt="Search"
            />
            <input
              className="search__input"
              type="text"
              placeholder="Search GitHub user..."
              onChange={handleChange}
            />
          </div>
        </form>
      </div>
    </section>
  );
};

export default SearchBar;
