import './cart-icon.styles.scss'
import { ReactComponent as ShopingIcon} from '../../assets/shopping-bag.svg'
import { CartContext } from '../../contexts/cart.context';
import { useContext } from 'react';
const CartIcon = () => { 
  const { isCartOpen, setIsCartOpen } = useContext(CartContext);

  const toggleCart = () => {
setIsCartOpen(!isCartOpen);
  }
    return (
      <div className="cart-icon-container" onClick={toggleCart}>
        <ShopingIcon className="shopping-icon" />
        <span className="item-count">0</span>
      </div>
    );
}
 
export default CartIcon;