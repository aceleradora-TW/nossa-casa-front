import styled from 'styled-components'

const Therapies = styled.div`
  background-color: white;
  width: 100%;
  height: 100vh;

  main {
    background-color: blue;
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
    .search-box {
      background-color: #C2D1D9;
      height: 100px;
      display: flex;
      justify-content: center;
      align-items: center;

      .search-input {
        display: flex;
        justify-content: center;
        border: none;
        border-radius: 26px;
        width: 780px;
        height: 52px;
        font-size: 16px;
      }
    }
    .terapias {
      height: 500px;
      background-color: #DADADA;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      align-items: center;

      h2 {
        text-align: center;
        font-size: 2.5rem;
      }
      .painel {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-template-rows: 1fr;
      grid-column-gap: 5px;
      grid-row-gap: 0px;
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

    footer {

      div {
        width: 15%;
        display: flex;
        justify-content: space-between;
      }
    }
  }
  `

export default Therapies
