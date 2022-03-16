import "./header.styles.scss";
import { Link, Outlet } from "react-router-dom";
import { signOutUser } from "../../firebase/firebase.utiles";
import { ReactComponent as Logo} from '../../assets/crown.svg'
import { Fragment, useContext } from "react";
import { UserContext } from "../../contexts/user.context";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import { CartContext } from "../../contexts/cart.context";
const Header = () => {
  const { currentUser } = useContext(UserContext)
  const { isCartOpen } = useContext(CartContext);

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
            <div className="navbar-item" onClick={signOutUser}>
              Sign Out
            </div>
          ) : (
            <Link to="/auth" className="navbar-item">
              Sign In
            </Link>
          )}
          <CartIcon />
        </nav>
        {isCartOpen && <CartDropdown/>}
      </header>
      <Outlet />
    </Fragment>
  );
};

export default Header;
