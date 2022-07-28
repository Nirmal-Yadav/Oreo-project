import React from "react";
import { useSelector } from "react-redux";
import "../../../CSS/productDetail.css";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";

const ProductDetail = () => {
  const myState = useSelector((data) => data.switchNav);
  return (
    <div className="pd-container" style={{ width: myState.headerWidth }}>
      <div className="pd-content">
        <div className="pd-left-container">
          <img
            src="https://thememakker.com/templates/oreo/html/assets/images/ecommerce/4.png "
            alt=""
            className="pd-img"
          />
          <div className="pd-images-container">
            <img
              src="https://thememakker.com/templates/oreo/html/assets/images/ecommerce/4.png "
              alt=""
              className="pd-a"
            />
            <img
              src="https://thememakker.com/templates/oreo/html/assets/images/ecommerce/5.png "
              alt=""
              className="pd-a"
            />
            <img
              src="https://thememakker.com/templates/oreo/html/assets/images/ecommerce/14.png "
              alt=""
              className="pd-a"
            />
            <img
              src="https://thememakker.com/templates/oreo/html/assets/images/ecommerce/7.png "
              alt=""
              className="pd-a"
            />
          </div>
        </div>
        <div className="pd-right-container">
          <div className="pd-product-name">Simple Black Clock</div>
          <div className="pd-product-price">
            Current Price:<span className="pd-price"> $180</span>
          </div>
          <div className="pd-star-conatiner">
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarBorderIcon />
            <span className="pd-review">41 reviews</span>
          </div>
          <p className="pd-product-info">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
          <div className="pd-product-vote">
            <span className="pd-78 pd-a"> 78% </span>of buyers enjoyed this
            product!
            <span className="pd-23-vote pd-a"> (23 votes)</span>
          </div>
          <div className="pd-sizes">
            sizes: <span className="pd-size-dif"> s m l xl</span>
          </div>
          <div className="pd-icon-container">
            <button className="pd-cart-button"> Add To Cart</button>
            <div className="pd-like-icon-container">
              <FavoriteIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProductDetail;
