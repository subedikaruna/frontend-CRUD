import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ReadAllProduct = () => {
  let [Products, setProducts] = useState([]);
  let navigate = useNavigate();
  /*
    hit api on page load
    api gives data
    set data to state variable
    display data
    */
  let getData = async () => {
    try {
      let result = await axios({
        url: "http://localhost:8000/products",
        method: "get",
      });
      setProducts(result.data.result);
    } catch (error) {}
  };
  useEffect(() => {
    getData();
  }, []);
  const handleDelete = async (id) => {
    let result = await axios({
      url: `http://localhost:8000/products/${id}`,
      method: "delete",
    });
    getData();
    console.log(result);
    toast.success(result.data.message);
  };
  return (
    <div>
      <ToastContainer></ToastContainer>
      {Products.map((item, i) => {
        return (
          <div key={i} style={{ border: "solid red 3px", margin: "10px" }}>
            <p>name is {item.productImage}</p>
            <p>name is {item.name}</p>
            <p>price is {item.price}</p>
            <p>quantity is {item.quantity}</p>

            <button
              onClick={() => {
                navigate(`/product/${item._id}`);
              }}
            >
              View
            </button>
            <button
              onClick={() => {
                navigate(`/product/update/${item._id}`);
              }}
            >
              Edit
            </button>
            <button
              onClick={() => {
                handleDelete(item._id);
              }}
            >
              Delete
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default ReadAllProduct;
