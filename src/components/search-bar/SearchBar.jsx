import { useState } from 'react';

import GithubService from '../../services/GithubService';

import lightSearch from '../../images/icons/light-search.svg';
import darkSearch from '../../images/icons/dark-search.svg';

import './SearchBar.scss';
import './media.scss';

const SearchBar = ({ isDarkTheme, setUser, setProcess }) => {
  const [terms, setTerms] = useState('');

  const githubService = new GithubService();

  const findUser = (name) => {
    setProcess('loading');

    githubService
      .getUserByName(name)
      .then((user) => {
        setUser(user);
        setProcess('confirmed');
      })
      .catch(() => setProcess('error'));
  };

  const handleChange = (event) => setTerms(event.currentTarget.value);

  const handleSubmit = (event) => {
    event.preventDefault();

    findUser(terms);
  };

  return (
    <section className="search">
      <div className="search__container">
        <form className="search__form" onSubmit={handleSubmit}>
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
              value={terms}
              onChange={handleChange}
            />
            <button className="search__btn" type="submit">
              Search
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default SearchBar;
