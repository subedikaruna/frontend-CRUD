import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { NavLink } from "react-router-dom";
const CreateProduct = () => {
  let [productImage, setProductImage] = useState("");
  let [name, setName] = useState("");
  let [price, setPrice] = useState("");
  let [quantity, setQuantity] = useState("");
  return (
    <div>
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          //e.preventDefault is done to prevent default property(refresh)
          let data = {
            productImage: productImage,
            name: name,
            price: price,
            quantity: quantity,
          };
          //hit api using axios
          try {
            let result = await axios({
              url: "http://localhost:8000/products",
              method: "post",
              data: data,
            });
            setProductImage("");
            setName("");
            setPrice("");
            setQuantity("");

            toast.success(result.data.message);
          } catch (error) {
            if (error.response.data.message) {
              toast.error(error.response.data.message);
            } else {
              toast.error(error.message);
            }
          }

          // console.log(data)
        }}
      >
        <div>
          <label htmlFor="productImage">ProductImage</label>
          <input
            id="productImage"
            type="text"
            value={productImage}
            onChange={(e) => {
              setProductImage(e.target.value);
            }}
          ></input>
        </div>
        <div>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          ></input>
        </div>
        <div>
          <label htmlFor="price">Price</label>
          <input
            id="price"
            type="number"
            value={price}
            onChange={(e) => {
              setPrice(e.target.value);
            }}
          ></input>
        </div>
        <div>
          <label htmlFor="quantity">Quantity</label>
          <input
            id="quantity"
            type="number"
            value={quantity}
            onChange={(e) => {
              setQuantity(e.target.value);
            }}
          ></input>
        </div>
        <button type="submit">Submit</button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default CreateProduct;
