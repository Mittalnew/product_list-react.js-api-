import React, { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import Shimmer from "./Shimmer";

const CardList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setProducts(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex justify-center items-start h-screen">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1 mt-8">
        {/* Conditionally render Shimmer effect or ProductCards based on loading state */}
        {loading
          ? // Render Shimmer effect for each card
            Array.from({ length: 4 }).map((_, index) => (
              <Shimmer key={index} small />
            ))
          : // Render the ProductCard components once data is available
            products.map((product) => (
              <ProductCard
                key={product.id}
                imageUrl={product.image}
                productName={product.title}
                companyName={product.category}
                price={`$${product.price}`}
              />
            ))}
      </div>
    </div>
  );
};

export default CardList;
