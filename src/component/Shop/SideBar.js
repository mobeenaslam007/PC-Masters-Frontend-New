import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
// Import Img
import { useHistory } from "react-router-dom";

import search from "../../assets/img/svg/search.svg";

const SideBar = (props) => {
  let products = useSelector((state) => state.products.products);
  //   console.log("products", products);
  const history = useHistory();

  let categoriesList = [];
  products.forEach((item) => {
    categoriesList.push(item["category"]);
  });

  categoriesList = [...new Set(categoriesList)];

  let productPrices = [];
  let vendorsList = [];
  // If there is any other category
  if (props.productCategory === "all") {
    products.forEach((item) => {
      productPrices.push(item["price"]);
      vendorsList.push(item["brand"]);
    });
  } else {
    products.forEach((item) => {
      if (item["category"] === props.productCategory) {
        productPrices.push(item["price"]);
        vendorsList.push(item["brand"]);
      }
    });
  }

  const productMinPrice = Math.min(...productPrices);
  const productMaxPrice = Math.max(...productPrices);

  vendorsList = [...new Set(vendorsList)];


  const [price, setPrice] = useState(productMaxPrice);
  useEffect(() => {
    props.setProductMinPrice(productMinPrice);
    props.setProductMaxPrice(price);
  }, [price]);

  useEffect(() => {
    setPrice(productMaxPrice);
    props.setProductMinPrice(productMinPrice);
    props.setProductMaxPrice(price);
    props.setProductVendor("all");
    
  }, [props.productCategory]);

  useEffect(() => {}, [props.productVendor]);

  return (
    <>
      <div className="col-lg-3">
        <div className="shop_sidebar_wrapper">
          {/* <div className="shop_Search">
            <form>
              <input
                type="text"
                className="form-control"
                placeholder="Search..."
                onKeyUp={() => {
                  props.filterEvent(1);
                }}
              />
              <button>
                <img src={search} alt="img" />
              </button>
            </form>
          </div> */}
          <div className="shop_sidebar_boxed">
            <h4>Product Categories</h4>
            <form>
              <label className="custom_boxed">
                ALL
                <input
                  type="radio"
                  name="radio"
                  value="all"
                  onChange={(e) => props.setProductCategory(e.target.value)}
                  checked={props.productCategory === "all"}
                />
                <span className="checkmark"></span>
              </label>

              {categoriesList.map((category) => (
                <label className="custom_boxed">
                  {category}
                  <input
                    type="radio"
                    name="radio"
                    value={category}
                    onChange={(e) => props.setProductCategory(e.target.value)}
                    checked={props.productCategory === category}
                  />
                  <span className="checkmark"></span>
                </label>
              ))}
            </form>
          </div>
          <div className="shop_sidebar_boxed">
            <h4>Price</h4>
            <div className="price_filter">
              <input
                type="range"
                min={productMinPrice}
                max={productMaxPrice}
                defaultValue={productMaxPrice}
                value={price}
                className="form-control-range"
                id="formControlRange"
                onChange={(e) => setPrice(e.target.value)}
              />
              <div className="price_slider_amount mt-2">
                <span>Price : {price}</span>
              </div>
            </div>
          </div>
          <div className="shop_sidebar_boxed">
            <h4>Vendor</h4>
            <form>
              <label className="custom_boxed">
                All
                <input
                  type="radio"
                  name="radio"
                  value="all"
                  onChange={(e) => props.setProductVendor(e.target.value)}
                  checked={props.productVendor === "all"}
                />
                <span className="checkmark"></span>
              </label>
              {vendorsList.map((vendor) => (
                <label className="custom_boxed">
                  {vendor}
                  <input
                    type="radio"
                    name="radio"
                    value={vendor}
                    onChange={(e) => props.setProductVendor(e.target.value)}
                  />
                  <span className="checkmark"></span>
                </label>
              ))}

              <div className="clear_button">
                <button
                  className="theme-btn-one btn_sm btn-black-overlay"
                  type="button"
                  onClick={() => {
                    props.filterEvent(1);
                  }}
                >
                  Clear Filter
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideBar;
