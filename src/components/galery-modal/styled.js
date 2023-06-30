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
    height: 300px;
    margin-left: auto;
    margin-right: auto;
  }

  .swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    background-size: cover;
    background-position: center;
  }

  .swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .swiper-slide-view {
    height: 65%;
    width: 50%;
  }

  .swiper-thumbnails {
    height: 13%;
    width: 50%;
    box-sizing: border-box;
    padding: 10px 0;
  }

  .swiper-thumbnails .swiper-slide {
    width: 25%;
    height: 100%;
    opacity: 0.4;
  }

  .swiper-thumbnails .swiper-slide-thumb-active {
    opacity: 1;
    border: 4px solid #F5BC4A;
  }

  @media (max-width: 1280px) {

    .topo {
      margin-bottom: 30px;
    }

    .topo > .h2-modal-galery {
      margin-left: 20%;
    }
    .swiper-slide-view {
      height: 65%;
      width: 60%;
    }

    .swiper-thumbnails {
      height: 12%;
      width: 60%;
      box-sizing: border-box;
      padding: 10px 0;
    }
  }

  @media (min-width: 1281px) {

    .topo > .h2-modal-galery {
      margin-left: 20%;
    }
    .swiper {
      margin-top: 25px;
    }
    .swiper-slide-view {
      height: 65%;
      width: 60%;
    }

    .swiper-thumbnails {
      height: 12%;
      width: 60%;
      box-sizing: border-box;
      padding: 10px 0;
    }
  }
`
