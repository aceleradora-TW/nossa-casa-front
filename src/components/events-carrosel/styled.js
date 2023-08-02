import styled from 'styled-components'

const EventsComponent = styled.div`
.swiper-slide{
  display: flex;
  align-items: center;
  height: 70vh;
  padding-left: 3em;
  margin-right: 20px;
  .img-foto{
    width: 45vh;
    height: 35vh;
  }
  h3{
    padding-top: 5px;
  }

}

.button{
  background-color: #F5BC4A;
  width: 146px;
  height: 40px;
  border: none;
  margin-top: 1rem;
  cursor: pointer;
}

.swiper-button-next {
    position: absolute;
    top: 50%;
    width: calc(var(--swiper-navigation-size)/4*47);
    height: var(--swiper-navigation-size);
    margin-top: calc(0px - var(--swiper-navigation-size)/3);
    z-index: 10;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: -15rem;
    color: var(--swiper-navigation-color,var(--swiper-theme-color));
}

.swiper-button-prev{
    position: absolute;
    top: 50%;
    width: calc(var(--swiper-navigation-size)/89*47);
    height: var(--swiper-navigation-size);
    margin-top: calc(0px - var(--swiper-navigation-size)/3);
    z-index: 10;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: -15rem;
    color: var(--swiper-navigation-color,var(--swiper-theme-color));
}

`

export default EventsComponent
