import styled from 'styled-components';
import colors from './colors';
const { primary, lightGray } = colors;

const ProductContainer = styled.div`
  width: 250px;
  height: 250px;
  background-color: ${primary};
  margin: 0 15px;
  position: relative;
  overflow: hidden;
  cursor: pointer;

  .product_img {
    margin: 0 auto;
    width: 250px;
    height: 250px;
    object-fit: cover;
    transition: transform 200ms ease-in;
  }

  .product_txt {
    width: 100%;
    height: 100%;
    color: white;
    background: rgb(0, 0, 0, 0.6);
    padding: 15px 15px;
    position: absolute;
    bottom: 0;
    /* font-weight: bold; */
    /* line-height: 1.2; */
    text-align: left;
    h3 {
      padding-bottom: 15px;
      font-size: 1.5rem;
    }
    &:hover {
      display: none;
      color: black;
    }
  }

  &:hover {
    img {
      transform: scale(1.1);
    }
  }

  .product_cta {
    background-color: rgba(0, 0, 0, 0);
    margin-top: 15px;
    padding: 5px 7px;
    border: 1px solid ${lightGray};
    border-radius: 4px;
    text-transform: uppercase;
    color: ${lightGray};
    font-size: 12px;
  }
`;

export default function Product({ title, description, img }) {
  return (
    <ProductContainer>
      <img className="product_img" src={img} alt={`imagen de ${title}`} />
      <div className="product_txt">
        <h3>{title}</h3>
        <p>{description}</p>
        <button className="product_cta">más info</button>
      </div>
    </ProductContainer>
  );
}
