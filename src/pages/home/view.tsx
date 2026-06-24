import ProductCarouselViewModel from "../../components/product/Carousel/index";
import { CarouselDto } from "../../components/product/Carousel/CarouselDto";

function HomeView({ title, products, style }: any) {
  let dto: CarouselDto = { title, products };

  return (
    <div className={style.wrapper}>
      <h1>Home2</h1>

      <ProductCarouselViewModel {...dto} />
    </div>
  );
}

export default HomeView;
