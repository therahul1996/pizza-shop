import React from "react";
import OrderFood from "../components/OrderFood";
import DisplayFood from "../components/DisplayFood";
import MangeOrder from '../components/MangeOrder';

const UserSide = () => {
  return (
    <section className="py-5">
      <div className="container">
      <h1>User Side</h1>
        <div className="row">
          <div className="col-md-4 border-right">
            <OrderFood />
          </div>
          <div className="col-md-8">
            <DisplayFood />
          </div>
          <div className="col-md-12">
            <MangeOrder />
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserSide;
