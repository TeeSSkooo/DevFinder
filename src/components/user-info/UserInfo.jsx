import lightLocation from '../../images/icons/light-location.png';
import darkLocation from '../../images/icons/dark-location.png';
import lightGithub from '../../images/icons/light-github.png';
import darkGithub from '../../images/icons/dark-github.png';
import lightTwitter from '../../images/icons/light-twitter.png';
import darkTwitter from '../../images/icons/dark-twitter.png';
import lightCompany from '../../images/icons/light-company.png';
import darkCompany from '../../images/icons/dark-company.png';
import lightArrow from '../../images/icons/light-arrow.png';
import darkArrow from '../../images/icons/dark-arrow.png';

import './UserInfo.scss';
import './media.scss';

function formatDate(date) {
  const dateTime = new Date(date);

  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'June',
    'July',
    'Aug',
    'Sept',
    'Oct',
    'Nov',
    'Dec',
  ];

  return {
    year: dateTime.getFullYear(),
    month: months[dateTime.getMonth()],
    day: dateTime.getDate(),
  };
}

const UserInfo = ({ isDarkTheme, user, setProcess }) => {
  const { year, month, day } = formatDate(user.created);

  const handleClick = () => setProcess('confirmed list');

  return (
    <section className="user-info">
      <div className="user-info__container">
        <div className="user-info__wrapper">
          <div className="user-info__img">
            <img src={user.thumbnail} alt="Avatar" />
            <div className="user-info__link-row">
              <img
                className="user-info__arrow-back"
                src={`${isDarkTheme ? darkArrow : lightArrow}`}
                alt="Arrow back"
              />
              <a
                className="user-info__link"
                href="#"
                tabIndex="0"
                onClick={handleClick}
              >
                Back to list
              </a>
            </div>
          </div>
          <div className="user-info__descr">
            <div className="user-info__inner">
              <div>
                <h1 className="user-info__name">
                  {user.name ? user.name : 'name not specified'.toUpperCase()}
                </h1>
                <a className="user-info__login" href="#">
                  @{user.login}
                </a>
              </div>
              <div className="user-info__join-date">
                Joined at {day} {month} {year}
              </div>
            </div>
            <div className="user-info__position">
              {user.bio ? user.bio : 'This user does not have bio'}
            </div>
            <div className="user-info__row">
              <div className="user-info__col">
                <h3>Repos</h3>
                <div>{user.repositories}</div>
              </div>
              <div className="user-info__col">
                <h3>Following</h3>
                <div>{user.following}</div>
              </div>
              <div className="user-info__col">
                <h3>Followers</h3>
                <div>{user.followers}</div>
              </div>
            </div>
            <div className="user-info__links">
              <div>
                <div className="links-wrapper">
                  <img
                    src={`${isDarkTheme ? darkLocation : lightLocation}`}
                    alt="Location"
                  />
                  <a className="user-info__location" href="#">
                    {user.location ? user.location : 'not indicated'}
                  </a>
                </div>
                <div className="links-wrapper">
                  <img
                    src={`${isDarkTheme ? darkGithub : lightGithub}`}
                    alt="Chain"
                  />
                  <a className="user-info__ref" href={user.url}>
                    GitHub
                  </a>
                </div>
              </div>
              <div>
                <div className="links-wrapper">
                  <img
                    src={`${isDarkTheme ? darkTwitter : lightTwitter}`}
                    alt="Social"
                  />
                  <a className="user-info__social" href="#">
                    {user.twitterUsername
                      ? user.twitterUsername
                      : 'not indicated'}
                  </a>
                </div>
                <div className="links-wrapper">
                  <img
                    src={`${isDarkTheme ? darkCompany : lightCompany}`}
                    alt="Company"
                  />
                  <a className="user-info__company" href="#">
                    {user.companies ? user.companies : 'no company'}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default UserInfo;
