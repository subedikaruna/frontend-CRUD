import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ReadSpecificProduct = () => {
  let [product, setProduct] = useState([]);
  let params = useParams();

  let getData = async () => {
    try {
      let result = await axios({
        url: `http://localhost:8000/products/${params.id}`,
        method: "get",
      });
      setProduct(result.data.result);
      console.log(result);
    } catch (error) {}
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <p>productImage is {product.productImage}</p>
      <p>name is {product.name}</p>
      <p>price is {product.price}</p>
      <p>quantity is {product.quantity}</p>
    </div>
  );
};

export default ReadSpecificProduct;
