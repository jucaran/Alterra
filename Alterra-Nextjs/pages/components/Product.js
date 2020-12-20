import { useState } from 'react';
import styled from 'styled-components';
import colors from './colors';
const { primary, lightGray } = colors;

const ProductContainer = styled.div`
  .product_toggle {
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
      opacity: 0;
      bottom: 0;
      text-align: left;
      transition: 350ms ease-out;

      h3 {
        padding-bottom: 15px;
        font-size: 1.5rem;
      }

      p {
      font-family: "Lato", sans-serif;
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
      cursor: pointer;

      &:hover {
      background: ${lightGray};
      color: black;
      }
    }
    }
  }

  .product_toggle.active {
    cursor: text;
    .product_txt {
      opacity: 1;
      transition: 350ms ease-out;
    }

    img {
      transform: scale(1.1);
    }
  }
`;

export default function Product({ title, description, img }) {
  const [showText, setShowText] = useState(false);

  const handleHover = () => {
    setShowText(!showText);
  };

  return (
    <ProductContainer>
      <div
        onMouseLeave={handleHover}
        onMouseEnter={handleHover}
        className={showText ? 'product_toggle active' : 'product_toggle'}
      >
        <img className="product_img" src={img} alt={`imagen de ${title}`} />
        <div className="product_txt">
          <h3>{title}</h3>
          <p>{description}</p>
          <button className="product_cta">más info</button>
        </div>
      </div>
    </ProductContainer>
  );
}
