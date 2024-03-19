import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useDispatch, useSelector } from "react-redux";
import { cancelOrder } from "../redux/orderSlice";
const DisplayFood = () => {
  const orders = useSelector((state) => state.order);
  const dispatch = useDispatch();
  const handleCancelOrder = (orderId) => {
    dispatch(cancelOrder(orderId));
  };
  return (
    <div className="border p-2 rounded">
      <div className="row ">
        {orders.length > 0 ? (
          orders.map((item, index) => (
            <div className="col-md-4 mb-2" key={index}>
              <Card className="w-full">
                <Card.Body>
                  <Card.Title className="text-sm">
                    Order Id: {item.id}
                  </Card.Title>
                  <Card.Text>Status: {item.status}</Card.Text>
                  <Button variant="danger" disabled={item.status === "Ready" || item.status === "Picked"} onClick={() => handleCancelOrder(item.id)}>
                    Cancel order
                  </Button>
                </Card.Body>
              </Card>
            </div>
          ))
        ) : (
          <p className="text-center">No Data Found</p>
        )}
      </div>
    </div>
  );
};

export default DisplayFood;
