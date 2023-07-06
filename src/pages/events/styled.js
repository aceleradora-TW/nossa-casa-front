import styled from 'styled-components'

const EventsContainer = styled.div`
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

    .search {
      background-color: #C2D1D9;
      height: 122px;
      display: flex;
      justify-content: center;
      align-items: center;
      form > input {
        height: 52px;
        width: 780px;
        border-radius: 26px;
        border: none;
        padding-left: 20px;
      }
    }

    .carrossel-eventos {
      background-color: #DADADA;
      height: 748px;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 20px;

      .evento {
        width: 25%;

        p {
          color: gray;
          margin: 10px 0;
        }

        h3 {
          margin-bottom: 20px;
        }

        button {
          background-color: white;
          width: 146px;
          height: 40px;
          border: 1px solid #424B5A;
        }
      }

      img {
        width: 100%;
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

export default EventsContainer
