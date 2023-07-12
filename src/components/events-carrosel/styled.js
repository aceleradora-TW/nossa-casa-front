import styled from 'styled-components'

const EventsComponent = styled.div`

div.swiper-slide.swiper-slide-next{

}




.swiper-slide {
  display: flex;
  padding-right: 15%;
  max-width: 120%;
  justify-content:space-around;
  

}

.evento {
  
  /* border:solid black 1px ; */
  width: 11rem;
  justify-content: space-evenly;
 
}



  width: auto;
  height: 100vh;
  display: flex;
  align-items: center;
  

div {
  color: #516B84;
}
  

div > img {

 
  /* border: 1px solid black; */
  width: 30rem;
  font-size: 12rem;

  margin-bottom: 0.87rem;
   
}

p {
  color: #54636E;
  margin-bottom:0.975rem;
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
