import { useState } from "react";
import PcStyle from "./PcCarousel.module.css";
import MobileStyle from "./MobileCarousel.module.css";
import "react-multi-carousel/lib/styles.css";
import { CarouselDto, CarouselModalDto } from "./CarouselDto";

//configurar css pc ou mobile
let style: any = null;
const mediaQuery = window.matchMedia("(min-width: 768px)");
function handleTabletChange(e: any) {
  if (e.matches) {
    style = PcStyle;
  } else {
    style = MobileStyle;
  }
}
// Escutar mudan�as
mediaQuery.addEventListener("change", handleTabletChange);
// Chamar a fun��o imediatamente para configurar o estado inicial
handleTabletChange(mediaQuery);

function useProductCarouselModel(dto: CarouselDto) {
  const [carouselModalDto, setCarouselModalDto] = useState<CarouselModalDto>({
    open: false,
    productTitle: "",
    price: 0,
    image: "",
    description: "",
  });

  function openOverViewModal({
    open = true,
    productTitle,
    price,
    image,
    description,
  }: CarouselModalDto) {
    setCarouselModalDto({
      open,
      productTitle,
      price,
      image,
      description,
    });
  }

  function closeOverViewModal() {
    setCarouselModalDto((prev) => ({
      ...prev,
      open: false,
    }));
  }

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 7,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1550 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1550, min: 1000 },
      items: 3,
    },
    largeMobile: {
      breakpoint: { max: 1000, min: 700 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 700, min: 0 },
      items: 2,
    },
  };

  return {
    ...dto,
    ...carouselModalDto,
    style,
    responsive,
    openOverViewModal,
    closeOverViewModal,
  };
}

export default useProductCarouselModel;
