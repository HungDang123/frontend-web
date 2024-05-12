import React from "react";
import product from "../../models/Product";
import Furniture from "./component/Furniture";
const products: product[] = [
  new product(
    "1",
    "Áo thun nam",
    ["Áo thời trang", "Áo du lịch"],
    200000,
    30000,
    ["assets/img/products/product-120.jpg", "assets/img/products/product-5.jpg"],1
  ),
  new product(
    "2",
    "Quần jean nữ",
    ["Quần áo nữ", "Quần áo thời trang"],
    350000,
    40000,
    ["assets/img/products/product-121.jpg", "assets/img/products/product-6.jpg"],2
  ),
  new product("3", "Đồng hồ đeo tay", ["Phụ kiện", "Đồng hồ"], 500000, 60000, [
    "assets/img/products/product-122.jpg",
    "assets/img/products/product-7.jpg",
  ],3),
  new product("4", "Đồng hồ đeo tay", ["Phụ kiện", "Đồng hồ"], 500000, 70000, [
    "assets/img/products/product-123.jpg",
    "assets/img/products/product-8.jpg",
  ],4),
  new product("5", "Đồng hồ đeo tay", ["Phụ kiện", "Đồng hồ"], 500000, 80000, [
    "assets/img/products/product-124.jpg",
    "assets/img/products/product-9.jpg",
  ],5),
  // Thêm các sản phẩm khác ở đây nếu cần
];
const List: React.FC = () => {
  return (
    <div>
      <section className="py-12">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-md-10 col-lg-8 col-xl-6">
              <h2 className="mb-4 text-center">Top month Sellers</h2>

              <div className="nav justify-content-center mb-10">
                <a
                  className="nav-link active"
                  href="#topSellersTab"
                  data-bs-toggle="tab"
                >
                  Women
                </a>
                <a
                  className="nav-link"
                  href="#topSellersTab"
                  data-bs-toggle="tab"
                >
                  Men
                </a>
                <a
                  className="nav-link"
                  href="#topSellersTab"
                  data-bs-toggle="tab"
                >
                  Kids
                </a>
              </div>
            </div>
          </div>
          <div className="tab-content">
            <div className="tab-pane fade show active" id="topSellersTab">
              <div className="row"></div>
            </div>
          </div>
          <div className="row">
            {products.map((product) => (
              <Furniture key={product.id} product={product}></Furniture>
            ))}

            <div className="col-12">
              <div className="mt-7 text-center">
                <a className="link-underline" href="#!">
                  Discover more
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default List;
