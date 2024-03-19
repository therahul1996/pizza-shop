import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useDispatch, useSelector } from "react-redux";
import { addOrder } from "../redux/orderSlice";

const OrderFood = () => {
  const dispatch = useDispatch();
  const [error, setError] = useState({})
  const orders = useSelector((state) => state.order);

  const [orderData, setOrderData] = useState({ type: '', size: '', base: '' });

  const handleOrderSubmit = (e) => {
    e.preventDefault();

  
    if (orders.length >= 10) {
      setError({message: "You don't have access to create a new order now. Please wait."});
    } else {
      const newOrder = {
        id: Date.now(),
        date: new Date().toLocaleString(),
        status: "Placed",
        ...orderData,
      };

      dispatch(addOrder(newOrder));
      setOrderData({ type: "", size: "", base: "" }); 
    }
  };
  return (
    <Form className="border p-3 rounded" onSubmit={handleOrderSubmit}>
      <h2>Create Order</h2>
      <Form.Group className="mb-3">
        <Form.Label>Types</Form.Label>
        <Form.Select aria-label="Default select example"  onChange={(e) => setOrderData({ ...orderData, type: e.target.value })}
          value={orderData.type}>
          <option>select type</option>
          <option value="veg">Veg</option>
          <option value="non-veg">Non Veg</option>
        </Form.Select>
        
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Size</Form.Label>
        <Form.Select aria-label="Default select example"  onChange={(e) => setOrderData({ ...orderData, size: e.target.value })}
          value={orderData.size}> 
        
          <option>select size</option>
          <option value="large">Large</option>
          <option value="medium">Medium</option>
          <option value="small">Small</option>
        </Form.Select>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Base</Form.Label>
        <Form.Select aria-label="Default select example" onChange={(e) => setOrderData({ ...orderData, base: e.target.value })}
          value={orderData.base}>
          <option>select base</option>
          <option value="thin">Thin</option>
          <option value="thick">Thick</option>
        </Form.Select>
      </Form.Group>
      {error && <Form.Text className="text-danger">
         {error.message}
        </Form.Text> }
      
      <Button variant="primary" type="submit" className="d-block">
        Submit
      </Button>
    </Form>
  );
};

export default OrderFood;
