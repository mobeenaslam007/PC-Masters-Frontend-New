import React, { useState, useEffect } from "react";
import SideBar from "./SideBar";
import ProductCard from "../Common/Product/ProductCard";
import Filter from "./Filter";
import { useSelector, useDispatch } from "react-redux";
import { useLocation, useHistory } from "react-router-dom";
import { getAllProducts } from "../../app/actions/productActions";

const LeftSideBar = () => {
  const history = useHistory();
  const location = useLocation();

  const dispatch = useDispatch()

  const [products, setProducts] = useState(
    useSelector((state) => state.products.products)
  );

  // console.log("products", products);

  const [page, setPage] = useState(1);
  let allData = [...useSelector((state) => state.products.products)];

  const randProduct = (page) => {
    if (page) {
      let data = allData.sort((a, b) => 0.5 - Math.random());
      data = data.slice(0, 9);
      setProducts(data);
      setPage(page);
    }
  };

  const category = location.search
    ? location.search.split("=")[1].replace(/%20/g, " ")
    : "all";

  const [productData, setProductData] = useState(products);
  const [productCategory, setProductCategory] = useState(category);
  const [productMinPrice, setProductMinPrice] = useState(null);
  const [productMaxPrice, setProductMaxPrice] = useState(null);
  const [productVendor, setProductVendor] = useState("all");

  useEffect(() => {
    if (productCategory === "all") {
      history.push(`/shop?category=${productCategory}`);
      
      if (productVendor !== "all") {
        setProductData(
          products.filter(
            (product) =>
              product["price"] >= productMinPrice &&
              product["price"] <= productMaxPrice &&
              product["brand"] === productVendor
          )
        );
      } else {
        setProductData(
          products.filter(
            (product) =>
              product["price"] >= productMinPrice &&
              product["price"] <= productMaxPrice
            // product["brand"] === productVendor
          )
        );
      }
    }

    if (productCategory !== "all") {

      history.push(`/shop?category=${productCategory}`);

      if (productVendor !== "all") {
        setProductData(
          products.filter(
            (product) =>
              product["category"] === productCategory &&
              product["price"] >= productMinPrice &&
              product["price"] <= productMaxPrice &&
              product["brand"] === productVendor
          )
        );
      } else {
        setProductData(
          products.filter(
            (product) =>
              product["category"] === productCategory &&
              product["price"] >= productMinPrice &&
              product["price"] <= productMaxPrice
          )
        );
      }
    }

    // console.log("Updated products", productData);
    // console.log("productCategory", productCategory);
  }, [productCategory, productMinPrice, productMaxPrice, productVendor]);

  return (
    <>
      <section id="shop_main_area" className="ptb-50">
        <div className="container">
          <Filter filterEvent={randProduct} />

          <div className="row">
            <SideBar
              filterEvent={randProduct}
              productCategory={productCategory}
              productData={productData}
              setProductCategory={setProductCategory}
              productMinPrice={productMinPrice}
              setProductMinPrice={setProductMinPrice}
              productMaxPrice={productMaxPrice}
              setProductMaxPrice={setProductMaxPrice}
              productVendor={productVendor}
              setProductVendor={setProductVendor}
            />
            <div className="col-lg-9">
              <div className="row">
                {productData.slice(0, 12).map((data, index) => (
                  <div
                    className="col-lg-4 col-md-4 col-sm-6 col-12"
                    key={index}
                  >
                    <ProductCard data={data} />
                  </div>
                ))}
                <div className="col-lg-12">
                  <ul className="pagination">
                    <li
                      className="page-item"
                      onClick={(e) => {
                        randProduct(page > 1 ? page - 1 : 0);
                      }}
                    >
                      <a className="page-link" href="#!" aria-label="Previous">
                        <span aria-hidden="true">«</span>
                      </a>
                    </li>
                    <li
                      className={"page-item " + (page === 1 ? "active" : null)}
                      onClick={(e) => {
                        randProduct(1);
                      }}
                    >
                      <a className="page-link" href="#!">
                        1
                      </a>
                    </li>
                    <li
                      className={"page-item " + (page === 2 ? "active" : null)}
                      onClick={(e) => {
                        randProduct(2);
                      }}
                    >
                      <a className="page-link" href="#!">
                        2
                      </a>
                    </li>
                    <li
                      className={"page-item " + (page === 3 ? "active" : null)}
                      onClick={(e) => {
                        randProduct(3);
                      }}
                    >
                      <a className="page-link" href="#!">
                        3
                      </a>
                    </li>
                    <li
                      className="page-item"
                      onClick={(e) => {
                        randProduct(page < 3 ? page + 1 : 0);
                      }}
                    >
                      <a className="page-link" href="#!" aria-label="Next">
                        <span aria-hidden="true">»</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LeftSideBar;
