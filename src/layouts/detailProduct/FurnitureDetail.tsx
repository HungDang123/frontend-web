import React from "react";
import { useParams } from "react-router-dom";
import product from "../../models/Product";
import Detail from "./component/Detail";
import Description from "./component/Description";
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
const FurnitureDetail: React.FC = () => {
  const { productId } = useParams();
  const selectedProduct:product | undefined = products.find( (product) => product.id === productId)
  return (
    <div>
      <nav className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <ol className="breadcrumb mb-0 fs-xs text-gray-400">
                <li className="breadcrumb-item">
                  <a className="text-gray-400" href="index.html">
                    Home
                  </a>
                </li>
                <li className="breadcrumb-item">
                  <a className="text-gray-400" href="shop.html">
                    {selectedProduct?.category}
                  </a>
                </li>
                <li className="breadcrumb-item active">{selectedProduct?.name}</li>
              </ol>
            </div>
          </div>
        </div>
      </nav>
      {selectedProduct && <Detail product={selectedProduct}/>}
      {selectedProduct && <Description/>}
    </div>
  );
};

export default FurnitureDetail;
