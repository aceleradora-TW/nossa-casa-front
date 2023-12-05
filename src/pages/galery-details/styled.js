import styled from "styled-components";

export const GaleryStyled = styled.div`
  *{
    margin: 0;
    border: 0;
    padding: 0;
    box-sizing: border-box;
  }

  .container{
    
    .topo {
    /* padding: 2%; */
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .topo > .h2-modal-galery {
    font-size: 2.7rem;
    margin: 1% 0;
    color: #54636E;
  }
  .swiper {
    width: 70%;
    margin-left: auto;
    margin-right: auto;
  }

  .first-carousel .swiper-slide {
    height: 600px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .second-carousel {
       margin-top: 1%;
  }

  .second-carousel .swiper-slide {
    width: 90px;
    height: 90px;
    opacity: 0.7;
  }
  .second-carousel .swiper-slide-thumb-active {
    * {
      margin: 0;
      padding: 0;
    }
    opacity: 1;
    border: 5px solid #f5bc4a;
  }

  .first-carousel img{
    max-width: 99%;
    max-height: 99%;
    min-height: 500px;
    min-width: 500px;
    object-fit: cover;
   
  }
  .second-carousel img{
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }


  @media ((min-width: 320px) and (max-width: 767px)) {
    .container{
      .topo {
    padding: 2%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .topo > .h2-modal-galery {
    font-size: 1.7rem;
    color: #54636E;
  }
  .swiper {
    width: 100%;
    height: 30%;
    margin-left: auto;
    margin-right: auto;
  }
  .first-carousel .swiper-slide {
    height: 500px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .swiper-button-next,
    .swiper-button-prev {
      display: none;
    }

  .first-carousel img{
    max-width: 99%;
    max-height:500px;
    min-height: 300px;
    min-width: 300px;
  }

    }
  }
`
