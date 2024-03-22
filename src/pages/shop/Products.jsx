import { useEffect } from "react";
import { useState } from "react";
import "./Products.css";
import Cart from "../../shared/Cart";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [visible, setVisble] = useState(6);

  useEffect(() => {
    fetch("./products.JSON")
      .then((data) => data.json())
      .then((data) => setProducts(data));
  }, []);

  const handleCart = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
  };

  const handleShowMore = () => {
    setVisble(prevValue=>prevValue+3)
  };

  console.log(visible)

  return (
    <div className="my-8 max-w-[1200px] mx-auto">
      <h1 className="m-4 text-3xl text-purple-600 font-semibold ">
        <span className="products-title">All Our Products here</span>
      </h1>
      <div className="products">
        {products.slice(0, visible).map((product) => (
          <div
            key={product.key}
            className="card card-compact w-96 bg-base-100 shadow-xl"
          >
            <figure>
              <img src={product.img} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{product.name.slice(0, 36)}</h2>
              <h2 className="text-red-600 text-2xl">Price: {product.price}</h2>
              <div className="card-actions justify-end">
                <button
                  onClick={() => handleCart(product)}
                  className="btn btn-primary"
                >
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mx-auto">

        <button onClick={handleShowMore} className="btn btn-secondary mt-6">
          Load More
        </button>
      </div>
      <Cart cart={cart} />
    </div>
  );
};

export default Products;
