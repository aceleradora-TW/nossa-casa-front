import styled from 'styled-components'
const Home = styled.div`
  background-color: white;
  width: 100%;
  height: 100vh;
  box-sizing: border-box;

  main {
    box-sizing: border-box;

    section {
      margin-bottom: 32px;
    }

    .carrossel {
      background-color: #010101;
      color: #ffffff;
      .swiper-button-next {
        margin-right: 25px;
      }
      .swiper-button-prev {
        margin-left: 25px;
      }
    }

    .hero-banner {
      height: 560px;

      width: 70%;
      margin: auto;
    }
    .style-swiper-slide {
      div {
        display: flex;
        flex-direction: column;
        width: 100%;
      }
      .slide-container {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        height: 100%;
      }
      .slide-container :not(:last-child) {
        margin: 0 10%;
      }
      .event-container {
        width: 60%;
        height: 100%;
        height: 240px;
      }
      .slide-title {
        font-size: 2rem;
        font-family: 'Inter', sans-serif;
        float: inline-start;
        z-index: 1;
        align-items: center;
      }

      .descricao {
        font-family: 'Inter', sans-serif;
        font-size: 1.3rem;
        line-height: 30px;
        cursor: default;
        text-align: justify;
        z-index: 1;
      }

      img {
        width: 100%;
        height: 100%;
        position: fixed;
        opacity: 50%;
      }

      .ver-mais {
        z-index: 1;
        background-color: #f5bc4a;
        width: 180px;
        height: 40px;
        padding: 10px;
        color: #000000;
        text-decoration: none;
        text-align: center;
        font-size: 0.9rem;
        font-weight: bolder;
      }
    }

    .about {
      background-color: #ffffff;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      align-items: center;
      padding-top: 47px;

      .content {
        padding: 5vh;
        height: 500px;
        width: 100%;
        display: flex;
        justify-content: space-around;
        max-width: 1440px;
      }
      @media (max-width: 767px) {
        flex-wrap: wrap;
        height: 100%;
      }
      .text {
        box-sizing: border-box;
        text-align: justify;
        padding: 2% 2%;
        height: 100%;
        width: 100%;
        max-width: 800px;
        align-items: center;
        padding-left: 50px;
        h2 {
          font-size: 26px;
          margin-bottom: 15px;
          margin-left: 23px;
        }
      }

      .foto {
        height: 100%;
        width: 100%;
        max-width: 800px;
        margin-left: 3%;
        border-radius: 3px;
        margin-bottom: 4.6rem;
        img {
          height: 100%;
          width: 100%;
          max-width: 100%;
        }
      }
    }

    button.styled-button {
      background: #f5bc4a;
      box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.4);
      border-radius: 3px;
      border: none;
      font-size: 1rem;
      width: 163px;
      height: 56px;
      cursor: pointer;
      padding: 10px;
      margin-top: 1.6rem;
      margin-bottom: 1.6rem;

      .button-about {
        text-decoration: none;
        font-weight: 600;
        font-size: 1rem;
        color: #000000;
      }
    }
  }

  .galeria {
    padding-top:30px;
    background-color: #fafafa;  
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 30px;

    .titulo-galeria {
      align-self: flex-start;
      margin-left: 8.3%;
      font-weight: 700;
      line-height: 64px;
      font-size: 3.125rem;
      color: #516b84;
      cursor: default;
    }

    .container-painel {
        display: flex;
        align-self: normal;
        margin: 0 8.3%;

        .painel {
          width: 100%;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          grid-template-rows: repeat(2, 1fr);
          grid-column-gap: 1%;
          grid-row-gap: 2%;
          justify-content: center;

          li img {
            width: 100%;
            height: 100%;
            max-height: 400px;
            min-width: 100px;
            border-radius: 4px;
            object-fit: cover;
            object-position: center;
          }
        }
      }
    button {
      background: #516b84;
      border-radius: 3px;
      color: #fafafa;
      border: none;
      font-size: 1rem;
      width: 148px;
      height: 56px;
      cursor: pointer;
      margin-top: 15px;
      margin-bottom: 60px;
    }
  }
  .parceires {

    h2 {
      margin-top: 30px;
      cursor: default;
    }

    p {
      cursor: default;
    }

    .perfil {
        width: 30%;

        h3 {
          text-align: center;
          cursor: default;
        }

        p {
          cursor: default;
        }
      }
    /* .carrossel-perfis {
      height: 60%;
      display: flex;
      justify-content: center;
      gap: 20px;
      cursor: default;

      .perfil {
        background-color: cadetblue;
        width: 30%;

        h3 {
          text-align: center;
          cursor: default;
        }

        p {
          text-align: center;
          cursor: default;
        }
      }
    } */
  }

  /* .about {
    background-color: #ffffff;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    box-sizing: border-box; /
    align-items: center; 
    height: 627px; / 
  }

  main .about { //
    height: auto;//
    padding: 10px;//
  }//

  main .about .content {
    display: flex;
    align-items: center; / 
    justify-content: space-evenly; /
    width: 100%; 
    flex-direction: row; /
    margin-top: 5rem; /
    margin-bottom: 4rem; /
  } */ 

  @media ((min-width: 768px) and (max-width: 1440px)) {
    section.about {
      margin-bottom: 0;
    }

    .about .content {
      height: auto;
    }

    .text button {
      margin-bottom: 0;
    }
  }

  /* @media (max-width: 767px) {
    flex-wrap: wrap;
    height: 100%;
  } */

  @media ((min-width: 320px) and (max-width: 767px)) {
    .swiper-button-next,
    .swiper-button-prev {
      display: none;
    }

    .slide-container {
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      align-items: center;

      .event-container {
        width: 80% !important;
        height: 50vh !important;
        font-weight: bold;

        .descricao {
          line-height: default;
          max-height: 100%;
          overflow-x: hidden;
          font-size: .9rem;
          white-space: normal;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 10;
          -webkit-box-orient: vertical;

        }
        .descrição::-webkit-scrollbar {
          width: 10px;
        }

        .descrição::-webkit-scrollbar-track {
          background: #ffffff;
        }

        .descrição::-webkit-scrollbar-thumb {
          background-color: grey;
          border-radius: 10px;
          border: 3px solid #ffffff;
        }
      }
    }

    .about .content {
      flex-direction: column;
      height: initial;
      justify-content: initial;
      padding: 2vh;
    }

    .about {
      justify-content: initial;
      height: initial;
    }

    .about .foto {
      order: -1;
      margin-bottom: 2rem;
      margin-left: 0;
    }

    .about .text {
      display: flex;
      flex-direction: column;
      padding: 0;
    }

    .text button {
      margin-bottom: 0;
    }
  }

  @media screen and (max-width: 767px) {
    .galeria .titulo-galeria{
      font-size:2.75rem;
    }
    .painel{
      grid-template-columns: repeat(2 ,1fr);
      grid-template-rows: repeat(2 ,1fr);
    }
  }

`
export default Home
