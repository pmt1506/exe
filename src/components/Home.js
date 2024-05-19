import React from "react";
import { Link } from "react-router-dom";
import coffeeItems from "./CoffeeItems";
import workshopItems from "./WorkshopItems";
import "../Home.css"; // Assuming you have a CSS file for Home component styling

const Home = () => {
  // Sort coffee items by rating in descending order and take the top 4
  const topRatedCoffee = coffeeItems
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 4);

  // Get current date
  const currentDate = new Date();

  // Separate workshops into current and upcoming
  const currentWorkshops = workshopItems.filter(
    (workshop) => new Date(workshop.date) <= currentDate
  );
  const upcomingWorkshops = workshopItems.filter(
    (workshop) => new Date(workshop.date) > currentDate
  );

  return (
    <div className="container">
      {/* Promotional Banner */}
      <div className="row mt-4">
        <div className="col-md-12">
          <div className="jumbotron">
            <h1 className="display-4">Welcome to Our Coffee Shop!</h1>
            <p className="lead">
              Enjoy the best coffee in town and join our exclusive workshops.
            </p>
            <hr className="my-4" />
            <p>Get 10% off your first coffee order! Use code: WELCOME10</p>
          </div>
        </div>
      </div>

      {/* Featured Coffee Products */}
      <div className="row">
        <div className="col-md-12">
          <h2>Featured Coffee Products</h2>
          <div className="row">
            {topRatedCoffee.length > 0 ? (
              topRatedCoffee.map((product) => (
                <div key={product.id} className="col-md-3">
                  <div className="card mb-4">
                    <img
                      src={product.imageUrl}
                      className="card-img-top"
                      alt={product.name}
                    />
                    <div className="card-body">
                      <h5 className="card-title">
                        <Link to={`/coffee/${product.id}`}>{product.name}</Link>
                      </h5>
                      <p className="card-text">{product.description}</p>
                      <p className="card-text">
                        <strong>Price: </strong>
                        {product.price}
                      </p>
                      <p className="card-text">
                        <strong>Rating: </strong>
                        {product.rating} ⭐
                      </p>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-md-12">
                <p>No featured coffee products available.</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Current Workshops */}
      <div className="row mt-4">
        <div className="col-md-12">
          <h2>Current Workshops</h2>
          <div className="row">
            {currentWorkshops.length > 0 ? (
              currentWorkshops.map((workshop) => (
                <div key={workshop.id} className="col-md-6">
                  <div className="card mb-4">
                    <img
                      src={workshop.imageUrl}
                      className="card-img-top"
                      alt={workshop.title}
                    />
                    <div className="card-body">
                      <h5 className="card-title">
                        <Link to={`/workshop/${workshop.id}`}>
                          {workshop.title}
                        </Link>
                      </h5>
                      <p className="card-text">{workshop.description}</p>
                      <p className="card-text">
                        <strong>Date: </strong>
                        {new Date(workshop.date).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-md-12">
                <p>No current workshops available.</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Upcoming Workshops */}
      <div className="row mt-4">
        <div className="col-md-12">
          <h2>Upcoming Workshops</h2>
          <div className="row">
            {upcomingWorkshops.length > 0 ? (
              upcomingWorkshops.map((workshop) => (
                <div key={workshop.id} className="col-md-6">
                  <div className="card mb-4">
                    <img
                      src={workshop.imageUrl}
                      className="card-img-top"
                      alt={workshop.title}
                    />
                    <div className="card-body">
                      <h5 className="card-title">
                        <Link to={`/workshop/${workshop.id}`}>
                          {workshop.title}
                        </Link>
                      </h5>
                      <p className="card-text">{workshop.description}</p>
                      <p className="card-text">
                        <strong>Date: </strong>
                        {new Date(workshop.date).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-md-12">
                <p>No upcoming workshops available.</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="row mt-4">
        <div className="col-md-12">
          <h2 className="testimonial-heading">What Our Customers Say</h2>
          <div className="card-deck">
            {/* Testimonial Card 1 */}
            <div className="card testimonial-card">
              <div className="card-horizontal">
                <div className="img-square-wrapper">
                  <img
                    className="img-fluid"
                    src="https://via.placeholder.com/150"
                    alt="Customer"
                  />
                </div>
                <div className="card-body">
                  <p className="card-text">
                    "Best coffee in town! The workshops are fantastic too." -
                    Jane Doe
                  </p>
                </div>
              </div>
            </div>

            {/* Testimonial Card 2 */}
            <div className="card testimonial-card">
              <div className="card-horizontal">
                <div className="img-square-wrapper">
                  <img
                    className="img-fluid"
                    src="https://via.placeholder.com/150"
                    alt="Customer"
                  />
                </div>
                <div className="card-body">
                  <p className="card-text">
                    "I love the atmosphere and the coffee is top-notch." - John
                    Smith
                  </p>
                </div>
              </div>
            </div>

            {/* Testimonial Card 3 */}
            <div className="card testimonial-card">
              <div className="card-horizontal">
                <div className="img-square-wrapper">
                  <img
                    className="img-fluid"
                    src="https://via.placeholder.com/150"
                    alt="Customer"
                  />
                </div>
                <div className="card-body">
                  <p className="card-text">
                    "Great service and delicious coffee!" - Mary Johnson
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
