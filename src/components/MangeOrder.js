import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useDispatch, useSelector } from "react-redux";
import { updateOrderStatus } from "../redux/orderSlice";
const MangeOrder = () => {
  const orders = useSelector((state) => state.order);
  const dispatch = useDispatch();
  const [timeDifference, setTimeDifference] = useState({}); // State to hold time difference

  // Function to calculate time difference
  function calculateTimeDifference(createdAt) {
    const orderCreatedAt = new Date(createdAt);
    const currentTime = new Date();
    const timeDiffInMilliseconds = currentTime - orderCreatedAt;
    const minutes = Math.floor(timeDiffInMilliseconds / 60000);
    const seconds = Math.floor((timeDiffInMilliseconds % 60000) / 1000);
    return { minutes, seconds };
  }

  // Update time difference every second
  useEffect(() => {
    const intervalId = setInterval(() => {
      orders.forEach((order) => {
        if (order.status === "Placed") {
          setTimeDifference((prevTimeDifference) => ({
            ...prevTimeDifference,
            [order.id]: calculateTimeDifference(order.createdAt),
          }));
        }
        if (order.status === "Making") {
          setTimeDifference((prevTimeDifference) => ({
            ...prevTimeDifference,
            [order.id]: calculateTimeDifference(order.createdAt),
          }));
        }
        if (order.status === "Ready") {
          setTimeDifference((prevTimeDifference) => ({
            ...prevTimeDifference,
            [order.id]: calculateTimeDifference(order.createdAt),
          }));
        }
        if (order.status === "Picked") {
          setTimeDifference((prevTimeDifference) => ({
            ...prevTimeDifference,
            [order.id]: calculateTimeDifference(order.createdAt),
          }));
        }
      });
    }, 1000);

    return () => clearInterval(intervalId); // Clear interval when the component is unmounted
  }, [orders]);

  const handleStatusChange = (orderId) => {
    const orderToUpdate = orders.find((order) => order.id === orderId);
    if (orderToUpdate.status === "Placed") {
      dispatch(updateOrderStatus({ id: orderId, newStatus: "Making" }));
    }
    if (orderToUpdate.status === "Making") {
      dispatch(updateOrderStatus({ id: orderId, newStatus: "Ready" }));
    }
    if (orderToUpdate.status === "Ready") {
      dispatch(updateOrderStatus({ id: orderId, newStatus: "Picked" }));
    }
  };
  // function calculateTimeDifference(createdAt) {
  //   // Step 1: Convert the Order Creation Time to a Date Object
  //   const orderCreatedAt = new Date(createdAt);

  //   // Step 2: Calculate the Time Difference
  //   const currentTime = new Date();
  //   const timeDiffInMilliseconds = currentTime - orderCreatedAt; // Time difference in milliseconds

  //   // Convert time difference to minutes and seconds
  //   const minutes = Math.floor(timeDiffInMilliseconds / 60000); // 1 minute = 60,000 milliseconds
  //   const seconds = Math.floor((timeDiffInMilliseconds % 60000) / 1000); // 1 second = 1,000 milliseconds

  //   // Step 3: Format the Time Difference
  //   // Format the time difference in minutes and seconds
  //   const formattedTimeDifference = `${minutes} min ${seconds} sec`;

  //   return formattedTimeDifference;
  // }
  return (
    <section className="py-5">
      <div className="container">
        <h1>Admin Side</h1>
        <div className="row">
          <div className="col-md-12 mb-3">
            <Table responsive="sm">
              <thead>
                <tr>
                  <th className="w-25">Order placed</th>
                  <th className="w-25">Order in making</th>
                  <th className="w-25">Order Ready</th>
                  <th className="w-25">order picked</th>
                </tr>
              </thead>
              <tbody>
                {orders.length > 0 ? (
                  <tr>
                    <td>
                      <div className="row ">
                        {orders
                          .filter((order) => order.status === "Placed")
                          .map((item, index) => {
                            return (
                              <div className="col-md-12 mb-2" key={index}>
                                <Card
                                  className={`w-full ${
                                    timeDifference[item.id]?.minutes >= 3 &&
                                    "bg-danger text-white"
                                  }`}
                                >
                                  <Card.Body>
                                    <Card.Title>Order Id: {item.id}</Card.Title>
                                    <Card.Text>
                                      {" "}
                                      {timeDifference[item.id]
                                        ? `${
                                            timeDifference[item.id].minutes
                                          } min ${
                                            timeDifference[item.id].seconds
                                          } sec`
                                        : "Calculating..."}
                                    </Card.Text>
                                    <Button
                                      variant="primary"
                                      onClick={() =>
                                        handleStatusChange(item.id)
                                      }
                                    >
                                      Next
                                    </Button>
                                  </Card.Body>
                                </Card>
                              </div>
                            );
                          })}
                      </div>
                    </td>
                    <td>
                      <div className="row ">
                        {orders
                          .filter((order) => order.status === "Making")
                          .map((item, index) => (
                            <div className="col-md-12 mb-2" key={index}>
                              <Card
                                className={`w-full ${
                                  timeDifference[item.id]?.minutes >= 3 &&
                                  "bg-danger text-white"
                                }`}
                              >
                                <Card.Body>
                                  <Card.Title>Order Id: {item.id}</Card.Title>
                                  <Card.Text>
                                    {" "}
                                    {timeDifference[item.id]
                                      ? `${
                                          timeDifference[item.id].minutes
                                        } min ${
                                          timeDifference[item.id].seconds
                                        } sec`
                                      : "Calculating..."}
                                  </Card.Text>
                                  <Button
                                    variant="primary"
                                    onClick={() => handleStatusChange(item.id)}
                                  >
                                    Next
                                  </Button>
                                </Card.Body>
                              </Card>
                            </div>
                          ))}
                      </div>
                    </td>
                    <td>
                      <div className="row ">
                        {orders
                          .filter((order) => order.status === "Ready")
                          .map((item, index) => (
                            <div className="col-md-12 mb-2" key={index}>
                              <Card
                                className={`w-full ${
                                  timeDifference[item.id]?.minutes >= 3 &&
                                  "bg-danger text-white"
                                }`}
                              >
                                <Card.Body>
                                  <Card.Title>Order Id: {item.id}</Card.Title>
                                  <Card.Text>
                                    {" "}
                                    {timeDifference[item.id]
                                      ? `${
                                          timeDifference[item.id].minutes
                                        } min ${
                                          timeDifference[item.id].seconds
                                        } sec`
                                      : "Calculating..."}
                                  </Card.Text>
                                  <Button
                                    variant="primary"
                                    onClick={() => handleStatusChange(item.id)}
                                  >
                                    Next
                                  </Button>
                                </Card.Body>
                              </Card>
                            </div>
                          ))}
                      </div>
                    </td>
                    <td>
                      <div className="row ">
                        {orders
                          .filter((order) => order.status === "Picked")
                          .map((item, index) => (
                            <div className="col-md-12 mb-2" key={index}>
                              <Card
                                className={`w-full ${
                                  timeDifference[item.id]?.minutes >= 3 &&
                                  "bg-danger text-white"
                                }`}
                              >
                                <Card.Body>
                                  <Card.Title>Order Id: {item.id}</Card.Title>
                                  <Card.Text>
                                    {" "}
                                    {timeDifference[item.id]
                                      ? `${
                                          timeDifference[item.id].minutes
                                        } min ${
                                          timeDifference[item.id].seconds
                                        } sec`
                                      : "Calculating..."}
                                  </Card.Text>
                                  <Button
                                    variant="primary"
                                    onClick={() => handleStatusChange(item.id)}
                                  >
                                    Next
                                  </Button>
                                </Card.Body>
                              </Card>
                            </div>
                          ))}
                      </div>
                    </td>
                  </tr>
                ) : (
                  <tr>
                    <td className="text-center" colSpan={4}>
                      No Data Found
                    </td>
                  </tr>
                )}
              </tbody>
            </Table>
          </div>
          {/* <div className="col-md-12 mb-3">
            <Table responsive="sm" className="mt-3">
              <thead>
                <tr>
                  <th>Order Id</th>
                  <th>Stage</th>
                  <th>Total time spent (time from order placed)</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Order Id: 002</td>
                  <td>Order Ready</td>
                  <td>6 min 20 sec</td>
                  <td></td>
                </tr>
                <tr>
                  <td>Order Id: 003</td>
                  <td>Ordre In Making</td>
                  <td>3 min 40 sec </td>
                  <td>Cancel Button</td>
                </tr>
              </tbody>
              <tfoot>
                <tr>
                  <th>Total order delivered</th>
                  <th colSpan={2}>001</th>
                  <th></th>
                </tr>
              </tfoot>
            </Table>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default MangeOrder;
