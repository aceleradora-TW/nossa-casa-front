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
    margin: 0 10vw;
  }

  .description {
    font-weight: 900;
    font-size: 30px;
    padding-top: 60px;
    padding-bottom: 20px;
  }

  .descriptionCMS {
    font-size: 17px;
    text-align: justify;
    width: 85%;
    font-weight: bold;
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
    margin-top: 4px;
    font-weight: bold;
    margin-left: 10px;
  }

  .spacingMoney,
  .spacingType {
    margin-left: 30px;
    margin-top: -14px;
    font-weight: bold;
  }

  .spacingDate,
  .spacingLocal {
    font-weight: bold;
    width: 70%;
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

  .day {
    font-weight: 400;
    font-size: 23px;
    font-weight: bold;
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
  }.swiper-slide {
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #E4E7EB;
}

.swiper-slide img {
  display: block;
  width: 30em;
  height: 30em;
  object-fit: cover;
}

.style-img-swiper {
  background-color: #E4E7EB;
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
  margin: 0 3rem;
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
  *{
    margin: 0;
    padding: 0;
  }
  opacity: 3;
  border: 5px solid #f5bc4a;
}

.container-button-exit{
  margin-right: 2%;
  display: flex;
  justify-content: right;
}
  
.close-button{
  font-size: 1em;
}
  
`
export default Details
