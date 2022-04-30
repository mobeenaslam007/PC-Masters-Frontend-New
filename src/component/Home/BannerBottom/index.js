import React from "react";
import { Link } from "react-router-dom";

const BannerBottom = () => {
  return (
    <>
      <section id="product_variation_one" className="pt-100">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="product_variation_one_boxed img-zoom-hover">
                <img src={"images/products/processor.jpg"} alt="img" />
                <div className="product_var_one_text">
                  <h2 className="color_one">Processor</h2>
                  {/* <h2>New</h2>
                            <h4>Collection</h4> */}
                  <Link
                    to="/shop?category=Processor"
                    className="theme-btn-one bg-black btn_sm"
                  >
                    Shop Now
                  </Link>
                </div>
              </div>
              <div className="product_variation_one_boxed img-zoom-hover">
                <img src={"images/products/ram.jpg"} alt="img" />
                <div className="product_var_one_text">
                  <h2 className="color_one">RAM</h2>
                  {/* <h2>Hot</h2>
                            <h4>Collection</h4> */}
                  <Link to="/shop?category=RAM" className="theme-btn-one bg-black btn_sm">
                    Shop Now
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="product_variation_one_boxed img-zoom-hover">
                <img src={"images/products/motherboard.jpg"} alt="img" />
                <div className="product_var_one_text">
                  <h2 className="color_one">Motherboard</h2>
                  {/* <h2>New</h2>
                            <h4>Collection</h4> */}
                  <Link to="/shop?category=Motherboard" className="theme-btn-one bg-black btn_sm">
                    Shop Now
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="product_variation_one_boxed img-zoom-hover">
                <img src={"images/products/storage.jpg"} alt="img" />
                <div className="product_var_one_text">
                  {/* <h2>New</h2> */}
                  <h2 className="color_one">Storage</h2>
                  <Link to="/shop?category=Storage" className="theme-btn-one bg-black btn_sm">
                    Shop Now
                  </Link>
                </div>
              </div>
              <div className="product_variation_one_boxed img-zoom-hover">
                <img src={"images/products/graphics_card.jpg"} alt="img" />
                <div className="product_var_one_text_center">
                  <h2 className="color_one">Graphics Card</h2>
                  {/* <h2>Hot</h2>
                            <h4>Collection</h4> */}
                  <Link to="/shop?category=Graphics Card" className="theme-btn-one bg-black btn_sm">
                    Shop Now
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="product_variation_one_boxed img-zoom-hover">
                <img src={"images/products/casing.jpg"} alt="img" />
                <div className="product_var_one_text">
                  {/* <h2>Hot</h2> */}
                  <h2 className="color_one">Casing</h2>
                  <Link to="/shop?category=Casing" className="theme-btn-one bg-black btn_sm">
                    Shop Now
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="product_variation_one_boxed img-zoom-hover">
                <img src={"images/products/cooling.jpg"} alt="img" />
                <div className="product_var_one_text">
                  {/* <h2>Hot</h2> */}
                  <h2 className="color_one">cooling</h2>
                  <Link to="/shop?category=Cooling" className="theme-btn-one bg-black btn_sm">
                    Shop Now
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="product_variation_one_boxed img-zoom-hover">
                <img src={"images/products/psu.jpg"} alt="img" />
                <div className="product_var_one_text">
                  {/* <h2>Hot</h2> */}
                  <h2 className="color_one">Power Supply</h2>
                  <Link to="/shop?category=Power Supply" className="theme-btn-one bg-black btn_sm">
                    Shop Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BannerBottom;
