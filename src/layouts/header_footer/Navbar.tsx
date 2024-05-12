import React, { Fragment, useState } from "react";
import product from "../../models/Product";
import renderCart from "../../utils/Cart";
import RenderCart from "../../utils/Cart";
interface NavbarProps {
  product: product[];
}
const Navbar: React.FC<NavbarProps> = ({ product }) => {
  const [visibility,setVisibility] = useState(false);
  console.log(visibility);
  
  return (
    <div>
      <RenderCart product={product} v={visibility} /> {/* Pass visibility as v */}
      <Fragment>
        <nav className="navbar navbar-expand-lg navbar-light bg-white">
          <div className="container">
            <a className="navbar-brand" href="./overview.html">
              {" "}
              Shopper.{" "}
            </a>

            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarCollapse"
              aria-controls="navbarCollapse"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarCollapse">
              <ul className="navbar-nav mx-auto">
                <li className="nav-item dropdown">
                  <a className="nav-link" data-bs-toggle="dropdown" href="#">
                    Home
                  </a>

                  <div className="dropdown-menu">
                    <div className="card card-lg">
                      <div className="card-body">
                        <ul className="list-styled fs-sm">
                          <li className="list-styled-item">
                            <a className="list-styled-link" href="./index.html">
                              Default
                            </a>
                          </li>
                          <li className="list-styled-item">
                            <a
                              className="list-styled-link"
                              href="./index-classNameic.html"
                            >
                              classNameic
                            </a>
                          </li>
                          <li className="list-styled-item">
                            <a
                              className="list-styled-link"
                              href="./index-fashion.html"
                            >
                              Fashion
                            </a>
                          </li>
                          <li className="list-styled-item">
                            <a
                              className="list-styled-link"
                              href="./index-boxed.html"
                            >
                              Boxed
                            </a>
                          </li>
                          <li className="list-styled-item">
                            <a
                              className="list-styled-link"
                              href="./index-simple.html"
                            >
                              Simple
                            </a>
                          </li>
                          <li className="list-styled-item">
                            <a
                              className="list-styled-link"
                              href="./index-asymmetric.html"
                            >
                              Asymmetric
                            </a>
                          </li>
                          <li className="list-styled-item">
                            <a
                              className="list-styled-link"
                              href="./index-sidenav.html"
                            >
                              Sidenav
                            </a>
                          </li>
                          <li className="list-styled-item">
                            <a
                              className="list-styled-link"
                              href="./index-landing.html"
                            >
                              Landing
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="nav-item dropdown position-static">
                  <a className="nav-link" data-bs-toggle="dropdown" href="#">
                    Catalog
                  </a>

                  <div className="dropdown-menu w-100">
                    <div className="mb-2 mb-lg-0 border-bottom-lg">
                      <div className="container">
                        <div className="row">
                          <div className="col-12">
                            <nav className="nav nav-tabs nav-overflow fs-xs border-bottom border-bottom-lg-0">
                              <a
                                className="nav-link text-uppercase active"
                                data-bs-toggle="tab"
                                href="#navTab"
                              >
                                Women
                              </a>
                              <a
                                className="nav-link text-uppercase"
                                data-bs-toggle="tab"
                                href="#navTab"
                              >
                                Men
                              </a>
                              <a
                                className="nav-link text-uppercase"
                                data-bs-toggle="tab"
                                href="#navTab"
                              >
                                Kids
                              </a>
                            </nav>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="card card-lg">
                      <div className="card-body">
                        <div className="tab-content">
                          <div
                            className="tab-pane fade show active"
                            id="navTab"
                          >
                            <div className="container">
                              <div className="row">
                                <div className="col-6 col-md">
                                  <div className="mb-5 fw-bold">Clothing</div>

                                  <ul className="list-styled mb-6 mb-md-0 fs-sm">
                                    <li className="list-styled-item">
                                      <a
                                        className="list-styled-link"
                                        href="./shop.html"
                                      >
                                        All Clothing
                                      </a>
                                    </li>
                                    <li className="list-styled-item">
                                      <a
                                        className="list-styled-link"
                                        href="./shop.html"
                                      >
                                        Blouses &amp; Shirts
                                      </a>
                                    </li>
                                    <li className="list-styled-item">
                                      <a
                                        className="list-styled-link"
                                        href="./shop.html"
                                      >
                                        Coats &amp; Jackets
                                      </a>
                                    </li>
                                    <li className="list-styled-item">
                                      <a
                                        className="list-styled-link"
                                        href="./shop.html"
                                      >
                                        Dresses
                                      </a>
                                    </li>
                                    <li className="list-styled-item">
                                      <a
                                        className="list-styled-link"
                                        href="./shop.html"
                                      >
                                        Hoodies &amp; Sweats
                                      </a>
                                    </li>
                                    <li className="list-styled-item">
                                      <a
                                        className="list-styled-link"
                                        href="./shop.html"
                                      >
                                        Denim
                                      </a>
                                    </li>
                                    <li className="list-styled-item">
                                      <a
                                        className="list-styled-link"
                                        href="./shop.html"
                                      >
                                        Jeans
                                      </a>
                                    </li>
                                    <li className="list-styled-item">
                                      <a
                                        className="list-styled-link"
                                        href="./shop.html"
                                      >
                                        Jumpers &amp; Cardigans
                                      </a>
                                    </li>
                                    <li className="list-styled-item">
                                      <a
                                        className="list-styled-link"
                                        href="./shop.html"
                                      >
                                        Leggings
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                                <div className="col-6 col-md">
                                  <div className="mb-5 fw-bold">
                                    Shoes &amp; Boots
                                  </div>

                                  <ul className="list-styled mb-6 mb-md-0 fs-sm">
                                    <li className="list-styled-item">
                                      <a
                                        className="list-styled-link"
                                        href="./shop.html"
                                      >
                                        All Shoes &amp; Boots
                                      </a>
                                    </li>
                                    <li className="list-styled-item">
                                      <a
                                        className="list-styled-link"
                                        href="./shop.html"
                                      >
                                        Branded Shoes
                                      </a>
                                    </li>
                                    <li className="list-styled-item">
                                      <a
                                        className="list-styled-link"
                                        href="./shop.html"
                                      >
                                        Boots
                                      </a>
                                    </li>
                                    <li className="list-styled-item">
                                      <a
                                        className="list-styled-link"
                                        href="./shop.html"
                                      >
                                        Heels
                                      </a>
                                    </li>
                                    <li className="list-styled-item">
                                      <a
                                        className="list-styled-link"
                                        href="./shop.html"
                                      >
                                        Trainers
                                      </a>
                                    </li>
                                    <li className="list-styled-item">
                                      <a
                                        className="list-styled-link"
                                        href="./shop.html"
                                      >
                                        Sandals
                                      </a>
                                    </li>
                                    <li className="list-styled-item">
                                      <a
                                        className="list-styled-link"
                                        href="./shop.html"
                                      >
                                        Shoes
                                      </a>
                                    </li>
                                    <li className="list-styled-item">
                                      <a
                                        className="list-styled-link"
                                        href="./shop.html"
                                      >
                                        Wide Fit Shoes
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                                <div className="col-6 col-md">
                                  <div className="mb-5 fw-bold">
                                    Bags &amp; Accessories
                                  </div>

                                  <ul className="list-styled mb-0 fs-sm">
                                    <li className="list-styled-item">
                                      <a
                                        className="list-styled-link"
                                        href="./shop.html"
                                      >
                                        All Bags &amp; Accessories
                                      </a>
                                    </li>
                                    <li className="list-styled-item">
                                      <a
                                        className="list-styled-link"
                                        href="./shop.html"
                                      >
                                        Accessories
                                      </a>
                                    </li>
                                    <li className="list-styled-item">
                                      <a
                                        className="list-styled-link"
                                        href="./shop.html"
                                      >
                                        Bags &amp; Purses
                                      </a>
                                    </li>
                                    <li className="list-styled-item">
                                      <a
                                        className="list-styled-link"
                                        href="./shop.html"
                                      >
                                        Luggage
                                      </a>
                                    </li>
                                    <li className="list-styled-item">
                                      <a
                                        className="list-styled-link"
                                        href="./shop.html"
                                      >
                                        Belts
                                      </a>
                                    </li>
                                    <li className="list-styled-item">
                                      <a
                                        className="list-styled-link"
                                        href="./shop.html"
                                      >
                                        Hats
                                      </a>
                                    </li>
                                    <li className="list-styled-item">
                                      <a
                                        className="list-styled-link"
                                        href="./shop.html"
                                      >
                                        Hair Accessories
                                      </a>
                                    </li>
                                    <li className="list-styled-item">
                                      <a
                                        className="list-styled-link"
                                        href="./shop.html"
                                      >
                                        Jewellery
                                      </a>
                                    </li>
                                    <li className="list-styled-item">
                                      <a
                                        className="list-styled-link"
                                        href="./shop.html"
                                      >
                                        Travel Accessories
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                                <div className="col-6 col-md">
                                  <div className="mb-5 fw-bold">
                                    Collections
                                  </div>

                                  <ul className="list-styled mb-0 fs-sm">
                                    <li className="list-styled-item">
                                      <a
                                        className="list-styled-link"
                                        href="./shop.html"
                                      >
                                        All Collections
                                      </a>
                                    </li>
                                    <li className="list-styled-item">
                                      <a
                                        className="list-styled-link"
                                        href="./shop.html"
                                      >
                                        Occasionwear
                                      </a>
                                    </li>
                                    <li className="list-styled-item">
                                      <a
                                        className="list-styled-link"
                                        href="./shop.html"
                                      >
                                        Going Out
                                      </a>
                                    </li>
                                    <li className="list-styled-item">
                                      <a
                                        className="list-styled-link"
                                        href="./shop.html"
                                      >
                                        Workwear
                                      </a>
                                    </li>
                                    <li className="list-styled-item">
                                      <a
                                        className="list-styled-link"
                                        href="./shop.html"
                                      >
                                        Holiday Shop
                                      </a>
                                    </li>
                                    <li className="list-styled-item">
                                      <a
                                        className="list-styled-link"
                                        href="./shop.html"
                                      >
                                        Jean Fit Guide
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                                <div className="col-4 d-none d-lg-block">
                                  <div className="card">
                                    <img
                                      className="card-img"
                                      src="./assets/img/products/product-110.jpg"
                                      alt="..."
                                    />

                                    <div className="card-img-overlay bg-dark-0 bg-hover align-items-center">
                                      <div className="text-center">
                                        <a
                                          className="btn btn-white stretched-link"
                                          href="./shop.html"
                                        >
                                          Shop Sweaters
                                          <i className="fe fe-arrow-right ms-2"></i>
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link" data-bs-toggle="dropdown" href="#">
                    Shop
                  </a>

                  <div className="dropdown-menu" style={{ minWidth: "650px" }}>
                    <div className="card card-lg">
                      <div className="card-body">
                        <div className="row">
                          <div className="col">
                            <div className="mb-5 fw-bold">Shop</div>

                            <ul className="list-styled mb-7 fs-sm">
                              <li className="list-styled-item">
                                <a
                                  className="list-styled-link"
                                  href="./shop.html"
                                >
                                  Default
                                </a>
                              </li>
                              <li className="list-styled-item">
                                <a
                                  className="list-styled-link"
                                  href="./shop-topbar.html"
                                >
                                  Topbar
                                </a>
                              </li>
                              <li className="list-styled-item">
                                <a
                                  className="list-styled-link"
                                  href="./shop-collapse.html"
                                >
                                  Collapse
                                </a>
                              </li>
                              <li className="list-styled-item">
                                <a
                                  className="list-styled-link"
                                  href="./shop-simple.html"
                                >
                                  Simple
                                </a>
                              </li>
                              <li className="list-styled-item">
                                <a
                                  className="list-styled-link"
                                  href="./shop-masonry.html"
                                >
                                  Masonry
                                </a>
                              </li>
                            </ul>

                            <div className="mb-5 fw-bold">Product</div>

                            <ul className="list-styled fs-sm">
                              <li className="list-styled-item">
                                <a
                                  className="list-styled-link"
                                  href="./product.html"
                                >
                                  Default
                                </a>
                              </li>
                              <li className="list-styled-item">
                                <a
                                  className="list-styled-link"
                                  href="./product-images-left.html"
                                >
                                  Images Left
                                </a>
                              </li>
                              <li className="list-styled-item">
                                <a
                                  className="list-styled-link"
                                  href="./product-image-grid.html"
                                >
                                  Image Grid
                                </a>
                              </li>
                              <li className="list-styled-item">
                                <a
                                  className="list-styled-link"
                                  href="./product-image-slider.html"
                                >
                                  Image Slider
                                </a>
                              </li>
                              <li className="list-styled-item">
                                <a
                                  className="list-styled-link"
                                  href="./product-images-stacked.html"
                                >
                                  Images Stacked
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div className="col">
                            <div className="mb-5 fw-bold">Support</div>

                            <ul className="list-styled mb-7 fs-sm">
                              <li className="list-styled-item">
                                <a
                                  className="list-styled-link"
                                  href="./shopping-cart.html"
                                >
                                  Shopping Cart
                                </a>
                              </li>
                              <li className="list-styled-item">
                                <a
                                  className="list-styled-link"
                                  href="./checkout.html"
                                >
                                  Checkout
                                </a>
                              </li>
                              <li className="list-styled-item">
                                <a
                                  className="list-styled-link"
                                  href="./order-completed.html"
                                >
                                  Order Completed
                                </a>
                              </li>
                              <li className="list-styled-item">
                                <a
                                  className="list-styled-link"
                                  href="./shipping-and-returns.html"
                                >
                                  Shipping &amp; Returns
                                </a>
                              </li>
                            </ul>

                            <div className="mb-5 fw-bold">Account</div>

                            <ul className="list-styled fs-sm">
                              <li className="list-styled-item">
                                <a
                                  className="list-styled-link"
                                  href="./account-order.html"
                                >
                                  Order
                                </a>
                              </li>
                              <li className="list-styled-item">
                                <a
                                  className="list-styled-link"
                                  href="./account-orders.html"
                                >
                                  Orders
                                </a>
                              </li>
                              <li className="list-styled-item">
                                <a
                                  className="list-styled-link"
                                  href="./account-wishlist.html"
                                >
                                  Wishlist
                                </a>
                              </li>
                              <li className="list-styled-item">
                                <a
                                  className="list-styled-link"
                                  href="./account-personal-info.html"
                                >
                                  Personal Info
                                </a>
                              </li>
                              <li className="list-styled-item">
                                <a
                                  className="list-styled-link"
                                  href="./account-address.html"
                                >
                                  Addresses
                                </a>
                              </li>
                              <li className="list-styled-item">
                                <a
                                  className="list-styled-link"
                                  href="./account-address-edit.html"
                                >
                                  Addresses: New
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div className="col">
                            <ul className="list-styled mb-7 fs-sm">
                              <li className="list-styled-item">
                                <a
                                  className="list-styled-link"
                                  href="./account-payment.html"
                                >
                                  Payment
                                </a>
                              </li>
                              <li className="list-styled-item">
                                <a
                                  className="list-styled-link"
                                  href="./account-payment-edit.html"
                                >
                                  Payment: New
                                </a>
                              </li>
                              <li className="list-styled-item">
                                <a
                                  className="list-styled-link"
                                  href="./account-payment-choose.html"
                                >
                                  Payment: Choose
                                </a>
                              </li>
                              <li className="list-styled-item">
                                <a
                                  className="list-styled-link"
                                  href="./auth.html"
                                >
                                  Auth
                                </a>
                              </li>
                            </ul>

                            <div className="mb-5 fw-bold">Modals</div>

                            <ul className="list-styled fs-sm">
                              <li className="list-styled-item">
                                <a
                                  className="list-styled-link"
                                  data-bs-toggle="modal"
                                  href="#modalNewsletterHorizontal"
                                >
                                  Newsletter: Horizontal
                                </a>
                              </li>
                              <li className="list-styled-item">
                                <a
                                  className="list-styled-link"
                                  data-bs-toggle="modal"
                                  href="#modalNewsletterVertical"
                                >
                                  Newsletter: Vertical
                                </a>
                              </li>
                              <li className="list-styled-item">
                                <a
                                  className="list-styled-link"
                                  data-bs-toggle="modal"
                                  href="#modalProduct"
                                >
                                  Product
                                </a>
                              </li>
                              <li className="list-styled-item">
                                <a
                                  className="list-styled-link"
                                  data-bs-toggle="offcanvas"
                                  href="#modalSearch"
                                >
                                  Search
                                </a>
                              </li>
                              <li className="list-styled-item">
                                <a
                                  className="list-styled-link"
                                  data-bs-toggle="offcanvas"
                                  href="#modalShoppingCart"
                                >
                                  Shopping Cart
                                </a>
                              </li>
                              <li className="list-styled-item">
                                <a
                                  className="list-styled-link"
                                  data-bs-toggle="modal"
                                  href="#modalSizeChart"
                                >
                                  Size Chart
                                </a>
                              </li>
                              <li className="list-styled-item">
                                <a
                                  className="list-styled-link"
                                  data-bs-toggle="modal"
                                  href="#modalWaitList"
                                >
                                  Wait List
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link" data-bs-toggle="dropdown" href="#">
                    Pages
                  </a>

                  <div className="dropdown-menu">
                    <div className="card card-lg">
                      <div className="card-body">
                        <ul className="list-styled fs-sm">
                          <li className="list-styled-item">
                            <a className="list-styled-link" href="./about.html">
                              About
                            </a>
                          </li>
                          <li className="list-styled-item">
                            <a
                              className="list-styled-link"
                              href="./contact-us.html"
                            >
                              Contact Us
                            </a>
                          </li>
                          <li className="list-styled-item">
                            <a
                              className="list-styled-link"
                              href="./store-locator.html"
                            >
                              Store Locator
                            </a>
                          </li>
                          <li className="list-styled-item">
                            <a className="list-styled-link" href="./faq.html">
                              FAQ
                            </a>
                          </li>
                          <li className="list-styled-item">
                            <a
                              className="list-styled-link"
                              href="./coming-soon.html"
                            >
                              Coming Soon
                            </a>
                          </li>
                          <li className="list-styled-item">
                            <a className="list-styled-link" href="./404.html">
                              404
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link" data-bs-toggle="dropdown" href="#">
                    Blog
                  </a>

                  <div className="dropdown-menu">
                    <div className="card card-lg">
                      <div className="card-body">
                        <ul className="list-styled fs-sm">
                          <li className="list-styled-item">
                            <a className="list-styled-link" href="./blog.html">
                              Blog
                            </a>
                          </li>
                          <li className="list-styled-item">
                            <a
                              className="list-styled-link"
                              href="./blog-post.html"
                            >
                              Blog Post
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="docs/getting-started.html">
                    Docs
                  </a>
                </li>
              </ul>

              <ul className="navbar-nav flex-row">
                <li className="nav-item">
                  <a
                    className="nav-link"
                    data-bs-toggle="offcanvas"
                    href="#modalSearch"
                  >
                    <i className="fe fe-search"></i>
                  </a>
                </li>
                <li className="nav-item ms-lg-n4">
                  <a className="nav-link" href="./account-orders">
                    <i className="fe fe-user"></i>
                  </a>
                </li>
                <li className="nav-item ms-lg-n4">
                  <a className="nav-link" href="./account-wishlist.html">
                    <i className="fe fe-heart"></i>
                  </a>
                </li>
                <li className="nav-item ms-lg-n4">
                  <a
                    className="nav-link"
                    data-bs-toggle="offcanvas"
                    href="#modalShoppingCart"
                    onClick={()=>{
                      setVisibility(true);
                    }}
                  >
                    <span data-cart-items="2">
                      <i className="fe fe-shopping-cart"></i>
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </Fragment>
    </div>
  );
};

export default Navbar;
