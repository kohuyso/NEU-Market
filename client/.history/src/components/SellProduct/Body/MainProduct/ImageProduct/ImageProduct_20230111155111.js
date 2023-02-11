import "./ImageProduct.scss";
import Image from "../../../assets/images/Image";
import { useRef, useState } from "react";
import { moveSlide } from "../../../assets/moveSilde/moveSlideSmoothly";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

const images = [
  {
    alt: "anh1",
    src: "https://cdn.luatminhkhue.vn/lmk/article/Sach-luat/Giao-trinh-Lich-su-Dang-cong-san-Viet-Nam.jpg",
  },
  {
    alt: "anh1",
    src: "https://cdn.luatminhkhue.vn/lmk/article/Sach-luat/Giao-trinh-Lich-su-Dang-cong-san-Viet-Nam.jpg",
  },
  {
    alt: "anh1",
    src: "https://cdn.luatminhkhue.vn/lmk/article/Sach-luat/Giao-trinh-Lich-su-Dang-cong-san-Viet-Nam.jpg",
  },
  {
    alt: "anh1",
    src: "https://cdn.luatminhkhue.vn/lmk/article/Sach-luat/Giao-trinh-Lich-su-Dang-cong-san-Viet-Nam.jpg",
  },
  {
    alt: "anh1",
    src: "https://cdn.luatminhkhue.vn/lmk/article/Sach-luat/Giao-trinh-Lich-su-Dang-cong-san-Viet-Nam.jpg",
  },
  {
    alt: "anh1",
    src: "https://cdn.luatminhkhue.vn/lmk/article/Sach-luat/Giao-trinh-Lich-su-Dang-cong-san-Viet-Nam.jpg",
  },
];

function ImageProduct() {
  const [mainImage, setMainImage] = useState(images[0].src);

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
        <img src={mainImage} style={{ height: "100%", width: "100%" }}></img>
      </div>
      <div className="Mini-ImageProduct">
        <div className="Image-Slider" ref={sliderRef}>
          {images.map((image) => (
            <div
              style={{ width: "4.555rem", margin: "0 0.5rem" }}
              ref={imageRef}
            >
              <Image
                src={image.src}
                alt={image.alt}
                className="mini-Product"
                key={image.alt}
                onClick={() => handleClick(image.src)}
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
