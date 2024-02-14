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

  #containerDetails {
    display: grid;
    grid-template-columns: 70% 30%;
    grid-template-rows: repeat(3, 1fr);
    grid-column-gap: 0px;
    grid-row-gap: 0px;
    height: 30vh;
  }

  .closeButton {
    position: relative;
    left: 100%;
  }

  .title {
    font-size: 50px;
    padding-bottom: 70px;
    font-weight: bold;
  }

  .start-date,
  .data-fim, .local, .partners, .parce, .day{
    font-size: 20px;
  }

  .description-section {
    margin: 0 10vw;
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

  .spacingDate,
  .spacingMoney,
  .spacingLocal,
  .parce {
    width: 70%;
    display: flex;
    align-items: center;

    svg {
      padding-right: 10px;
    }
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
    width: 170px;
    height: 40px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
    margin-top: 50px;
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
      display: flex;
      width: 100%;
      height: 100%;
      padding-bottom: 30px;
    }
  }
  .mySwiper {
    height: 20%;
    box-sizing: border-box;
    padding: 10px 0;
  }

  .mySwiper .swiper-slide {
    width: 25%;
    height: 100%;
    opacity: 0.4;
  }

  .mySwiper .swiper-slide-thumb-active {
    * {
      margin: 0;
      padding: 0;
    }
    opacity: 3;
    border: 5px solid #f5bc4a;
  }

  .swiper-slide img {
    display: block;
    width: 30em;
    height: 30em;
    object-fit: cover;
  }
  .style-img-swiper {
    padding-top: 5rem;
    img {
      width: 70rem;
      height: 40rem;
    }
    .style-swiper-fotos {
      img {
        width: 10rem;
        height: 10rem;
      }
    }
  }

  @media (max-width: 768px) {
    .style-img-swiper img {
      width: 30rem;
      height: 30rem;
    }

    .style-img-swiper .style-swiper-fotos {
      img {
        width: 8rem;
        height: 8rem;
      }
    }

    .mySwiper {
      padding: 10px;
    }

    .descriptionCMS {
      width: initial;
    }

    #containerDetails {
      display: flex;
      height: initial;
      flex-direction: column;
      gap: 9px;
    }

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

    .inscriptionIcon {
      width: 100%;
    }

    .spacingDate,
    .spacingMoney,
    .spacingLocal,
    .parce {
      width: 100%;
      gap: 13px;
    }

    .spacingDate,
    .spacingMoney,
    .spacingLocal,
    .parce {
      svg {
        padding-right: 0px;
      }
    }

    .inscription {
      margin-left: 0px;
    }

    .spacing-partners {
      padding-left: 0px;
    }

    .spacing-partners {
      padding-left: 0px;
    }

    .inscriptionIcon {
      gap: 10px;
    }
    .button-inscription {
      width: 50%;
      max-width: 175px;
    }

    @media (max-width: 425px) {
      .style-img-swiper img {
        width: 20rem;
        height: 20rem;
      }

      .style-img-swiper .style-swiper-fotos img {
        width: 5rem;
        height: 5rem;
      }
    }

    @media (max-width: 375px) {
      .style-img-swiper img {
        width: 16rem;
        height: 16rem;
      }

      .style-img-swiper .style-swiper-fotos img {
        width: 4rem;
        height: 4em;
      }
    }

    @media (max-width: 320px) {
      .style-img-swiper img {
        width: 13rem;
        height: 13rem;
      }
      
    }
  }
`
export default Details
