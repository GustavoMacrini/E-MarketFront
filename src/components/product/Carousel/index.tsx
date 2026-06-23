import "react-multi-carousel/lib/styles.css";
import useProductCarouselModel from "./model";
import ProductCarouselView from "./view";
import { CarouselDto } from "./CarouselDto";

function ProductCarouselViewModel(dto: CarouselDto) {
  const {
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
  } = useProductCarouselModel(dto);

  return (
    <ProductCarouselView
      style={style}
      responsive={responsive}
      title={title}
      products={products}
      open={open}
      productTitle={productTitle}
      price={price}
      image={image}
      description={description}
      openOverViewModal={openOverViewModal}
      closeOverViewModal={closeOverViewModal}
    />
  );
}

export default ProductCarouselViewModel;
