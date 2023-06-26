import styled from 'styled-components'

export const ModalContainer = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 1;
  overflow: auto;
  background-color: #E4E7EB;

  .topo {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 25px;
    padding-right: 20px;
  }

  .topo > .h2-modal-galery {
    margin: 0;
    margin-left: 25%;
    font-size: 2.25rem;
  }

  .exit {
    display: inline;
    width: 73px;
    margin-top: 5px;
    margin-bottom: 5px;
    cursor: pointer;
  }

  .swiper {
    width: 100%;
    height: 100%;
  }

  .swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;

    /* Center slide text vertically */
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .swiper {
    width: 100%;
    height: 300px;
    margin-left: auto;
    margin-right: auto;
  }

  .swiper-slide {
    background-size: cover;
    background-position: center;
  }

  .my-swiper-1 {
    height: 65%;
    width: 50%;
  }

  .my-swiper-2 {
    height: 13%;
    width: 50%;
    box-sizing: border-box;
    padding: 10px 0;
  }

  .my-swiper-2 .swiper-slide {
    width: 25%;
    height: 100%;
    opacity: 0.4;
  }

  .my-swiper-2 .swiper-slide-thumb-active {
    opacity: 1;
    border: 4px solid #F5BC4A;
  }

  .swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (min-width: 1290px) {

    .topo {
      margin-bottom: 30px;
    }

    .topo > .h2-modal-galery {
      margin-left: 17.5%;
    }
    .my-swiper-1 {
      height: 65%;
      width: 65%;
    }

    .my-swiper-2 {
      height: 10%;
      width: 65%;
      box-sizing: border-box;
      padding: 10px 0;
    }
  }
`
