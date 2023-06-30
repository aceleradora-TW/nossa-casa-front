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
      height: 1041px;
      background-color: #FAFAFA;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 30px;

      h2 {
        align-self: flex-start;
        margin-left: 7.5%;
        font-size: 2.25rem;
        font-weight: 700;
        color: #516B84;
        line-height: 64px;
      }

      .painel {
        height: 60%;
        width: 85%;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: repeat(2, 1fr);
        grid-column-gap: 25px;
        grid-row-gap: 25px;
        overflow: hidden;

        img {
          width: 100%;
          height: 100%;
        }
      }

      button {
        border-radius: 3px;
        background-color: #516B84;
        color: #FFFFFF;
        border: none;
        font-size: 1rem;
        font-weight: 600;
        width: 148px;
        height: 56px;
        margin-top: 20px;
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

  @media (min-width: 1920px) {
    main {
      .galeria {
        height: 1200px;
        padding: 30px 0;

        .painel {
          height: 95%;
        }

        button {
          margin-bottom: 16px;
        }
      }
    }
  }

`

export default Home
