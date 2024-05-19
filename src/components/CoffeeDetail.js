import React from "react";
import { useParams } from "react-router-dom";
import coffeeItems from "./CoffeeItems.js";

const CoffeeDetail = () => {
  const { id } = useParams();
  const coffeeItem = coffeeItems.find((item) => item.id === parseInt(id));

  if (!coffeeItem) {
    return <h2>Coffee not found</h2>;
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <img
            src={coffeeItem.imageUrl}
            className="img-fluid"
            alt={coffeeItem.name}
          />
        </div>
        <div className="col-md-6">
          <h1>{coffeeItem.name}</h1>
          <p>{coffeeItem.description}</p>
          <p>
            <strong>Price: </strong>
            {coffeeItem.price}
          </p>
          <p>
            <strong>Rating: </strong>
            {coffeeItem.rating} ⭐
          </p>
        </div>
      </div>
    </div>
  );
};

export default CoffeeDetail;
