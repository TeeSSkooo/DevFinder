import errorLight from '../../images/not-found-light.png';
import errorDark from '../../images/not-found-dark.png';

import './SearchError.scss';

const SearchError = ({ isDarkTheme }) => {
  return (
    <div className="error">
      <div className="error__container">
        <div className="error__inner">
          <img
            className="error__img"
            src={`${isDarkTheme ? errorDark : errorLight}`}
            alt="Error"
          />
          <h2 className="error__message">User not found :/</h2>
        </div>
      </div>
    </div>
  );
};

export default SearchError;
