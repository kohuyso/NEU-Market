import Image from "../../Product/assets/images/Image";

const image = [
  {
    src: "https://americanpomade.vn/wp-content/uploads/2017/02/Sale-Banner-1920-x-600-FINAL.jpg",
    alt: "",
  },
];

function Banner() {
  return (
    <div style={{ marginTop: "3rem", marginBottom: "5rem" }}>
      <Image
        src={image[0].src}
        alt={image.alt}
        className="banner-image"
        onClick={() => {}}
      />
    </div>
  );
}

export default Banner;
