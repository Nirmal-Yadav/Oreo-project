import React from "react";

const Pagination = ({ postPerPage, totalPosts, page }) => {
  const pageNumber = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
    pageNumber.push(i);
  }
  return (
    <div>
      {pageNumber.map((number) => {
        return (
          <span key={number}>
            <a href=" " onClick={() => page(number)}>
              {number}
            </a>{" "}
          </span>
        );
      })}
    </div>
  );
};

export default Pagination;
