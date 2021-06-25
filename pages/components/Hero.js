import styled from 'styled-components';
import colors from './colors';
const { primary, primaryLight, lightGray } = colors;

const Banner = styled.section`
  /*animations*/
  @keyframes fadeInRight {
    from {
      opacity: 0;
      right: 15px;
    }
    to {
      opacity: 1;
      right: 0px;
    }
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes fadeInBottom {
    from {
      opacity: 0;
      bottom: 15px;
    }
    to {
      opacity: 1;
      bottom: 0px;
    }
  }

  background: url('./media/banner_bkg2_comp.png') #e8e8e8 top no-repeat;
  width: 900px;
  margin: 0 auto;

  .banner_box {
    width: max-content;
    margin: 0 auto;
    padding-bottom: 50px;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (min-width: 600px) and (max-width: 1023px) {
      padding-bottom: 6vw;
    }
    @media screen and (max-width: 600px) {
      width: min-content;
      height: auto;
      display: flex;
      flex-flow: column wrap;
      align-items: center;
      justify-content: space-around;
    }

    .banner_img {
      height: 250px;
      position: relative;
      margin-top: 75px;
      padding-right: 20px;
      animation: 1s ease-in-out forwards fadeInRight;

      @media (min-width: 600px) and (max-width: 1023px) {
        width: 25vw;
        padding-left: 5vw;
      }
      @media screen and (max-width: 599px) {
        width: 100%;
        margin: 0;
        padding: 5% 0 1% 0;
      }
    }

    .banner_txt {
      width: 300px;
      float: left;
      position: relative;
      margin-top: 75px;
      padding: 50px 0 60px 20px;
      color: #e8e8e8;
      border-left: 2px #e8e8e8 solid;
      animation: 1s ease-in-out forwards fadeInBottom;

      @media screen and (max-width: 599px) {
        height: auto;
        width: 100%;
        margin: 0;
        padding: 0;
        border-left: 20px solid blue;
        text-align: center;
      }

      .banner_txt h1 {
        position: relative;
      }
    }
  }
  .cta {
    width: 50px;
    height: 50px;
    margin: 0 auto;
    display: flex;
    padding-bottom: 15px;
  }
`;

export default function Hero() {
  return (
    <Banner>
      <div className="banner_box">
        <img className="banner_img" src="/media/LogoOscuro.svg" alt="Alterra" />
        <div className="banner_txt">
          <h1>Productos sustentables</h1>
          <p>
            Velas aromáticas, tapabocas, toallitas reutilizables y mucho más
          </p>
        </div>
      </div>
      <div className="cta">
        <a className="banner_btn" href="#productos">
          <img src="media/arrow_abajo.png" width="50px" alt="ver mas" />
        </a>
      </div>
    </Banner>
  );
}
