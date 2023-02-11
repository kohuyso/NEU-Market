import Item from "../../../Item/Item";
import "./ShopBody-SellingProduct.css";

const items = [
  {
    id: 1,
    img: "https://cf.shopee.vn/file/3a5b91effe1985243c3ebb0064046496",
    title: "Giáo trình Kinh tế học",
    author: "Nhà xuất bản Đại học Kinh tế Quốc dân",
    rate: 4.5,
    price: 100000,
  },
  {
    id: 2,
    img: "https://cf.shopee.vn/file/3a5b91effe1985243c3ebb0064046496",
    title: "Giáo trình Kinh tế học",
    author: "Nhà xuất bản Đại học Kinh tế Quốc dân",
    rate: 4.5,
    price: 200000,
  },
  {
    id: 3,
    img: "https://cf.shopee.vn/file/3a5b91effe1985243c3ebb0064046496",
    title: "Giáo trình Kinh tế học",
    author: "Nhà xuất bản Đại học Kinh tế Quốc dân",
    rate: 4.5,
    price: 300000,
  },
  {
    id: 4,
    img: "https://cf.shopee.vn/file/3a5b91effe1985243c3ebb0064046496",
    title: "Giáo trình Kinh tế học",
    author: "Nhà xuất bản Đại học Kinh tế Quốc dân",
    rate: 4.5,
    price: 400000,
  },
  {
    id: 5,
    img: "https://cf.shopee.vn/file/3a5b91effe1985243c3ebb0064046496",
    title: "Giáo trình Kinh tế học",
    author: "Nhà xuất bản Đại học Kinh tế Quốc dân",
    rate: 4.5,
    price: 500000,
  },
  {
    id: 6,
    img: "https://cf.shopee.vn/file/3a5b91effe1985243c3ebb0064046496",
    title: "Giáo trình Kinh tế học",
    author: "Nhà xuất bản Đại học Kinh tế Quốc dân",
    rate: 4.5,
    price: 600000,
  },
];

function ShopBody_SellingProduct() {
  return (
    <div className="wrapper-SellingProduct">
      Sản phẩm đang bán
      <div className="SellingProduct-amount">16 sản phẩm</div>
      <div className="SellingProduct-listProduct">
        <div className="shop_hotdeals_book">
          {items.map(({ id, img, title, author, rate, price }) => (
            <Item
              key={id}
              img={img}
              title={title}
              author={author}
              rate={rate}
              price={price}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ShopBody_SellingProduct;
