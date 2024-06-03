import React from "react";
import Hero from "../../components/hero/Hero";
import Product from "../../components/product/Product";
import { useFetch } from "../../hooks/useFetch";

const Home = () => {
  const { data, loading } = useFetch("/products");
  console.log(data);
  return (
    <div>
      <Hero />
      <Product data={data?.data?.products} loading={loading} />
    </div>
  );
};

export default Home;
