import styled from 'styled-components';
import colors from './colors';
const { primary, lightGray } = colors;

const FooterContainer = styled.footer`
  width: 960px;
  margin: 0 auto;
  color: ${lightGray};
  background: ${primary};
  padding: 15px 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: nowrap;

  .botoneraRedes {
    display: flex;
    justify-content: center;
    align-items: center;
    a {
      padding: 0 3px;
    }
  }
`;

export default function Footer() {
  return (
    <FooterContainer>
      <div id="datosContacto">©Alterra 2020 - info@alterra.com.ar</div>
      <div className="botoneraRedes">
        <a href="http://instagram.com/tienda.alterra">
          <img src="media/instagram.png" width="35px" alt="Instagram" />
        </a>
        <a href="https://facebook.com/tienda.alterra" width="20px">
          <img src="media/facebook.png" width="35px" alt="Facebook" />
        </a>
        <a href="#" width="20px">
          <img src="media/whatsapp.png" width="35px" alt="Whatsapp" />
        </a>
      </div>
    </FooterContainer>
  );
}
