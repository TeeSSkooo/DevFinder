import { useState } from 'react';

import search from '../../images/icons/search.png';

import './SearchBar.scss';

const SearchBar = () => {
  const [terms, setTerms] = useState('');

  const handleChange = (event) => setTerms(event.currentTarget.value);

  return (
    <section className="search">
      <div className="search__container">
        <form className="search__form">
          <div className="search__inner">
            <img className="search__icon" src={search} alt="Search" />
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
