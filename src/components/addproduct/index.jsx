import { useState } from "react";
import './addproduct.css'

const AddProduct = () => {

    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");

    const addProduct = async (e) => {
        e.preventDefault();

        const newProduct = {
            title,
            price,
            description,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUVLqVuly-x39Mt_lhv9FR8NOpyaEofYbKcU9rcyxVK-Qn6PKMsIwPQghfuSnErJQBx7I&usqp=CAU"
        };

        const options ={
            method: "POST",
            body: JSON.stringify(newProduct)
        }


        const response = await fetch("https://fakestoreapi.com/products", options);

        const data = await response.json();
        console.log("Product added:", data);

        alert("Product Added Successfully!");

        setTitle("");
        setPrice("");
        setDescription("");
    };

    return (
        <form onSubmit={addProduct}>
            <h2>Add Product</h2>

            <input
                type="text"
                placeholder="Enter title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />

            <input
                type="number"
                placeholder="Enter price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
            />

            <textarea
                placeholder="Enter description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />

            <button type="submit">Add Product</button>
        </form>
    );
};

export default AddProduct;
