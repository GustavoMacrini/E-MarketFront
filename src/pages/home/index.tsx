import { useEffect, useState } from "react";
import ProductCarouselViewModel from "../../components/product/Carousel/index";
import MobileStyle from "./MobileHome.module.css";
import PcStyle from "./PcHome.module.css";
import axios from "axios";
import {
  ProductDto,
  CarouselDto,
} from "../../components/product/Carousel/CarouselDto";

//configurar css pc ou mobile
var style: any = null;
const mediaQuery = window.matchMedia("(min-width: 768px)");
function handleTabletChange(e: any) {
  if (e.matches) {
    style = PcStyle;
  } else {
    style = MobileStyle;
  }
}
// Escutar mudanças
mediaQuery.addEventListener("change", handleTabletChange);
// Chamar a função imediatamente para configurar o estado inicial
handleTabletChange(mediaQuery);

async function getProducts() {
  try {
    const response = await axios.get("http://localhost:8080/api/v1/Product");
    return response.data;
  } catch (error: any) {
    console.log("ERRO getProducts:");
    console.log(error);

    if (error.response) {
      console.log(error.response.data);
    }
  }
}

function Home() {
  const [products, setProducts] = useState<Array<ProductDto>>([]);
  useEffect(() => {
    async function loadProducts() {
      const data = await getProducts();

      console.log(data);

      setProducts(data);
    }

    loadProducts();
  }, []);

  const title = "Basico";

  const carouselDto: CarouselDto = {
    title,
    products,
  };
  return (
    <div className={style.wrapper}>
      <h1>Home2</h1>
      <ProductCarouselViewModel {...carouselDto} />
    </div>
  );
}

export default Home;
