import styled from 'styled-components'
const Details = styled.div`
  * {
    margin: 0;
    padding: 0;
  }

  .span-detais{
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
 #containerDetails{
    background-color: red;
    /* display: flex; */
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, 1fr);
    grid-column-gap: 0px;
    grid-row-gap: 0px;
    height: 30vh;
    width: 80vw;
  }

  #containerDetails li{
    background-color: purple;
    padding: 10px;
  }

  .closeButton {
    padding-left: 110em;
  }
  .title {
    font-size: 50px;
    
    /* padding-left: 60px;
    padding-bottom: 40px; */
    font-weight: bold;
  }

  .start-date,
  .data-fim {
    /* font-weight: 500;
    padding-left: 30px; */
    font-size: 20px;
  }

  .local {
    /* font-weight: 500;
    padding-left: 60px; */
    font-size: 20px;
    /* padding-top: 50px;
    padding-bottom: 12px; */
  }
  .partners {
    /* font-weight: 500;
    padding-left: 39px; */
    font-size: 20px;
    /* padding-top: 60px;
    padding-bottom: 12px; */
  }

  .description {
    font-weight: 900;
    font-size: 30px;
    padding-left: 60px;
    padding-top: 60px;
    padding-bottom: 20px;
  }

  .descriptionCMS {
    padding-left: 60px;
    font-size: 17px;
    text-align: justify;
    width: 85%;
    font-weight: bold;
  }

  .button-close,
  .button-container {
    padding-left: 90px;
  }

  .div-price,
  .workshopType {
    /* margin-top: -2%;
    padding-left: 70%; */
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
    margin-left: 25px;
    margin-top: -20px;
    font-weight: bold;
  }

  .parce {
    /* margin-left: 16px;
    margin-top: -20px; */
    font-weight: bold;
  }

  .spacing-partners {
    display: inline-block;
    padding-left: 8px;
    margin-right: 1.5em;  
  }

  .day {
    /* padding-bottom: 30px;
    padding-left: 60px;
    padding-top: 20px; */
    font-weight: 400;
    font-size: 23px;
    font-weight: bold;
  }

  .button-inscription {
    background: #f5bc4a;
    border-radius: 3px;
    border: none;
    font-size: 14px;
    width: 10%;
    height: 40px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 43%;
    margin-top: 50px;
    font-weight: bold;
    text-decoration: none;
    color: black;
    margin-bottom: 3em;
  }

  .page {
    background-color: #e4e7eb;
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

  /* @media screen and (max-width: 720px) {
    .title {
      padding-top: -20%;
      font-size: 30px;
      padding-left: 30px;
      padding-bottom: 20px;
    }

    .start-date,
    .data-fim {
      font-weight: 500;
      padding-left: 15px;
      font-size: 17px;
      padding-bottom: 20px;
    }

    .local,
    .partners {
      font-weight: 500;
      padding-left: 30px;
      font-size: 17px;
      padding-bottom: 50px;
      padding-top: 14px;
    }

    .description {
      font-weight: 900;
      padding-left: 30px;
      padding-top: 20px;
    }

    .descriptionCMS {
      padding-left: 30px;
    }

    .div-price,
    .workshopType {
      margin-top: -6%;
    }

    .inscriptionIcon {
      margin-top: -16.5%;
    }

    .inscription {
      margin-top: -4%;
    }

    .spacingMoney,
    .spacingType {
      margin-left: 30px;
      margin-top: -14px;
    }

    .spacingDate,
    .spacingLocal {
      margin-left: 21px;
      margin-top: -16px;
    }

    .parce {
      margin-top: -16px;
    }

    .spacing-partners {
      padding-left: 5px;
    }

    .day {
      padding-bottom: 20px;
      padding-left: 30px;
    }

    .button-inscription {
      margin-top: 50px;
    }
  } */
`
export default Details
