import styled from 'styled-components'

export const CssCarrosselGlobal = styled.div`
*{
  margin: 0;
  padding: 0;
}
  .carrossel {
    background-color: #fafafa;

    h1 {
     
      margin:3em auto;
      margin-bottom: 1.75em;
      width: 83%;
      font-size: 2.5rem;
    }
    p {
      font-size: 1.3em;
      margin: 5% auto;
      width: 83%;
      text-align: justify;
      line-height: 1.3em;
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
