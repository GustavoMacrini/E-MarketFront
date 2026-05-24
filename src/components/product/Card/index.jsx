import PcStyle from "./PcCard.module.css";
import MobileStyle from "./MobileCard.module.css";
import { FaHeart } from "react-icons/fa";
import { FaCirclePlus } from "react-icons/fa6";

//configurar css pc ou mobile
let style = null;
let usingPc = null;
const mediaQuery = window.matchMedia('(min-width: 768px)');
function handleTabletChange(e) {
    if (e.matches) {
        style = PcStyle;
        usingPc = true;
    } else {
        style = MobileStyle;
        usingPc = false;
    }
}
// Escutar mudanças
mediaQuery.addEventListener('change', handleTabletChange);
// Chamar a função imediatamente para configurar o estado inicial
handleTabletChange(mediaQuery);

function ProductCard({ openModal, productTitle, price, description }) {
    let image = "https://d1pfez3jlrpp4u.cloudfront.net/imagem-ecommerce-barbosa/tiny-7bf39bb189f6abccfec278fd5053ac88-7896401100301.jpg";
    
    return (
        <div className={style.wrapper}>            
            <div className={style.heartIcon}>
                <FaHeart color="lightgrey" size={usingPc ? "2em" : "1.5em"} />
            </div>
            <img className={style.image} draggable="false" src={image} onClick={() => openModal({ productTitle, price, image, description })}></img>                           
            <div className={style.plusIconWrapper}>
                <FaCirclePlus className={style.plusIcon} color="#0831A3" size={usingPc ? "2.5em" : "1.5em"} />
            </div>
            <div className={style.titleWrapepr}>
                <h1 className={style.title} onClick={() => openModal({ productTitle, price, image, description })}>{productTitle}</h1>
            </div>
            <h2 className={style.value}>{"R$ " + price}</h2>
        </div>
    );
}

export default ProductCard;