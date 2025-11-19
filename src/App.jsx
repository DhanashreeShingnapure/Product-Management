import { useState } from "react";
import './App.css';
import GetProduct from "./components/getproducts";
import AddProduct from "./components/AddProduct";

function App() {

  const [activeComponent, setActiveComponent] = useState("");

  return (
    <>
      <h1>Product Management Store</h1>

      <div className="btn">
        <button onClick={() => setActiveComponent("get")}>
          Get Products
        </button>

        <button onClick={() => setActiveComponent("add")}>
          Add Product
        </button>
      </div>

      {activeComponent === "get" && <GetProduct />}
      {activeComponent === "add" && <AddProduct />}
    </>
  );
}

export default App;
