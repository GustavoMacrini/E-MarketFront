import { useEffect, useRef, useState } from "react";
import PcStyle from "./PcOverview.module.css";
import MobileStyle from "./MobileOverview.module.css";
import { FaHeart } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";

//configurar css pc ou mobile
let style = null;
let usingPc = null;
const mediaQuery = window.matchMedia("(min-width: 768px)");
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
mediaQuery.addEventListener("change", handleTabletChange);
// Chamar a função imediatamente para configurar o estado inicial
handleTabletChange(mediaQuery);

function Description({ description }) {
  const [open, setOpen] = useState(usingPc);

  return (
    <div className={style.descriptionWrapper}>
      <div className={style.arrowWrapper}>
        <h1
          className={style.descriptionTitle}
          onClick={() => {
            setOpen(!open);
          }}
        >
          Informações adicionais
        </h1>
        {open ? (
          <IoIosArrowUp
            size="1.3em"
            className={style.arrow}
            onClick={() => {
              setOpen(!open);
            }}
          />
        ) : (
          <IoIosArrowDown
            size="1.3em"
            className={style.arrow}
            onClick={() => {
              setOpen(!open);
            }}
          />
        )}
      </div>

      <div className={open ? style.description : null}>
        {open ? description : null}
      </div>
    </div>
  );
}

function ProductOverviewModal({
  isOpen,
  closeModal,
  title,
  price,
  image,
  description,
}) {
  // Hook para detectar cliques fora do modal
  const useOutsideClick = (ref, callback) => {
    useEffect(() => {
      const handleClick = (e) => {
        if (ref.current && !ref.current.contains(e.target)) {
          callback();
        }
      };
      document.addEventListener("mousedown", handleClick);
      return () => document.removeEventListener("mousedown", handleClick);
    }, [ref, callback]);
  };

  const modalRef = useRef(null);
  useOutsideClick(modalRef, closeModal);

  if (isOpen != true) {
    return null;
  }

  return (
    <div className={style.background}>
      <div className={style.modal}>
        <div ref={modalRef} className={style.wrapper}>
          <div className={style.product}>
            <div className={style.closeButtonWrapper}>
              <div className={style.closeButton}>
                <IoMdClose
                  size="2em"
                  className={style.closeButtonIcon}
                  onClick={() => closeModal()}
                />
              </div>

              <div className={style.productWrapper}>
                <div className={style.imageWrapper}>
                  <img className={style.image} src={image}></img>
                </div>

                <div className={style.detailDescriptionWrapper}>
                  <div className={style.detailWrapper}>
                    <div className={style.detail}>
                      <div className={style.titleWrapper}>
                        <h1 className={style.title}>{title}</h1>
                        <FaHeart
                          color="lightgrey"
                          size="2em"
                          className={style.heartIcon}
                        />
                      </div>

                      <h2 className={style.value}>{"R$ " + price}</h2>
                      <button className={style.btn}>Comprar</button>
                    </div>
                  </div>
                  <Description description={description} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductOverviewModal;
