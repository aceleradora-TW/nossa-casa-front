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
      .slide-container{
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
        border: 1px solid;
        border-radius: 5px;
        width: 250px;
        height: 40px;
        text-align: center;
        padding: 10px;
        color: #000000;
        text-decoration: none;
        font-weight: bold;
      }
    }

    .about {
      background-color: #ffffff;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      align-items: center;

      .content {
        padding: 5vh;
        height: 500px;
        width: 100%;
        display: flex;
        justify-content: space-around;
      }
      .text {
        box-sizing: border-box;
        text-align: justify;
        padding: 2% 2%;
        height: 100%;
        width: 100%;
        max-width: 800px;
        h2 {
          font-size: 26px;
          margin-bottom: 30px;
        }
        align-items: center;
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

    button {
      background: #f5bc4a;
      box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.4);
      border-radius: 3px;
      color: #000000;
      border: none;
      font-size: 1rem;
      width: 163px;
      height: 56px;
      font-weight: 600;
      cursor: pointer;
      padding: 10px;
      margin-top: 1.6rem;
      margin-bottom: 1.6rem;
    }
  }

  .galeria {
    max-width: 1200px;
    margin: 0 auto;
    background-color: #fafafa;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 30px;

    .titulo-galeria {
      align-self: flex-start;
      margin-left: 12.5%;
      font-size: 2.25rem;
      font-weight: 700;
      color: #516b84;
      line-height: 64px;
      text-align: center;
      font-size: 3.125rem;
      cursor: default;
    }

    .painel {
      width: 75%;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-column-gap: 25px;
      grid-row-gap: 25px;
      overflow: hidden;

      img {
        width: 100%;
        height: 100%;
        max-width: auto;
        margin-left: 3%;
        border-radius: 3px;
        margin-bottom: 3.5rem;
      }
    }
    .container-painel {
      display: flex;
      justify-content: center;
    }
    button {
      background: #516b84;
      border-radius: 3px;
      color: #fafafa;
      border: none;
      font-size: 0.75rem;
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
      cursor: default;
    }

    p {
      margin-bottom: 40px;
      cursor: default;
    }

    .carrossel-perfis {
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
    }
  }

  .about {
    background-color: #ffffff;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    box-sizing: border-box;
    align-items: center;
    height: 627px;
  }

  main .about {
    height: auto;
    padding: 10px;
  }

  main .about .content {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;
    flex-direction: row;
    margin-top: 5rem;
    margin-bottom: 4rem;
  }

  .content .text {
    box-sizing: border-box;
    text-align: justify;
    width: 40%;
    margin-bottom: auto;
  }

  .foto img {
    width: 110%;
    max-width: auto;
    margin-left: 3%;
    border-radius: 3px;
    margin-bottom: 4.6rem;
  }

  .button-about {
    color: black;
    font-weight: bold;
    text-decoration: none;
  }

  .styled-button {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f5bc4a;
    width: 146px;
    height: 40px;
    border: none;
    margin-top: 1rem;
  }

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

  @media (max-width: 767px) {
    flex-wrap: wrap;
    height: 100%;
  }

  @media ((min-width: 320px) and (max-width: 767px)) {

    .swiper-button-next, .swiper-button-prev {
        display: none
      }

    .slide-container{
      height: 100% ;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      align-items: center;


      .event-container{
        width: 80% !important;
        height: 55vh !important;
        font-weight: bold;

        .descricao{
          line-height: default;
          max-height: 100%;
          overflow: scroll;
          overflow-x: hidden;
          font-size: 1rem;

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
        background-color: red;
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


  @media (max-width: 1280px) {
    .galeria {
      height: 950px;
    }
  }
`

export default Home
