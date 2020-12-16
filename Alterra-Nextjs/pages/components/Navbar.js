import Link from 'next/link';
import styled from 'styled-components';
import colors from './colors';
const { primary, lightGray } = colors;

const Container = styled.header`
  height: 100px;
  background-color: ${primary};

  .logo {
    margin: 15px 0 0 50px;
  }

  .menu {
    height: 100px;
    margin-right: 30px;
    color: ${lightGray};

    li {
      display: inline;
      list-style: none;

      a {
        text-decoration: none;
        color: ${lightGray};
        font-family: 'Fredoka One', Verdana, sans-serif;
        display: inline-block;
        padding: 40px 20px;
        transition: background 150ms ease-in-out;
      }
    }
  }
`;

export default function Navbar() {
  return (
    <Container>
      <div className="logo">
        <Link href="/">
          <img src="media/logo_isotipo.svg" height="70px" alt="Alterra" />
        </Link>
      </div>
      <nav className="menu">
        <ul>
          <li>
            <Link href="/">Inicio</Link>
          </li>
          <li>
            <Link href="/productos">Productos</Link>
          </li>
          <li>
            <Link href="/contacto">Contacto</Link>
          </li>
        </ul>
      </nav>
    </Container>
  );
}
