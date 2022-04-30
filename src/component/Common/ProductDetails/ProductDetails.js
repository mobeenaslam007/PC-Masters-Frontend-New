import React, { useState } from "react";
import ProductInfo from "./ProductInfo";
import RelatedProduct from "./RelatedProduct";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { RatingStar } from "rating-star";
import Swal from "sweetalert2";

const ProductDetailsOne = () => {
  let dispatch = useDispatch();

  let { id } = useParams();
  dispatch({ type: "products/getProductById", payload: { id } });
  let product = useSelector((state) => state.products.single);

  // Add to cart
  const addToCart = async (id) => {
    dispatch({ type: "products/addToCart", payload: { id } });
  };

  // Add to Favorite
  const addToFav = async (id) => {
    dispatch({ type: "products/addToFav", payload: { id } });
  };

  // Add to Compare
  const addToComp = async (id) => {
    dispatch({ type: "products/addToComp", payload: { id } });
  };

  const colorSwatch = (i) => {
    let data = product.color.find((item) => item.color === i);
    setImg(data.img);
  };

  const [count, setCount] = useState(1);

  const [img, setImg] = useState(product.image[0]);

  const incNum = () => {
    setCount(count + 1);
  };
  const decNum = () => {
    if (count > 1) {
      setCount(count - 1);
    } else {
      Swal.fire("Sorry!", "Minimun Quantity Reached", "warning");
      setCount(1);
    }
  };
  return (
    <>
      {product ? (
        <section id="product_single_one" className="ptb-50">
          <div className="container">
            <div className="row area_boxed">
              <div className="col-lg-4 product_single_one_img">
                <img src={product.image[0]} alt="img" />
              </div>
              <div className="col-lg-8">
                <div className="product_details_right_one">
                  <div className="modal_product_content_one">
                    <h3>{product.title}</h3>
                    <div className="reviews_rating">
                      <RatingStar
                        maxScore={5}
                        rating={product.rating}
                        id="rating-star-common"
                      />
                      <span>({product.numReviews} Customer Reviews)</span>
                    </div>
                    <h4>
                      PKR {product.price}.00{" "}
                      <del>PKR {parseInt(product.price) + 17}.00</del>{" "}
                    </h4>
                    <p>{product.description}</p>

                    <form id="product_count_form_two">
                      <div className="product_count_one">
                        <div className="plus-minus-input">
                          <div className="input-group-button">
                            <button
                              type="button"
                              className="button"
                              onClick={decNum}
                            >
                              <i className="fa fa-minus"></i>
                            </button>
                          </div>
                          <input
                            className="form-control"
                            type="number"
                            value={count}
                            readOnly
                          />
                          <div className="input-group-button">
                            <button
                              type="button"
                              className="button"
                              onClick={incNum}
                            >
                              <i className="fa fa-plus"></i>
                            </button>
                          </div>
                        </div>
                      </div>
                    </form>
                    <div className="links_Product_areas">
                      <ul>
                        <li>
                          <a
                            href="#!"
                            className="action wishlist"
                            title="Wishlist"
                            onClick={() => addToFav(product.id)}
                          >
                            <i className="fa fa-heart"></i>Add To Wishlist
                          </a>
                        </li>
                        <li>
                          <a
                            href="#!"
                            className="action compare"
                            onClick={() => addToComp(product.id)}
                            title="Compare"
                          >
                            <i className="fa fa-exchange"></i>Add To Compare
                          </a>
                        </li>
                      </ul>
                      <a
                        href="#!"
                        className="theme-btn-one btn-black-overlay btn_sm"
                        onClick={() => addToCart(product.id)}
                      >
                        Add To Cart
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <ProductInfo /> */}
            <hr />
          </div>
        </section>
      ) : (
        <div className="container ptb-50">
          <div className="row">
            <div className="col-lg-6 offset-lg-3 col-md-6 offset-md-3 col-sm-12 col-12">
              <div className="empaty_cart_area">
                <img src={img} alt="img" />
                <h2>PRODUCT NOT FOUND</h2>
                <h3>Sorry Mate... No Item Found according to Your query!</h3>
                <Link to="/shop" className="btn btn-black-overlay btn_sm">
                  Continue Shopping
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      <RelatedProduct />
    </>
  );
};

export default ProductDetailsOne;
