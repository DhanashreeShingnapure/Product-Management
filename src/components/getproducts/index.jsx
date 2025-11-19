import { useEffect, useState } from "react";
import './getproducts.css'

const GetProduct = () => {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const api = "https://fakestoreapi.com/products";
      const response = await fetch(api);
      const data = await response.json();
      console.log(data);
      setProducts(data);   
    };

    fetchProducts();
  }, []);

  const deleteProduct = async (id) => {
    try {
      const response = await fetch(`https://fakestoreapi.com/products/${id}`, {
        method: "DELETE"
      });

      const data = await response.json();
      console.log("Product deleted:", data);

      setProducts(products.filter(product => product.id !== id));

    } catch (error) {
      console.log("Error deleting product:", error);
    }
  };

  return (
    <div className="main-cont">
      <h1>Products</h1>

      <div className="products">
        {products.map((item) => (
          <div key={item.id}>
            <img src={item.image} alt={item.title}/>
            <h3>{item.title}</h3>
            <p><b>Price:</b> ${item.price}</p>
            <p style={{ fontSize: "12px" }}>{item.description.slice(0, 80)}...</p>

            <button>Buy Now</button>
            <button style={{backgroundColor:"red"}} onClick={() => deleteProduct(item.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GetProduct;
