import styled from 'styled-components'
const Home = styled.div`
  background-color: white;
  width: 100%;
  height: 100vh;

  main {
    height: 100vh;
    .carrossel {
      background-color: #010101;
      color: #ffffff;

    }
    .swiper {
      height: 560px;
      width: 70%;
    }
    .mySwiper {
      width: 70%;
      margin: auto;
    }
    .swiper-slide {

      div {
        display: flex;
        flex-direction: column;
        width: 100%;
        
      }
      .slide-container {
        display: flex;
      }
      .slidetitulo {
        margin: 20px auto 30px 50px;
        font-size: 2rem;
        font-family: 'Inter', sans-serif;
        float: inline-start;
        z-index: 1;
        align-items:center;
      }

      .descricao {
        margin: 50px 10px 10px 50px;
        width: 50%;
        font-family: 'Inter', sans-serif;
        font-size: 1.3rem;
        line-height: 30px;
        cursor: default;
        text-align: justify;
        z-index: 1;

        @media (max-width: 375px) {
          font-size: 20px;
          color: red;
        }

      }
      img {
        width: 100%;
        height: 100%;
        position: fixed;
        opacity: 50%;
      }
      .event-container {
        
      }
      .ver-mais {
        z-index:1;
        background-color: #F5BC4A;
        border: 1px solid ;
        border-radius: 5px ;
        width: 250px;
        height: 40px;
        margin-left: 10%;
        text-align: center;
        padding: 10px;
        color: black;
        text-decoration: none;
        margin-top: 3%;
      }
      @media (min-width: 375px) and (max-width: 480px) {
        .descricao {
          font-size: 0.8em;
        }
      }
      
      @media (min-width: 481px) and (max-width: 768px) {

      }
      
      @media (min-width: 769px) and (max-width: 992px) {

      }
      
      @media (min-width: 993px) and (max-width: 1280px) {

      }
    }
    .swiper-pagination {
    }

    .about {
      background-color: #ffffff;
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
        background-color: #424b5a;
        color: #ffffff;
        border: none;
        width: 168px;
        height: 40px;
      }
    }

    .galeria {
      height: 1036px;
      background-color: #516b84;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      align-items: center;

      h2 {
        text-align: center;
        font-size: 3.125rem;
        color: #ffffff;
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
        background: linear-gradient(180deg, #516b848f 0%, #ffffff 100%);
        box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.4);
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
