import styled from "styled-components";

export const GaleryStyled = styled.div`
  *{
    margin: 0;
    border: 0;
    padding: 0;
    box-sizing: border-box;
  }

  .container{
    height: calc(100vh - 100px);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    
    .top {
    width: 100%;
    margin: 1% 0;
  }

  .top > .h2-modal-galery {
    font-size: 2.7rem;
    color: #54636E;
    text-align: center;
  }
  .swiper {
    width: 70%;
    margin-left: auto;
    margin-right: auto;
  }

  .first-carousel .swiper-slide {
    height: 70vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .second-carousel {
    margin-top: 1%;
    margin-bottom: 1%;
  }

  .second-carousel .swiper-slide {
    width: 90px;
    max-height: 90px;
    opacity: 0.5;
  }
  .second-carousel .swiper-slide-thumb-active {
    opacity: 1;
    border: 5px solid #f5bc4a;
  }

  .first-carousel img{
      max-width: 100%;
      max-height: 100%;
      object-fit: cover;
      object-position: center;   

  }
  .second-carousel img{
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;  
    }
  }


  @media (min-width: 320px) and (max-width: 767px) {
  .container {

    .top {
      padding: 2% 0;
    }

    .top > .h2-modal-galery {
    font-size: 1.9rem;
  }

    .swiper {
      width: 99%;
    }

    .first-carousel .swiper-slide {
      max-height: 100%;
    }

    .swiper-button-next,
    .swiper-button-prev {
      display: none;
    }
  }
}

`
