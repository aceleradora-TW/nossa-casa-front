import styled from 'styled-components'

const Therapies = styled.div`
  background-color: white;
  width: 100%;
  height: 100vh;

  main {
 
    .terapias-carrossel {
        background-color: #ffffff;

        h1 {
          padding: 70px 200px 50px 140px;
          font-size: 2em;
        }
        .resumo-terapias{
          line-height:1.2rem;
          padding: 0px 140px 0px 140px;
          font-size: 0.99em;
          text-align: center;
          text-align: justify;
          color: black;
        }
    }

    .post{
      height: 500px;
      background-color: #DADADA;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      align-items: center;
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
