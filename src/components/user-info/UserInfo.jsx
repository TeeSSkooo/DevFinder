import './UserInfo.scss';

import lightLocation from '../../images/icons/light-location.png';
import darkLocation from '../../images/icons/dark-location.png';
import lightChain from '../../images/icons/light-chain.png';
import darkChain from '../../images/icons/dark-chain.png';
import lightSocial from '../../images/icons/light-social.png';
import darkSocial from '../../images/icons/dark-social.png';
import lightCompany from '../../images/icons/light-company.png';
import darkCompany from '../../images/icons/dark-company.png';

const UserInfo = ({ isDarkTheme }) => {
  return (
    <section class="user-info">
      <div class="user-info__container">
        <div class="user-info__wrapper">
          <div class="user-info__img">
            <img src="https://via.placeholder.com/150" alt="Avatar" />
          </div>
          <div class="user-info__descr">
            <div class="user-info__inner">
              <div>
                <h1 class="user-info__name">Shemigon Bogdan</h1>
                <a class="user-info__login" href="#">
                  @atatatata
                </a>
              </div>
              <div class="user-info__join-date">Joined at 7 Feb 2018</div>
            </div>
            <div class="user-info__position">React Developer</div>
            <div class="user-info__row">
              <div class="user-info__col">
                <h3>Repos</h3>
                <div>59</div>
              </div>
              <div class="user-info__col">
                <h3>Following</h3>
                <div>5</div>
              </div>
              <div class="user-info__col">
                <h3>Followers</h3>
                <div>182</div>
              </div>
            </div>
            <div class="user-info__links">
              <div>
                <div class="links-wrapper">
                  <img
                    src={`${isDarkTheme ? darkLocation : lightLocation}`}
                    alt="Location"
                  />
                  <a class="user-info__location" href="#">
                    Malaga
                  </a>
                </div>
                <div class="links-wrapper">
                  <img
                    src={`${isDarkTheme ? darkChain : lightChain}`}
                    alt="Chain"
                  />
                  <a class="user-info__ref" href="#">
                    Mishanep.com
                  </a>
                </div>
              </div>
              <div>
                <div class="links-wrapper">
                  <img
                    src={`${isDarkTheme ? darkSocial : lightSocial}`}
                    alt="Social"
                  />
                  <a class="user-info__social" href="#">
                    pcgramota
                  </a>
                </div>
                <div class="links-wrapper">
                  <img
                    src={`${isDarkTheme ? darkCompany : lightCompany}`}
                    alt="Company"
                  />
                  <a class="user-info__company" href="#">
                    EPAM
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
