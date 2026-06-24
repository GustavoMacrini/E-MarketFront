import { useEffect, useState } from "react";
import MobileStyle from "./MobileHome.module.css";
import PcStyle from "./PcHome.module.css";
import axios from "axios";
import { ProductDto } from "../../components/product/Carousel/CarouselDto";

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

function useHomeModel() {
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

  return {
    title,
    products,
    style,
  };
}

export default useHomeModel;
