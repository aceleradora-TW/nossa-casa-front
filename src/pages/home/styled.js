import styled from 'styled-components'

const Home = styled.div`
  background-color: white;
  width: 100%;
  height: 100vh;

  main {
    height: 100vh;
    .carrossel{
      height: 652px;
      background-color: #E9EEF1;

      h1 {
        padding-left: 140px;
        padding-top: 60px;
        font-size: 2em;
      }
    }

    .about {
      background-color: #FFFFFF;
      height: 627px;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      align-items: center;
      .content {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 30px;
      }
      .content > div {
        width: 80%;
        margin: 0 auto;
        h2 {
          font-size: 26px;
          margin-bottom: 30px;
        }
      }
      button {
        background-color: #424B5A;
        color: #FFFFFF;
        border: none;
        width: 168px;
        height: 40px;
      }
    }

    .galeria {
      height: 1036px;
      background-color: #516B84;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      align-items: center;

      h2 {
        text-align: center;
        font-size: 3.125rem;
        color: #FFFFFF;
      }

      .painel {
        height: 55%;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: repeat(3, 1fr);
        grid-column-gap: 10px;
        grid-row-gap: 10px; 
      }

      button {
        background: linear-gradient(180deg, #516B848F 0%, #FFFFFF 100%);
        box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.40);
        border-radius: 3px;
        color: #000000;
        border: none;
        font-size: 14px;
        width: 182px;
        height: 40px;
        cursor: pointer;
      }
    }

    .parceires {
      background-color: aliceblue;
      height: 697px;
      display: flex;
      flex-direction: column;
      align-items: center;

      h2 {
        font-size: 2.5rem;
        margin-top: 30px;
        margin-bottom: 10px;
      }

      p {
        margin-bottom: 40px;
      }

      .carrossel-perfis {
        height: 60%;
        display: flex;
        justify-content: center;
        gap: 20px;

        .perfil {
          background-color: cadetblue;
          width: 30%;

          h3 {
          text-align: center;
          }

          p {
            text-align: center;
          }
        }
      }
    }
  }

`

export default Home
