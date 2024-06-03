import React, { useEffect, useRef, useState } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import "../../sass/__admin.scss";
ChartJS.register(ArcElement, Tooltip, Legend);
import axios from "axios";

const Admin = () => {
  const [product, setProduct] = useState(null);
  useEffect(() => {
    axios
      .get("https://dummyjson.com/products?limit=5")
      .then((res) => setProduct(res.data.products));
  }, []);
  console.log(product);

  const data = {
    labels: product?.map((el) => el.title),
    datasets: [
      {
        label: "product",
        data: product?.map((el) => el.stock),
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const chartRef = useRef(null);
  useEffect(() => {
    if (chartRef && chartRef.current) {
      const ctx = chartRef.current.getContext("2d");
      if (ctx) {
        new Chart(ctx, {
          type: "bar",
          data: data,
          options: options,
        });
      }
    }
  }, []);

  return (
    <div className="chart">
      <Doughnut data={data} />
    </div>
  );
};

export default Admin;
