import React, { useState } from "react";
import { Link } from "react-router-dom";
import '../CoffeeList.css';
import coffeeItems from "./CoffeeItems.js";

const CoffeeList = () => {
  const itemsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);

  const handleClick = (event, number) => {
    setCurrentPage(number);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = coffeeItems.slice(indexOfFirstItem, indexOfLastItem);

  const renderPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(coffeeItems.length / itemsPerPage); i++) {
      pageNumbers.push(i);
    }

    return (
      <nav>
        <ul className="pagination justify-content-center">
          {pageNumbers.map(number => (
            <li key={number} className={`page-item ${currentPage === number ? 'active' : ''}`}>
              <button className="page-link" onClick={(e) => handleClick(e, number)}>
                {number}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    );
  };

  return (
    <div className="container">
      <div className="row">
        {currentItems.map(item => (
          <div key={item.id} className="col-md-4">
            <div className="card mb-4">
              <img src={item.imageUrl} className="card-img-top" alt={item.name} />
              <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text">{item.description}</p>
                <p className="card-text"><strong>Price: </strong>{item.price}</p>
                <p className="card-text"><strong>Rating: </strong>{item.rating} ⭐</p>
                <Link to={`/coffee/${item.id}`} className="btn btn-primary">View Details</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      {renderPageNumbers()}
    </div>
  );
};

export default CoffeeList;
