"use client";
import { cartActions } from "@/store/cart-slice";
import Image from "next/image";
import { useRef, useState } from "react";
import { useDispatch } from "react-redux";

const MenuItem: React.FC<{
  price: number;
  name: string;
  imageSrc: string;
  description: string;
  label: string;
}> = ({ price, name, imageSrc, description, label }) => {
  const inputValue = useRef<HTMLInputElement>(null);
  const [amount, setAmount] = useState<any>(1);
  const dispatch = useDispatch();
  const increaseAmountHandler = () => {
    setAmount((prevState: number) => {
      if (prevState < 5) {
        return (prevState = prevState + 1);
      } else return prevState;
    });
  };
  const decreaseAmountHandler = () => {
    setAmount((prevState: number) => {
      if (prevState > 1) {
        return (prevState = prevState - 1);
      } else return prevState;
    });
  };
  const submitHandler = (event: any) => {
    event.preventDefault();
    const item = {
      id: name,
      name: name,
      imageSrc,
      price,
      quantity: amount,
    };
    dispatch(cartActions.addToCart(item));
  };
  const inputValueHandler = () => {
    const value = inputValue.current!.value;
    setAmount(value);
  };
  return (
    <section className="box">
      <div className="image">
        <Image src={imageSrc} alt="menu item" width={100} height={100} />
      </div>
      <div className="text">
        <div className="title">
          <h3>{name}</h3>
          {label && <span className="label">{label}</span>}
          <span>$ {price.toFixed(2)}</span>
        </div>
        <p>{description}</p>
        <form onSubmit={submitHandler}>
          <label htmlFor="amount">Amount</label>
          <div className="amount">
            <button
              className="btn btn-secondary decrease"
              onClick={decreaseAmountHandler}
              type="button"
            >
              <span className="text text-1">-</span>
              <span className="text text-2">-</span>
            </button>
            <input
              type="number"
              min={1}
              max={5}
              step={1}
              value={amount}
              name="amount"
              id="amount"
              onChange={inputValueHandler}
              ref={inputValue}
            />
            <button
              className="btn btn-secondary increase"
              onClick={increaseAmountHandler}
              type="button"
            >
              <span className="text text-1">+</span>
              <span className="text text-2">+</span>
            </button>
          </div>
          <button
            className="btn btn-secondary"
            type="submit"
            name="submit"
            onClick={submitHandler}
          >
            <span className="text text-1">Add To Cart</span>
            <span className="text text-2">Add To Cart</span>
          </button>
        </form>
      </div>
    </section>
  );
};

export default MenuItem;
