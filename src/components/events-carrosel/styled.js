import styled from 'styled-components'

const EventsComponent = styled.div`
.mySwiper{
  position: relative;
  z-index: 0;
}
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

`

export default EventsComponent
