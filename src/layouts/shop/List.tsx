import React from "react";
import Sidebar from "./components/Sidebar";
import Products from "./components/Products";
import product from "../../models/Product";

const products: product[] = [
  new product(
    "1",
    "Áo thun nam",
    ["Áo thời trang", "Áo du lịch"],
    200000,
    30000,
    ["assets/img/products/product-120.jpg", "assets/img/products/product-5.jpg"],
    1
  ),
  new product(
    "2",
    "Quần jean nữ",
    ["Quần áo nữ", "Quần áo thời trang"],
    350000,
    40000,
    ["assets/img/products/product-121.jpg", "assets/img/products/product-6.jpg"],
    2
  ),
  new product(
    "3",
    "Đồng hồ đeo tay",
    ["Phụ kiện", "Đồng hồ"],
    500000,
    60000,
    ["assets/img/products/product-122.jpg", "assets/img/products/product-7.jpg"],
    3
  ),
  new product(
    "4",
    "Đồng hồ đeo tay",
    ["Phụ kiện", "Đồng hồ"],
    500000,
    70000,
    ["assets/img/products/product-123.jpg", "assets/img/products/product-8.jpg"],
    4
  ),
  new product(
    "5",
    "Đồng hồ đeo tay",
    ["Phụ kiện", "Đồng hồ"],
    500000,
    80000,
    ["assets/img/products/product-124.jpg", "assets/img/products/product-9.jpg"],
    5
  ),
  // Thêm các sản phẩm khác ở đây nếu cần
];
const Shop: React.FC = () => {
  return (
    <section className="py-11">
      <div className="container">
        <div className="row">
          <Sidebar />
          <div className="col-12 col-md-8 col-lg-9">
            <div className="row align-items-center mb-7">
              <div className="col-12 col-md">
                <h3 className="mb-1">Womens' Clothing</h3>

                <ol className="breadcrumb mb-md-0 fs-xs text-gray-400">
                  <li className="breadcrumb-item">
                    <a className="text-gray-400" href="index.html">
                      Home
                    </a>
                  </li>
                  <li className="breadcrumb-item active">Women's Clothing</li>
                </ol>
              </div>
              <div className="col-12 col-md-auto">
                <select className="form-select form-select-xs">
                  <option selected>Most popular</option>
                </select>
              </div>
            </div>
            <div className="row mb-7">
              <div className="col-12">
                <span className="btn btn-xs btn-light fw-normal text-muted me-3 mb-3">
                  Shift dresses
                  <a className="text-reset ms-2" href="#!" role="button">
                    <i className="fe fe-x"></i>
                  </a>
                </span>
                <span className="btn btn-xs btn-light fw-normal text-muted me-3 mb-3">
                  Summer
                  <a className="text-reset ms-2" href="#!" role="button">
                    <i className="fe fe-x"></i>
                  </a>
                </span>
                <span className="btn btn-xs btn-light fw-normal text-muted me-3 mb-3">
                  M
                  <a className="text-reset ms-2" href="#!" role="button">
                    <i className="fe fe-x"></i>
                  </a>
                </span>
                <span className="btn btn-xs btn-light fw-normal text-muted me-3 mb-3">
                  White
                  <a className="text-reset ms-2" href="#!" role="button">
                    <i className="fe fe-x"></i>
                  </a>
                </span>
                <span className="btn btn-xs btn-light fw-normal text-muted me-3 mb-3">
                  Red
                  <a className="text-reset ms-2" href="#!" role="button">
                    <i className="fe fe-x"></i>
                  </a>
                </span>
                <span className="btn btn-xs btn-light fw-normal text-muted me-3 mb-3">
                  Adidas
                  <a className="text-reset ms-2" href="#!" role="button">
                    <i className="fe fe-x"></i>
                  </a>
                </span>
                <span className="btn btn-xs btn-light fw-normal text-muted me-3 mb-3">
                  $10.00 - $49.00
                  <a className="text-reset ms-2" href="#!" role="button">
                    <i className="fe fe-x"></i>
                  </a>
                </span>
                <span className="btn btn-xs btn-light fw-normal text-muted me-3 mb-3">
                  $50.00 - $99.00
                  <a className="text-reset ms-2" href="#!" role="button">
                    <i className="fe fe-x"></i>
                  </a>
                </span>
              </div>
            </div>
            <div className="row">
              {products.map((product) => (
                <Products key={product.id} product={product}></Products>
              ))}
            </div>
          </div>
          <nav className="d-flex justify-content-center justify-content-md-end">
            <ul className="pagination pagination-sm text-gray-400">
              <li className="page-item">
                <a className="page-link page-link-arrow" href="#">
                  <i className="fa fa-caret-left"></i>
                </a>
              </li>
              <li className="page-item active">
                <a className="page-link" href="#">
                  1
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  2
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  3
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  4
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  5
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  6
                </a>
              </li>
              <li className="page-item">
                <a className="page-link page-link-arrow" href="#">
                  <i className="fa fa-caret-right"></i>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </section>
  );
};

export default Shop;
