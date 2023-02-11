import "./ImageProduct.scss";
import Image from "../../../assets/images/Image";
import { useEffect, useRef, useState } from "react";
import { moveSlide } from "../../../assets/moveSilde/moveSlideSmoothly";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import { useSelector } from "react-redux";

// const images = [
//   {
//     alt: "anh1",
//     src: "https://cdn.luatminhkhue.vn/lmk/article/Sach-luat/Giao-trinh-Lich-su-Dang-cong-san-Viet-Nam.jpg",
//   },
//   {
//     alt: "anh1",
//     src: "https://cdn.luatminhkhue.vn/lmk/article/Sach-luat/Giao-trinh-Lich-su-Dang-cong-san-Viet-Nam.jpg",
//   },
//   {
//     alt: "anh1",
//     src: "https://cdn.luatminhkhue.vn/lmk/article/Sach-luat/Giao-trinh-Lich-su-Dang-cong-san-Viet-Nam.jpg",
//   },
//   {
//     alt: "anh1",
//     src: "https://cdn.luatminhkhue.vn/lmk/article/Sach-luat/Giao-trinh-Lich-su-Dang-cong-san-Viet-Nam.jpg",
//   },
//   {
//     alt: "anh1",
//     src: "https://cdn.luatminhkhue.vn/lmk/article/Sach-luat/Giao-trinh-Lich-su-Dang-cong-san-Viet-Nam.jpg",
//   },
//   {
//     alt: "anh1",
//     src: "https://cdn.luatminhkhue.vn/lmk/article/Sach-luat/Giao-trinh-Lich-su-Dang-cong-san-Viet-Nam.jpg",
//   },
// ];

function ImageProduct() {
  const { product } = useSelector((state) => state.user);

  const [images, setImages] = useState([]);

  useEffect(() => {
    setImages(product.imgs);
  }, [product]);

  // const [mainImage, setMainImage] = useState(images[0].src);
  const [mainImage, setMainImage] = useState(product.imgs.at(0));

  const sliderRef = useRef();
  const imageRef = useRef();
  const handleScrollRight = () => {
    const maxScrollLeft =
      sliderRef.current.scrollWidth - sliderRef.current.clientWidth;
    if (sliderRef.current.scrollLeft < maxScrollLeft) {
      moveSlide(
        sliderRef.current,
        50,
        imageRef.current.clientWidth * 3,
        sliderRef.current.scrollLeft
      );
    }
  };

  const handleScrollLeft = () => {
    if (sliderRef.current.scrollLeft > 0) {
      moveSlide(
        sliderRef.current,
        50,
        -imageRef.current.clientWidth * 3,
        sliderRef.current.scrollLeft
      );
    }
  };

  const handleClick = (e) => {
    setMainImage(e);
    console.log(e);
  };

  return (
    <div className="wrapper-MainProduct-ImageProduct">
      <div className="Main-ImageProduct">
        <img alt="" src={mainImage} style={{ height: "100%", width: "100%" }}></img>
      </div>
      <div className="Mini-ImageProduct">
        <div className="Image-Slider" ref={sliderRef}>
          {images.map((image, index) => (
            <div
              style={{ width: "4.555rem", margin: "0 0.5rem" }}
              ref={imageRef}
            >
              <Image
                src={image}
                alt={index}
                className="mini-Product"
                key={index}
                onClick={() => handleClick(image)}
              />
            </div>
          ))}
        </div>
        {images.length > 5 ? (
          <div>
            <div className="btn-Left">
              <BsArrowLeftCircleFill onClick={handleScrollLeft} />
            </div>
            <div className="btn-Right">
              <BsArrowRightCircleFill onClick={handleScrollRight} />
            </div>
          </div>
        ) : (
          <div> </div>
        )}
      </div>
    </div>
  );
}

export default ImageProduct;
