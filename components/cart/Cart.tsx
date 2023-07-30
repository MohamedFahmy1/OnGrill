import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import { RootState } from "@/store/index";
const Cart: React.FC<{
  cartMenuActive: boolean;
  closeCartMenu: (status: boolean) => void;
}> = ({ cartMenuActive, closeCartMenu }) => {
  const closeCartMenuHandler = () => {
    closeCartMenu(false);
  };
  const items = useSelector((state: RootState) => state.cart.items);
  const totalPrice = useSelector((state: RootState) => state.cart.totalPrice);
  const totalQuantity = useSelector(
    (state: RootState) => state.cart.totalQuantity
  );
  return (
    <aside className={cartMenuActive ? "cart active" : "cart"}>
      <div className="overlay"></div>
      <button className="close" onClick={closeCartMenuHandler}>
        x
      </button>
      <h2>Your Shopping Cart ({totalQuantity})</h2>
      <div className="cartContainer">
        {items.map((item) => (
          <CartItem
            key={item.id}
            name={item.name}
            quantity={item.quantity}
            totalPrice={item.totalPrice}
            id={item.id}
            imageSrc={item.imageSrc}
            price={item.price}
          />
        ))}
      </div>
      <div className="total">
        <p>
          Subtotal:
          <br />$ {totalPrice}
        </p>
        <button className="btn btn-secondary">
          <span className="text text-1">Go To Check Out</span>
          <span className="text text-2">Go To Check Out</span>
        </button>
      </div>
    </aside>
  );
};

export default Cart;
