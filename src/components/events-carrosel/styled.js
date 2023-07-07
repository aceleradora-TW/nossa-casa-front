import styled from 'styled-components'

const EventsComponent = styled.div`
  width: auto;
  height: 100vh;
  display: flex;
  align-items: center;
  padding: 12rem;

  /* .date, .title{
    color: #516B84;
  } */
div {
  color: #516B84;
}

div > img {
  display: flex;
  width: 30rem;
  font-size: 12rem;
  margin-bottom: 0.87rem;
}
p {
  color: #54636E;
  margin-bottom:0.475rem;
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
