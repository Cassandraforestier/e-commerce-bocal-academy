import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

function handleVisitItem() {}
export function Home() {
  const [products, setProducts] = useState({});

  useEffect(() => {
    async function fetchProduct(category) {
      const res = await fetch(
        `https://dummyjson.com/products/category/${category}`
      );
      const data = await res.json();
      const dictionnary = data.products.reduce((acc, current) => {
        if (acc[current.category] && acc[current.category].length >= 3) {
          return acc;
        } else {
          acc[current.category]
            ? acc[current.category].push(current)
            : (acc[current.category] = [current]);
          return acc;
        }
      }, {});
      setProducts((previousValue) => ({ ...previousValue, ...dictionnary }));
    }

    fetchProduct("smartphones");
    fetchProduct("laptops");
    fetchProduct("furniture");
  }, []);
  console.log(products);

  return (
    <div>
      {products &&
        Object.entries(products).map(([category, productsCategory], index) => {
          return (
            <div key={category}>
              {category}
              {productsCategory.map((product) => {
                return (
                  <div key={`${product.title}-${index}-${category}`}>
                    <h2>{product.title} </h2>
                    <p>{product.description}</p>
                    <p>{product.price} €</p>
                    <Link to={`/product/${product.id}`}>
                      Visiter le produit
                    </Link>
                  </div>
                );
              })}
            </div>
          );
        })}
    </div>
  );
}
