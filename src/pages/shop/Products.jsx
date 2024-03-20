import { useEffect } from "react";
import { useState } from "react";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("./products.JSON")
      .then((data) => data.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="my-8 max-width-[1200px] m-auto">
      <h1>Products are coming soon..</h1>
      {
        products.map(product=>(
            <div key={product.key}>
                {product.name}
            </div>
        ))
      }
    </div>
  );
};

export default Products;
