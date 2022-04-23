import { Link } from "react-router-dom";
import {
  RiLoginBoxLine,
  RiLogoutBoxRLine,
  RiUserAddLine,
} from "react-icons/ri";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/">
          <span>My</span> List
        </Link>
      </div>
      <div className="menu">
        <ul>
          <li>
            <Link to="/login">
              <i>
                <RiLoginBoxLine />
              </i>
              Login
            </Link>
          </li>
          <li>
            <Link to="/register">
              <i>
                <RiUserAddLine />
              </i>
              Register
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
