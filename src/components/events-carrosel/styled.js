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
// modal
body {
  position: relative;
}

.container {
  background: rgba(1,1,1,0.5);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.modal {
  border-radius: 5px;
  background: white;
  padding: 15px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.modal .exit {
  border-radius: 5px;
  padding: 10px;
  color: white;
  background: red;
  font-weight: bold;
}
// ate aqui...
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
