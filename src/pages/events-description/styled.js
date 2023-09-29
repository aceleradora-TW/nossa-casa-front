import styled from 'styled-components'
const EventsStyleDescription = styled.div`
    * {
      margin: 0;
      padding: 0;
    }
  display: block;
  font-weight: bolder;

  .container{
    display: block;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
  .text, .text2{
    width: 35%;
  }
  li{
    display: flex;
    font-size: 20px;
    padding-top: 1.7em;
    .style-icon{
    margin-right: 1em;
  }
  p{
    margin-right: 1em;
  }
  }
  .title{
    font-size: 2.188em;
    margin-left: 3em;
    margin-bottom: 2.5rem;
    p{
      font-size: 1.875em;
      padding-top: 1.875em;
    }
  }
  .text-title-description{
    font-size: 1.875em;
    font-weight: bold
  }
  .description{
    text-align: justify;
    padding-top: 4em;
    font-size: 1.25em;
    line-height: 1.3em;
    padding-left: 5em;
    width: 92%;
    p{
      padding-top: 1em;
    }
  }
  .button-enrollment {
    background: #f5bc4a;
    border-radius: 0.188em;
    font-size: 0.880em;
    width: 10%;
    height: 2.5em;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 43%;
    margin-top: 3.3em;
    text-decoration: none;
    color: black;
  }

  // Carrossel Eventos
  .swiper {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: left;
}

.swiper-slide {
  text-align: center;
  background: #fff;

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
  height: 30em;
  margin-left: 20%;
  margin-right: 20%;
}

.swiper-slide {
  background-size: cover;
  background-position: center;
}

.mySwiper2 {
  height: 80%;
  width: 100%;
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
  opacity: 3;
}

.swiper-slide img {
  display: block;
  width: 30em;
  height: 30em;
  object-fit: cover;
}
`

export default EventsStyleDescription
