import styled from 'styled-components';
import colors from './colors';
const { lightGray, secondaryLight, secondary, darkGray } = colors;

const AboutContainer = styled.section`
  background-color: ${lightGray};
  padding: 50px 0;
  display: flex;
  flex-direction: column;
  width: 900px;
  margin: 0 auto;

  .sobreNosotros_tit {
    width: 275px;
    border-radius: 10px;
    background-color: ${secondaryLight};
    color: ${lightGray};
    text-align: center;
    margin: 0 auto 30px auto;
    padding: 10px;
    white-space: nowrap;
  }

  .sobreNosotros_box {
    background: ${darkGray};
    margin: 0 auto;

    @media screen and (max-width: 599px) {
      width: 100%;
      display: flex;
      flex-flow: column-reverse;
      align-items: center;
      padding-bottom: 35px;
    }
    @media screen and (min-width: 600px) and (max-width: 1023px) {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding-bottom: 35px;
    }

    .sobreNosotros_txt {
      width: 500px;
      background-color: ${secondary};
      float: left;
      padding: 25px;
      box-sizing: border-box;

      p {
        padding: 20px;
        color: ${lightGray};
        background: ${secondaryLight};
      }

      @media screen and (max-width: 599px) {
        width: 100%;
      }
    }

    .sobreNosotros_img {
      width: 250px;
      height: 250px;
      margin: 25px;
      float: right;
      background: ${secondaryLight};
      overflow: hidden;

      @media screen and (min-width: 600px) and (max-width: 1023px) {
        order: -1;
      }
    }
  }
`;

export default function About() {
  return (
    <AboutContainer>
      <div className="sobreNosotros_tit">
        <h2>¿Quiénes somos?</h2>
      </div>
      <div className="sobreNosotros_box">
        <article className="sobreNosotros_txt">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
            obcaecati odio maiores provident tempora sapiente fuga explicabo
            labore id quaerat?
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla
            autem, et eius facilis iste maxime unde aperiam nemo quas deserunt,
            sunt laborum consectetur repellat cupiditate blanditiis obcaecati
            earum doloribus voluptate.
          </p>
        </article>
        <div className="sobreNosotros_img">
          <img src="./media/sobrenosotros_img.jpg" width="250px" alt="" />
        </div>
      </div>
    </AboutContainer>
  );
}
