import styled from 'styled-components'

const CssCarrosselGlobal = styled.div`
  .carrossel {
    background-color: #fafafa;
    height: 300px;
    h1 {
      padding-left: 1.5em;
      padding-top: 4em;
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
    background-color: #fafafa;
    position: relative;
    z-index: 0;
  }
  .swiper-slide {
    display: flex;
    align-items: center;
    height: 70vh;
    padding-left: 5.7em;
    margin-right: 20px;
    .img {
      width: 45vh;
      height: 35vh;
    }
    h3 {
      padding-top: 5px;
      cursor: default;
    }
@media screen and (min-width: 1440px) and (min-height: 900px) {
  .swiper-slide {
        padding-left: 4.7em; 
    }
}
}
`
export default CssCarrosselGlobal
