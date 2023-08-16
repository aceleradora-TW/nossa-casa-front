import styled from 'styled-components'

const  CssCarrosselGlobal = styled.div`
*{
  margin: 0;
  padding: 0;
}
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
    justify-content: center;
    align-items: center;
    height: 70vh;
    .img {
      width: 45vh;
      height: 35vh;
    }
    h3 {
      padding-top: 5px;
      cursor: default;
    }
@media (min-width: 600px) {
  .img {
      width: 37vh;
      height: 35vh;
    }
}
}
`
export default CssCarrosselGlobal
