import useHomeModel from "./model";
import HomeView from "./view";

function HomeViewModel() {
  const { title, products, style } = useHomeModel();

  return <HomeView title={title} products={products} style={style} />;
}

export default HomeViewModel;
