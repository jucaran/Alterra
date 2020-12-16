import Link from 'next/link';
import styled from 'styled-components';
import colors from './colors';
const { primary, primaryLight, lightGray } = colors;

const Container = styled.header`
  width: 960px;
  height: 100px;
  margin: 0 auto;
  background-color: ${primary};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  .logo {
    margin: 0 0 0 50px;
  }

  .menu {
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

        &:hover {
          background: ${primaryLight};
        }
      }
    }
  }

  //phone responsive
  @media (max-width: 599px) {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column wrap;

    .logo {
      width: max-content;
      float: none;
      margin: 0;
      padding: 15px 0;
    }

    .menu {
      width: 100%;
      height: auto;
      float: none;
      margin-right: 0;
      display: flex;
      justify-content: space-evenly;
    }
  } /*end phone responsive*/
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
