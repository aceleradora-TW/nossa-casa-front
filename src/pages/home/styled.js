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
        margin: 0 6%;
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
        border-radius: 5px;
        width: 250px;
        height: 40px;
        padding: 12px;
        color: #000000;
        text-decoration: none;
        text-align: center;
        font-weight: bolder;
      }
    }

    .about {
      background-color: blue;
      //background-color: #ffffff;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      align-items: center;
      margin: 0 5%;
      height: 627px;

      .content {
        height: 500px;
        width: 100%;
        display: flex;
        justify-content: space-around;
        max-width: 1440px;
        align-items: center;
        line-height: 35px;
        color: #54636F;
        font-size: 2em;

/*justify-content: space-evenly;*/
      }
        @media (max-width: 767px) {
          flex-wrap: wrap;
          height: 100%;
        }

        .text {
          box-sizing: border-box;
          text-align: justify;
          height: 100%;
          width: 100%;
          // width: 40%;
          max-width: 800px
          line-height: 35px;
          

          h2 {
            color: #516B84;
            font-size: 2.5rem;
            margin-bottom: 30px;
            font-weight: 700;
          }
        }
        .foto {
          height: 101%;
          width: 100%;
          max-width: 800px;
          border-radius: 3px;
         
          img {
            height: 101%;
            width: 97%;
            max-width: 100%;
            padding-left:20px;
          }
        }
       /* .foto img {
    width: 110%;
    max-width: auto;
    margin-left: 3%;
    border-radius: 3px;
    margin-bottom: 4.6rem;
  }*/
      }

      button.styled-button {
      background: #f5bc4a;
      border-radius: 5px;
      border: none;
      font-size: 1rem;
      width: 163px;
      height:50px;
      cursor: pointer;
      padding: 10px;
      margin-top: 1.6rem;
      margin-bottom: 1.6rem;

      .button-about {
        text-decoration: none;
        font-weight: bolder;
        cursor: pointer;
        
      }
    }
    }

    .galeria {
      max-width: 100%;
      //background-color: #fafafa;
      background-color: pink;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 30px;
      max-width: 1440px;
      margin: 0 6%;

      .titulo-galeria {
        align-self: flex-start;
        margin-left: 1.2em;
        font-weight: 700;
        color: #516b84;
        line-height: 64px;
        font-size: 2.5rem;
        cursor: default;
      }

      .painel {
        width: 97%;
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
        margin-left: 2em;
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

  @media (max-width: 1280px) {
    .galeria{
      height: 950px;
    }
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

   /* @media ((min-width: 320px) and (max-width: 767px)) {
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
    } */
`
export default Home


