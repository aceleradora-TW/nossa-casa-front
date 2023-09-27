import styled from 'styled-components'
const EventsStyleDescription = styled.div`
    * {
      margin: 0;
      padding: 0;
    }
    
  display: block;
  font-weight: bolder;

  .container{
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
`

export default EventsStyleDescription
