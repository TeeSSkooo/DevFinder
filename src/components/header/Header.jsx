import moon from '../../images/icons/moon.png';
import sun from '../../images/icons/sun.png';

import './Header.scss';

const Header = ({ darkTheme, setDarkTheme }) => {
  return (
    <header className="header">
      <div className="header__container">
        <div className="logo">DevFinder</div>
        <div className="header__inner">
          <button
            className="header__theme-btn"
            type="button"
            onClick={() => setDarkTheme()}
          >
            {darkTheme ? 'Light mode' : 'Dark mode'}
          </button>
          <img
            className="header__icon"
            src={darkTheme ? sun : moon}
            alt="Moon"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
