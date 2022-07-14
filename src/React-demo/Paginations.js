import React from "react";
import { Link } from "react-router-dom";

const Paginations = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
          <nav>
        <ul className="pagination">
          {pageNumbers.map((number) => (
            <li key={number} className="page-item">
              <Link
                to="/dashboard"
                onClick={() => paginate(number)}
                className="page-link"
              >
                {number}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

          </div>
        </div>
      </div>

    </div>
  );
};

export default Paginations;
