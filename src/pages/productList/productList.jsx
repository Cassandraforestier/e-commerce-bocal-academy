import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

export function ProductList() {
  const [listOfProduct, setListOfProduct] = useState([]);
  const [pagination, setPagination] = useState(0);
  const total = 90;
  useEffect(() => {
    async function retrieveData() {
      const res = await fetch(
        `https://dummyjson.com/products?limit=10&skip=${pagination}&select=title,price`
      );
      const data = await res.json();
      setListOfProduct(data.products);
    }
    retrieveData();
  }, [pagination]);

  return (
    <div>
      {listOfProduct.map((product) => {
        return (
          <div key={`${product.title}`}>
            <h2>{product.title} </h2>
            <p>{product.description}</p>
            <p>{product.price} €</p>
            <Link to={`/product/${product.id}`}>Visiter le produit</Link>
          </div>
        );
      })}
      {pagination > 0 && (
        <button
          type="button"
          onClick={() => {
            console.log("jesuiscliqué");
            setPagination((previousValue) => {
              return previousValue - 10;
            });
          }}
        >
          previous
        </button>
      )}
      {pagination < total && (
        <button
          type="button"
          onClick={() => {
            console.log("jesuiscliqué");
            setPagination((previousValue) => {
              return previousValue + 10;
            });
          }}
        >
          Next
        </button>
      )}
    </div>
  );
}
