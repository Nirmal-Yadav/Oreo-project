import React, { useState, useEffect } from "react";
import Data from "../../../data.json";
import { useSelector } from "react-redux";
import AddIcon from "@mui/icons-material/Add";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import Pagination from "../Pages/pagination";

const ProductPage = () => {
  const myState = useSelector((data) => data.switchNav);

  const [post, setPost] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(8);

  useEffect(() => {
    setPost(Data);
    console.log(post);
  }, [post]);

  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPosts = post.slice(indexOfFirstPost, indexOfLastPost);

  const page = (number) => {
    setCurrentPage(number);
  };

  return (
    <div className="pp-container" style={{ width: myState.headerWidth }}>
      {currentPosts.map((product, index) => {
        return (
          <div className="pp-product" key={index}>
            <img className="pp-img" src={product.image} alt="" />
            <div className="pp-button-container">
              <span className="pp-add-button-container pp-l1">
                <AddIcon className="pp-add-button" />
              </span>
              <span className="pp-cart-button-container pp-l1">
                <AddShoppingCartIcon className="pp-cart-icon" />
              </span>
            </div>
            <div className="pp-product-info">
              <div className="pp-product-name">{product.name}</div>
              <div className="pp-price-container">
                <span className="pp-actualPrice">{`$${product.actualPrice}`}</span>
                <span
                  className="pp-discount-price"
                  style={{ color: "red" }}
                >{`$${product.discountPrice}`}</span>
              </div>
            </div>
          </div>
        );
      })}
      <Pagination
        postPerPage={postPerPage}
        totalPosts={post.length}
        page={page}
      />
    </div>
  );
};

export default ProductPage;
