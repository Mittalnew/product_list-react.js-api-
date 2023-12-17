// src/components/ProductCard.js
import React from "react";

const ProductCard = ({ imageUrl, productName, companyName, price }) => {
  return (
    <div
      className="bg-white p-2 rounded-md shadow-md hover:shadow-lg transition duration-300"
      style={{ width: "15rem", margin: "0.5rem" }}
    >
      <div className="aspect-w-3 aspect-h-4 mb-2">
        <img
          src={imageUrl}
          alt={productName}
          className="object-cover rounded-md shadow"
        />
      </div>
      <h3 className="text-xs font-bold mb-1">{productName}</h3>
      <p className="text-gray-600 text-xs mb-1">{companyName}</p>
      <p className="text-green-500 font-bold text-sm">{price}</p>
    </div>
  );
};

export default ProductCard;
