import PcStyle from "./PcCarousel.module.css";
import MobileStyle from "./MobileCarousel.module.css";
import ProductOverviewModal from "../OverviewModal/index";
import ProductCard from "../Card/index";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function ProductCarouselView({
  style,
  responsive,
  title,
  products,
  open,
  productTitle,
  price,
  image,
  description,
  openOverViewModal,
  closeOverViewModal,
}) {
  return (
    <div>
      <div className={style.titleWrapper}>
        <h1 className={style.title}>{title}</h1>
        <button className={style.btn}>ver mais</button>
      </div>
      <Carousel
        responsive={responsive}
        removeArrowOnDeviceType={["tablet", "mobile"]}
        infinite={true}
        draggable={false}
      >
        {products.map((product) => (
          <ProductCard
            key={product.id}
            openModal={openOverViewModal}
            productTitle={product.name}
            price={product.price}
            description={product.description}
          />
        ))}
      </Carousel>
      <ProductOverviewModal
        isOpen={open}
        closeModal={closeOverViewModal}
        title={productTitle}
        price={price}
        image={image}
        description={description}
      />
    </div>
  );
}

export default ProductCarouselView;
