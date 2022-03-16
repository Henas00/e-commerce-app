import "./header.styles.scss";
import { Link, Outlet } from "react-router-dom";
import { ReactComponent as Logo} from '../../assets/crown.svg'
import { auth } from "../../firebase/firebase.utiles";
import { Fragment } from "react";
const Header = ({currentUser}) => {
  return (
    <Fragment>
      <header className="header">
        <Link className="logo-container" to="/">
          <Logo className="logo" />
          <h1>Crown</h1>
        </Link>
        <nav className="navbar">
          <Link to="/shop" className="navbar-item">
            Shop
          </Link>
          <Link to="/contact" className="navbar-item">
            Contact
          </Link>
          {currentUser ? (
            <div className="navbar-item" onClick={() => auth.signOut()}>
              Sign Out
            </div>
          ) : (
            <Link to="/auth" className="navbar-item">
              Sign In
            </Link>
          )}
        </nav>
      </header>
      <Outlet />
    </Fragment>
  );
};

export default Header;
