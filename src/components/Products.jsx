/* eslint-disable no-unused-vars */
import { useEffect } from "react";
import { add } from "../store/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../store/productSlice";

function Products() {
  const dispatch = useDispatch();
  const { data: products, status } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(fetchProducts());

    // const fetchProducts = async () => {
    //   const res = await fetch("https://fakestoreapi.com/products");
    //   const data = await res.json();
    //   setProducts(data);
    // };
    // fetchProducts();
  }, []);

  function handleAdd(product) {
    dispatch(add(product));
  }

  if (status === "loading") {
    return <h1>Loading...</h1>;
  }
  if (status === "error") {
    return <h1>Error!!, Please try again</h1>;
  }

  return (
    <div className="productsWrapper">
      {products.map((product) => {
        return (
          <div className="card" key={product.id}>
            <img src={product.image} alt="product Image" />
            <h4>{product.title}</h4>
            <h5>{product.price}</h5>
            <button onClick={() => handleAdd(product)} className="btn">
              Add to cart
            </button>
          </div>
        );
      })}
      {/* <h4>Hello</h4> */}
    </div>
  );
}

export default Products;
