import styled from 'styled-components'
const EventsStyleDescription = styled.div`
  * {
    margin: 0;
    padding: 0;
  }

  .container {
    display: grid;
    grid-template-columns: 70% 30%;
    grid-template-rows: repeat(3, 1fr);
    grid-column-gap: 0px;
    grid-row-gap: 0px;
    height: 30vh;
  }

  h1 {
    font-size: 1.2em;
  }

  .text,
  .text2 {
    width: 35%;
  }

  li {
    display: flex;
    font-size: 20px;
    padding-top: 1.7em;
  }

  .parceires p {
    margin-right: 1em;
  }
  .style-icon {
    margin-right: 1em;
  }

  p {
    margin-right: 0.1em;
  }

  .title {
    font-size: 2.188em;
    margin: 1em 0;

    p {
      font-size: 1.875em;
      padding-top: 1.875em;
      margin-right: 5em;
    }
  }

  .description-section {
    margin: 0 10vw;
  }

  #no-registration {
    display: flex;
  }

  .text-title-description {
    padding-bottom: 0.5em;
    font-size: 1.875em;
    font-weight: bold;
  }

  .description {
    text-align: justify;
    padding-top: 6em;
    font-size: 1.25em;
    line-height: 1.3em;
    width: 92%;
  }

  .description {
    padding-top: 1em;
    li {
      padding-top: 0em;
    }

    p {
    padding-top: 1em;

    }
  }

  .button-inscription {
    background: #f5bc4a;
    border-radius: 0.188em;
    font-size: 1.2em;
    width: 20%;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    margin-top: 3.3em;
    text-decoration: none;
    color: black;
  }

  .container-carousel {
    background-color: #e4e7eb;
  }

  .swiper-slide {
    background: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .slide-itens {
    display: flex;
    flex-direction: column;
  }

  .swiper-slide img {
    display: block;
    width: 22vw;
    height: 17vw;
    object-fit: cover;
  }

  .style-img-swiper {
    background-color: #e4e7eb;
    margin-left: 5%;
    margin-right: 5%;
    margin-top: 3rem;
    padding-top: 5rem;
  }

  .style-img-swiper img {
    width: 70rem;
    height: 40rem;
  }

  .style-swiper-fotos img {
    width: 9rem;
    height: 9rem;
  }

  .second-carousel {
    margin-left: 5rem;
    margin-right: 5rem;
    height: 20%;
    box-sizing: border-box;
    padding: 10px 0;
  }

  .first-carousel {
    padding-top: 5%;
  }

  .second-carousel .swiper-slide {
    width: 25%;
    height: 100%;
    opacity: 0.4;
  }

  .second-carousel .swiper-slide-thumb-active {
    * {
      margin: 0;
      padding: 0;
    }
    opacity: 3;
    border: 5px solid #f5bc4a;
  }

  .container-button-exit {
    margin-right: 2%;
    display: flex;
    justify-content: right;
  }

  .close-button {
    font-size: 1em;
  }

  .carrossel {
    height: 25vh;
    align-self: flex-start;

    h1 {
      margin: 3em 10vw 1.5em 10vw;
      font-size: 2em;
    }
    p {
      padding-top: 3em;
      padding-left: 3em;
      line-height: 1.5em;
      width: 90%;
      text-align: justify;
    }
  }

  .mySwiper {
    position: relative;
    z-index: 0;
    width: 100vw;
  }
  .swiper-slide-atividades {
    display: flex;
    align-items: center;
    height: 70vh;
    padding-left: 3em;
    margin-right: 20px;
    .img-foto-atividades {
      width: 45vw;
      height: 35vh;
    }
    h3 {
      padding-top: 5px;
    }
  }

  .date,
  .hour {
    color: grey;
    margin: 5px, 0;
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
    cursor: pointer;

    a {
      text-decoration: none;
      color: black;
    }
  }
`
export default EventsStyleDescription
