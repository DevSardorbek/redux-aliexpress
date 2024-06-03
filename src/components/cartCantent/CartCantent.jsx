import React from "react";
import { RiDeleteBinLine } from "react-icons/ri";
import { FaAngleRight } from "react-icons/fa6";
import { HiPlusSm } from "react-icons/hi";
import { LuMinus } from "react-icons/lu";
import { useSelector } from "react-redux";
import "../../sass/__cartCantent.scss";

const CartCantent = () => {
  const cart = useSelector((store) => store.cartList);
  console.log(cart);
  let cartItem = cart?.map((el) => (
    <div key={el.id} className="cart__item">
      <div className="cart__item-img">
        <img src={el.images[0]} alt="img" />
      </div>
      <div className="cart__item-info">
        <p>{el.description}</p>
        <h3>{el.title}</h3>
      </div>
      <div className="cart__item-quantity">
        <button>
          <LuMinus />
        </button>
        <span>{el.quantity}</span>
        <button className="inc">
          <HiPlusSm />
        </button>
      </div>
      <div className="cart__item-price">
        <del>${Math.round(el.price * 1.4)}</del>
        <h2>${el.price}</h2>
      </div>
      <div className="cart__item-delete">
        <button>
          <RiDeleteBinLine />
        </button>
      </div>
    </div>
  ));
  return (
    <div className="cartCantent__wrapper">
      <div className="container">
        <div className="cartCantent__section">
          <div className="cartCantent__items">
            <div className="cartCantent__items-title">
              <h1>Cart</h1>
              <button>
                <RiDeleteBinLine />
              </button>
            </div>
            <div className="cart__items">{cartItem}</div>
          </div>
          <div className="cartCantent__select">
            <h3>Place on order</h3>
            <div className="cartContent__select-cart">
              <div className="carContent__select-img">
                <img src="img" alt="" />
                <img src="img" alt="" />
              </div>
              <div className="cartContent__select-price">
                <div>
                  <p>2items</p>
                  <p>8860000</p>
                </div>
                <div>
                  <p>Delivery</p>
                  <p>180000</p>
                </div>
                <button>
                  <p>Chekout</p>
                  <span>
                    <p>1034432 $</p>
                    <FaAngleRight />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartCantent;
