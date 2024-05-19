import React from "react";
import { Link, useParams } from "react-router-dom";
import workshopItems from "./WorkshopItems";

const WorkshopDetail = () => {
  const { id } = useParams(); // Get workshop id from URL params

  // Find workshop by id
  const workshop = workshopItems.find(
    (workshop) => workshop.id === parseInt(id)
  );

  // Return 404 if workshop not found
  if (!workshop) {
    return <h1>Workshop not found</h1>;
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <button className="btn btn-primary">
            <Link to="/" className="text-white"><i class="bi bi-arrow-left"></i> Back</Link>
          </button>
          <h1>{workshop.title}</h1>
          <img
            src={workshop.imageUrl}
            alt={workshop.title}
            style={{ maxWidth: "100%" }}
          />
          <p>
            <strong>Date:</strong>{" "}
            {new Date(workshop.date).toLocaleDateString()}
          </p>
          <p>
            <strong>Description:</strong> {workshop.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default WorkshopDetail;
