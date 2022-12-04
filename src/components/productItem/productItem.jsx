import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import React from "react";

export function ProductItem() {
  const [product, setProduct] = useState({});
  const params = useParams();
  console.log(params);
  useEffect(() => {
    async function fetchProduct(id) {
      const res = await fetch(`https://dummyjson.com/products/${id}`);
      const data = await res.json();

      setProduct(data);
    }
    fetchProduct(params.id);
  }, []);
  return (
    <div>
      <h2>{product.title}</h2>
      <p>{product.category}</p>
      <p>{product.price} €</p>
      <p>{product.rating} /5</p>
      <p>{product.description}</p>
      {product.images &&
        product.images.map((image) => {
          return <img src={image} />;
        })}
    </div>
  );
}
