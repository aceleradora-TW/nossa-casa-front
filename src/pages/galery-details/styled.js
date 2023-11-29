import styled from "styled-components";

export const GaleryStyled = styled.div`
  *{
    margin: 0;
    border: 0;
    padding: 0;
    box-sizing: border-box;
  }
/* 
  .container {
    padding-top: 130px;
  }
  .topo {
    padding-bottom:81px ;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: -35px;
  }

  .topo > .h2-modal-galery {
    margin: 0;
    font-size: 2.25rem;
    color: #54636E;
  } */

  @media ((min-width: 320px) and (max-width: 767px)) {

    .container {
    padding-top: 2%;
  }
  .topo {
    padding-bottom: 7% ;
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
    height: 300px;
    margin-left: auto;
    margin-right: auto;
  }

  .swiper-slide {
    text-align: center;
    font-size: 18px;
    display: flex;
    justify-content: center;
    background-size: cover;
    background-position: center;
  }
  
  }
`
