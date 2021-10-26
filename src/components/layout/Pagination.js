import React from "react";
import "./Layout.css";
import "../users/User.css";

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="parentContainer">
      {pageNumbers.map((number) => (
        <div className="pagination">
          <a onClick={() => paginate(number)} href="!#">
            {number}
          </a>
        </div>
      ))}
    </div>
  );
};

export default Pagination;
