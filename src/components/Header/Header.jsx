/** @format */
import "./header.styles.scss";
import Sprite from "../../assets/images/symbol-defs.svg";

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>ჩვენ შესახებ</li>
          <li>სერვისები</li>
          <li>უპირატესობები</li>
          <li>ფასები</li>
          <li>კონტაქტი</li>
          <li className="profile-item">
            <svg className="icon-profile">
              <use xlinkHref={`${Sprite}#icon-user`}></use>
            </svg>
          </li>
          <li className="phone-item">
            <svg className="icon-phone">
              <use xlinkHref={`${Sprite}#icon-old-phone`}></use>
            </svg>
            <span>+995 595 238 238</span>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
