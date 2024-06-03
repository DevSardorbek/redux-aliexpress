import React from "react";
import Product from "../../components/product/Product";
import { useSelector } from "react-redux";

const Wishlist = () => {
  let heart = useSelector((state) => state.wishlistReducer.value);
  return (
    <div>
      <Product data={heart} />
    </div>
  );
};

export default Wishlist;
