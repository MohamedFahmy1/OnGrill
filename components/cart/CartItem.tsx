import Image from "next/image";
import menu1 from "/public/menu1.png";
import menu2 from "/public/menu2.png";
import menu3 from "/public/menu3.png";
import menu4 from "/public/menu4.png";
import menu5 from "/public/menu5.png";
import menu6 from "/public/menu6.png";
import { useDispatch } from "react-redux";
import { cartActions } from "@/store/cart-slice";

const CartItem: React.FC<{
  id: string;
  name: string;
  quantity: number;
  totalPrice: number;
  price: number;
  imageSrc: string;
}> = ({ id, imageSrc, price, name, quantity, totalPrice }) => {
  const dispatch = useDispatch();
  const increaseAmountHandler = () => {
    dispatch(
      cartActions.addToCart({
        id,
        price,
        quantity: 1,
        name,
        imageSrc,
      })
    );
  };
  const decreaseAmountHandler = () => {
    dispatch(cartActions.removeFromCart(id));
  };
  const removeCartHandler = () => {
    dispatch(cartActions.removeAllItems(id));
  };
  let image;
  switch (name) {
    case "Greek Salad":
      image = menu1;
      break;
    case "Tokusen Wagyu":
      image = menu2;
      break;
    case "Lasagne":
      image = menu3;
      break;
    case "Olivas Rellenas":
      image = menu4;
      break;
    case "Butternut Pumpkin":
      image = menu5;
      break;
    case "Opu Fish":
      image = menu6;
      break;
    default:
      break;
  }
  return (
    <section className="cartItem">
      <Image src={image!} alt="food" width={50} height={50}></Image>
      <div className="info">
        <div className="title">
          <p>{name}</p>
          <p>$ {totalPrice}</p>
        </div>
        <div className="amount">
          <div className="inputBox">
            <button
              className="btn btn-secondary decrease"
              onClick={decreaseAmountHandler}
            >
              <span className="text text-1">-</span>
              <span className="text text-2">-</span>
            </button>
            <input
              type="number"
              min={1}
              max={5}
              defaultValue={1}
              step={1}
              name="amount"
              id="amount"
              value={quantity}
            />
            <button
              className="btn btn-secondary increase"
              onClick={increaseAmountHandler}
            >
              <span className="text text-1">+</span>
              <span className="text text-2">+</span>
            </button>
          </div>
          <button className="removeCart" onClick={removeCartHandler}>
            X
          </button>
        </div>
      </div>
    </section>
  );
};

export default CartItem;
