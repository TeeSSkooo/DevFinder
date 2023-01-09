import { useDebouncedCallback } from 'use-debounce';

import GithubService from '../../services/GithubService';

import lightSearch from '../../images/icons/light-search.svg';
import darkSearch from '../../images/icons/dark-search.svg';

import './SearchBar.scss';
import './media.scss';

const SearchBar = ({ isDarkTheme, setUser, setProcess }) => {
  const githubService = new GithubService();

  const findUser = useDebouncedCallback((name) => {
    setProcess('loading');

    githubService
      .getUserByName(name)
      .then((user) => {
        setUser(user);
        setProcess('confirmed');
      })
      .catch(() => setProcess('error'));
  }, 400);

  const handleChange = (event) => findUser(event.currentTarget.value);

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
