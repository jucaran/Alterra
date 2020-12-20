import { useState } from "react";
import Link from "next/link";
import Product from "../Product";
import ProductsContainer from "./style";

export default function Productos() {
  const [productPosition, setProductPosition] = useState(0);
  const carrouselWidth = 3;

  const handleArrowClick = (arrow) => {
    if (arrow === "left") {
      carrouselWidth !== 0 ? setProductPosition(productPosition - 1) : null;
    }
    if (arrow === "right") {
      productPosition < carrouselWidth - 1
        ? setProductPosition(productPosition + 1)
        : null;
    }
  };

  return (
    <ProductsContainer position={productPosition}>
      <div className="productos_tit">
        <h2>¿Qué hacemos?</h2>
      </div>
      <div className="carrousel_box">
        <img
          onClick={() => handleArrowClick("left")}
          className="productos_flecha_izq"
          src="media/arrow_izq.png"
          alt=""
        />
        <div className="products_box">
          <div className="show_products">
            <Product
              title="Velas aromáticas"
              description="Velas aromáticas para purificar y limpiar ambientes, ideales para espacios grandes. Con aceites esenciales de romero, cúrcuma, cítricos o canela"
              img="./media/productos/velas.jpg"
            />
            <Product
              title="Velas de soja"
              description="Velas de soja de larga duración, ideales para una iluminación cálida y constante. Con aceites escenciales de romero, cúrcuma, cítricos o canela"
              img="./media/productos/velas2.jpg"
            />
            <Product
              title="Aceites corporales"
              description="Aceites corporales ideales para mantener la piel hidratada y tersa. Con aromas suaves y componentes nutritivos."
              img="./media/productos/aceites.jpg"
            />
            <Product
              title="Crema para manos"
              description="Crema para manos con escencias naturales. Ideal para uso diario."
              img="./media/productos/coco.jpg"
            />
            <div className="mas">
              <h3>Ver más</h3>
              <Link href="/products">+</Link>
            </div>
          </div>
        </div>
        <img
          onClick={() => handleArrowClick("right")}
          className="productos_flecha_der"
          src="media/arrow_der.png"
          alt=""
        />
      </div>
    </ProductsContainer>
  );
}
