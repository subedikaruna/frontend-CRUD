import React, { useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate, useParams } from "react-router-dom";
const UpdateProduct = () => {
  let navigate = useNavigate();
  let params = useParams();
  let id = params.id;
  let [productImage, setProductImage] = useState("");
  let [name, setName] = useState("");
  let [price, setPrice] = useState("");
  let [quantity, setQuantity] = useState("");
  const getData = async () => {
    try {
      let result = await axios({
        url: `http://localhost:8000/products/${id}`,
        method: "get",
      });
      let data = result.data.result;
      setProductImage(data.productImage);
      setName(data.name);
      setPrice(data.price);
      setQuantity(data.quantity);
    } catch (error) {
      toast.error(error.message);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  let handleSubmit = async (e) => {
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
        url: `http://localhost:8000/products/${id}`,
        method: "patch",
        data: data,
      });

      // setAge("");
      // setName("");
      // setIsMarried(false);
      navigate(`/product/${id}`);
      toast.success(result.data.message);
    } catch (error) {
      if (error.response.data.message) {
        toast.error(error.response.data.message);
      } else {
        toast.error(error.message);
      }
    }

    // console.log(data)
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
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
        <button type="submit">Update</button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default UpdateProduct;
