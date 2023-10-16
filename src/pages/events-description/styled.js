import styled from 'styled-components'
const EventsStyleDescription = styled.div`
* {
  margin: 0;
  padding: 0;
}

.container {
  display: flex;
  align-items: center;
  justify-content: space-around;
}

h1{
  font-size: 1.2em;
}

.text,
.text2 {
  width: 35%;
}

li {
  display: flex;
  font-size: 20px;
  padding-top: 1.7em;
}

.style-icon {
  margin-right: 1em;
}

p {
  margin-right: 0.1em;
}

.title {
  font-size: 2.188em;
  margin-left: 3em;
  margin-bottom: 2.5rem;

  p {
  font-size: 1.875em;
  padding-top: 1.875em;
}
}



#no-registration {
  display: flex;
}

.text-title-description {
  font-size: 1.875em;
  font-weight: bold;
}

.description {
  text-align: justify;
  padding-top: 4em;
  font-size: 1.25em;
  line-height: 1.3em;
  padding-left: 5em;
  width: 92%;
}

.description p {
  padding-top: 1em;
}

.button-enrollment {
  background: #f5bc4a;
  border-radius: 0.188em;
  font-size: 1em;
  width: 20%;
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 43%;
  margin-top: 3.3em;
  text-decoration: none;
  color: black;
}

.container-carousel {
  background-color: #E4E7EB;
}

.swiper-slide {
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #E4E7EB;
}

.swiper-slide img {
  display: block;
  width: 30em;
  height: 30em;
  object-fit: cover;
}

.style-img-swiper {
  background-color: #E4E7EB;
  margin-left: 5%;
  margin-right: 5%;
  margin-top: 3rem;
  padding-top: 5rem;
}

.style-img-swiper img {
  width: 70rem;
  height: 40rem;
}

.style-swiper-fotos img {
  width: 9rem;
  height: 9rem;
}

.second-carousel {
  margin-left: 5rem;
  margin-right: 5rem;
  height: 20%;
  box-sizing: border-box;
  padding: 10px 0;
}

.first-carousel {
  padding-top: 5%;
}

.second-carousel .swiper-slide {
  width: 25%;
  height: 100%;
  opacity: 0.4;
}

.second-carousel .swiper-slide-thumb-active {
  *{
    margin: 0;
    padding: 0;
  }
  opacity: 3;
  border: 5px solid #f5bc4a;
}

.container-button-exit{
  margin-right: 2%;
  display: flex;
  justify-content: right;
}
  
.close-button{
  font-size: 1em;
}
`

export default EventsStyleDescription
