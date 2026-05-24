import { useState } from 'react';
import PcStyle from './PcCarousel.module.css';
import MobileStyle from './MobileCarousel.module.css';
import ProductOverviewModal from '../OverviewModal/index';
import ProductCard from '../Card/index';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

//configurar css pc ou mobile
let style = null;
const mediaQuery = window.matchMedia('(min-width: 768px)');
function handleTabletChange(e) {
    if (e.matches) {
        style = PcStyle;
    } else {
        style = MobileStyle;
    }
}
// Escutar mudanças
mediaQuery.addEventListener('change', handleTabletChange);
// Chamar a função imediatamente para configurar o estado inicial
handleTabletChange(mediaQuery);

function ProductCarousel({ data }) {     
    const { title, products } = data;
    const [open, setOpen] = useState(false);
    const [productTitle, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [image, setImage] = useState("");
    const [description, setDescription] = useState("");
    function openOverViewModal({ productTitle, price, image, description }) {     
        setOpen(true);
        setTitle(productTitle);
        setPrice(price);
        setImage(image);
        setDescription(description);
    }
    
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 7
        },
        desktop: {
            breakpoint: { max: 3000, min: 1550 },
            items: 5
        },
        tablet: {
            breakpoint: { max: 1550, min: 1000 },
            items: 3
        },
        largeMobile: {
            breakpoint: { max: 1000, min: 700 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 700, min: 0 },
            items: 2
        }
    };    

    return(<div>
        <div className={style.titleWrapper}>
            <h1 className={style.title}>{title}</h1>
            <button className={style.btn}>ver mais</button>
        </div>
        <Carousel responsive={responsive}
            removeArrowOnDeviceType={["tablet", "mobile"]}
            infinite={true}                        
            draggable={false}>        

            {
                products.map((product) => (
                    <ProductCard
                        key={product.id}
                        openModal={openOverViewModal}
                        productTitle={product.name}
                        price={product.price}                        
                        description={product.description}/>                        
                ))
            }

        </Carousel>
        <ProductOverviewModal
            isOpen={open}
            closeModal={() => setOpen(!open)}
            title={productTitle}
            price={price}
            image={image}
            description={description} />
        </div>
    );
}

export default ProductCarousel;