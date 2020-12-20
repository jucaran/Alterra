import { useState } from 'react';
import Link from 'next/link';
import Product from '../Product';
import ProductsContainer from './style';

export default function Productos() {
  const [productPosition, setProductPosition] = useState(0);
  const carrouselWidth = 3;

  const handleArrowClick = (arrow) => {
    if (arrow === 'left') {
      carrouselWidth !== 0 ? setProductPosition(productPosition - 1) : null;
    }
    if (arrow === 'right') {
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
          onClick={() => handleArrowClick('left')}
          className="productos_flecha_izq"
          src="media/arrow_izq.png"
          alt=""
        />
        <div className="products_box">
          <div className="show_products">
            <Product
              title="Velas aromáticas"
              description="Scessitatibus Quod vel reprehenderit architecto accusantium
              deleniti Neque quibusdam fugit repellendus maxime commodi. Aliquam
              quaerat"
              img="./media/productos/velas.jpg"
            />
            <Product
              title="Otras velas"
              description="Scessitatibus Quod vel reprehenderit architecto accusantium
              deleniti Neque quibusdam fugit repellendus maxime commodi. Aliquam
              quaerat"
              img="./media/productos/velas2.jpg"
            />
            <Product
              title="Producto 3"
              description="Scessitatibus Quod vel reprehenderit architecto accusantium
              deleniti Neque quibusdam fugit repellendus maxime commodi. Aliquam
              quaerat"
              img="./media/productos/velas.jpg"
            />
            <Product
              title="Producto 4"
              description="Scessitatibus Quod vel reprehenderit architecto accusantium
              deleniti Neque quibusdam fugit repellendus maxime commodi. Aliquam
              quaerat"
              img="./media/productos/velas2.jpg"
            />
            <div className="mas">
              <h3>Ver más</h3>
              <Link href="/products">+</Link>
            </div>
          </div>
        </div>
        <img
          onClick={() => handleArrowClick('right')}
          className="productos_flecha_der"
          src="media/arrow_der.png"
          alt=""
        />
      </div>
    </ProductsContainer>
  );
}
