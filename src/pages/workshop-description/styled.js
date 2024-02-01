import styled from 'styled-components'
const Details = styled.div`
  * {
    margin: 0;
    padding: 0;
  }

  .span-detais {
    display: flex;
    flex-direction: column;
  }

  #container-details {
    display: grid;
    grid-template-columns: 70% 30%;
    grid-template-rows: repeat(3, 1fr);
    grid-column-gap: 0px;
    grid-row-gap: 9px;
    height: 30vh;
  }

  .close-button {
    position: relative;
    left: 100%;
  }

  .title {
    font-size: 50px;
    padding-bottom: 70px;
    font-weight: bold;
  }

  .start-date,
  .data-fim {
    font-size: 20px;
  }

  .local {
    font-size: 20px;
  }
  .partners {
    font-size: 20px;
  }
  .description-section {
    margin: 10vh 10vw;
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

  .button-close,
  .button-container {
    padding-left: 90px;
  }

  .inscriptionIcon {
    width: 20vw;
    display: flex;
  }

  .inscription {
    font-size: 20px;
    margin-top: 4px;
    margin-left: 10px;
  }

  .spacingMoney,
  .spacingType {
    font-size: 20px;
    margin-left: 30px;
    margin-top: -14px;
  }

  .spacingDate:nth-child(n + 2){
    background-color: blue;
  }

  .spacingDate,
  .spacingLocal {
    width: 100%;
    display: flex;

    svg {
      padding-right: 10px;
    }

    p {
      line-height: 1.2;
    }
  }

  .parce {
    font-weight: bold;
  }

  .spacing-partners {
    display: inline-block;
    padding-left: 8px;
    margin-right: 1.5em;
  }

  .button-inscription {
    background: #f5bc4a;
    border-radius: 3px;
    border: none;
    font-size: 14px;
    width: 20%;
    height: 60px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
    margin-top: 50px;
    font-weight: bold;
    text-decoration: none;
    color: black;
    margin-bottom: 3em;
  }

  .page {
    background-color: #e4e7eb;
    width: 100vw;
    margin-top: 5%;
  }
  .swiper-slide {
    background: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #e4e7eb;
    img {
    }
  }

  .swiper-wrapper {
    width: 100%;
  }

  .swiper-slide img {
    display: block;
    object-fit: cover;
    object-position: center;
    padding-bottom: 30px;
  }

  .style-img-swiper {
    background-color: #e4e7eb;
    padding-top: 5rem;
  }

  .style-img-swiper img {
    width: 100%;
    max-width: 70rem;
    height: 40rem;
  }

  .style-swiper-fotos img {
    width: 20vw;
    min-width: 5rem;
    height: 7rem;
    margin: 0 50px;
  }

  .second-carousel {
    height: 20%;
    box-sizing: border-box;
    padding-top: 1rem;
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

  @media (min-width: 320px) and (max-width: 768px) {
    .button-inscription {
      width: 50%;
      max-width: 175px;
    }
    .descriptionCMS {
      /* background-color: red; */
      width: 80vw;
      margin: 0 auto;
      font-size: clamp(5px, 100%, 20px);
    }
    .description-section h1 {
      font-size: 30px;
      margin: 0;
      padding-bottom: 10%;
    }

    .span-detais #container-details {
      grid-template-columns: initial;
      .start-date,
    .data-fim, 
    .local, 
    .partners, 
    .parce, 
    .day,
    .spacingMoney,
    .spacingType,
    .inscription {
      font-size: 15px;
    }
      li {
        padding-bottom: 3%;
      }
    }

    .start-date .spacingDate p {
      display: flex;
      flex-wrap: wrap;
      width: 100%;
    }
  }

  @media (max-width: 1024px) {
  }
`
export default Details
