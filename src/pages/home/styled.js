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
      }
      .event-container {
        width: 60%;
        height: 100%;
        height: 240px;
        margin-left: 50px;
      }
      .slide-title {
        margin: 20px auto 30px 50px;
        font-size: 2rem;
        font-family: 'Inter', sans-serif;
        float: inline-start;
        z-index: 1;
        align-items: center;
      }

      .descricao {
        margin: 50px 10px 10px 50px;
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
        margin-left: 10%;
        text-align: center;
        padding: 10px;
        color: #000000;
        text-decoration: none;
        margin-top: 3%;
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

    @media (max-width: 900px) {
      section.about{
        margin-bottom: 0;
      }
      .about .content {
        height: auto;
      }

      .text button{
        margin-bottom: 0;
      }
    }

    @media (max-width: 500px) {
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
    }

    @media (max-width: 320px) {
      flex-wrap: wrap;
      height: 100%;
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
`

export default Home
