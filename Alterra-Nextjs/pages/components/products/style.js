import styled from 'styled-components';
import colors from '../colors';
const { primary, primaryLight, lightGray, darkGray } = colors;

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

    .products_box {
      overflow: hidden;
      width: 550px;

      .show_products {
        padding: 0;
        margin: 0;
        display: flex;
        position: relative;
        transition: 350ms;
        left: -${(props) => 560 * props.position}px;
      }
    }

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
  }
  .mas {
    min-width: 250px;
    height: 250px;
    background: ${primary};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 15px;

    h3 {
      font-size: 2rem;
      color: ${lightGray};
      padding-bottom: 1rem;
    }

    a {
      height: 75px;
      width: 75px;
      display: flex;
      color: ${lightGray};
      font-size: 2rem;
      text-decoration: none;
      border: 1px solid ${lightGray};
      border-radius: 50%;
      align-items: center;
      justify-content: center;
      transition: 350ms;

      &:hover {
        background: ${lightGray};
        color: ${darkGray};
      }
    }
  }
`;

export default ProductsContainer;
