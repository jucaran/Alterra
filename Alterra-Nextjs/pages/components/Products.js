import styled from 'styled-components';
import Product from './Product';
import colors from './colors';
const { primary, primaryLight, lightGray } = colors;

const ProductsContainer = styled.section`
  background-color: ${primary};
  padding: 30px 0;
  display: flex;
  flex-direction: column;
  width: 960px;
  margin: 0 auto;

  .productos_tit {
    width: 250px;
    border-radius: 10px;
    background-color: ${primaryLight};
    font-family: 'Fredoka One', Verdana, sans-serif;
    color: ${lightGray};
    text-align: center;
    margin: 0 auto 30px auto;
    padding: 10px;
    white-space: nowrap;
  }

  .carrousel_box {
    width: max-content;
    text-align: center;
    background-color: ${primaryLight};
    margin: 0 auto;
    padding: 20px 0;
    display: flex;
    align-items: center;
    justify-content: space-around;

    .productos_flecha_izq {
      height: 50px;
      width: 50px;
      //margin: 100px 20px 0 0;
      //float: left;
      cursor: pointer;
      @media screen and (max-width: 599px) {
        height: 15vw;
        width: 15vw;
        margin: 0;
      }
    }

    .productos_flecha_der {
      height: 50px;
      width: 50px;
      cursor: pointer;
      @media screen and (max-width: 599px) {
        height: 15vw;
        width: 15vw;
        margin: 0;
      }
    }

    @media screen and (max-width: 599px) {
      #producto2 {
        display: none;
      }
    }
  }
`;

export default function Productos() {
  return (
    <ProductsContainer>
      <div className="productos_tit">
        <h2>¿Qué hacemos?</h2>
      </div>
      <div className="carrousel_box">
        <img
          className="productos_flecha_izq"
          src="media/arrow_izq.png"
          alt=""
        />
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
        <img
          className="productos_flecha_der"
          src="media/arrow_der.png"
          alt=""
        />
      </div>
    </ProductsContainer>
  );
}
