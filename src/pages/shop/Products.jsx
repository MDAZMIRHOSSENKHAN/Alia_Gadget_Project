import { useEffect } from "react";
import { useState } from "react";
import "./Products.css";
import Cart from "../../shared/Cart";


const Products = () => {
  const [products, setProducts] = useState([]);
  const [cart,setCart] = useState([])

  useEffect(() => {
    fetch("./products.JSON")
      .then((data) => data.json())
      .then((data) => setProducts(data));
  }, []);

  const handleCart = (product) =>{
    let newCart = [...cart,product]
    setCart(newCart)
  }

  console.log(cart)

  return (
    <div className="my-8 max-w-[1200px] mx-auto">
      <h1 className="m-4 text-3xl text-purple-600 font-semibold ">
        <span className="products-title">All Our Products here</span>
      </h1>
      <div className="products">
        {products.map((product) => (
          <div
            key={product.key}
            className="card card-compact w-96 bg-base-100 shadow-xl"
          >
            <figure>
              <img src={product.img} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{product.name}</h2>

              <div className="card-actions justify-end">
                <button onClick={()=>handleCart(product)} className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Cart cart={cart}/>
    </div>
  );
};

export default Products;
