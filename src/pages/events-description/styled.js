import styled from 'styled-components'
const EventsStyleDescription = styled.div`
    * {
      margin: 0;
      padding: 0;
    }
    
  display: block;

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
    line-height: 1em;
    padding-left: 5em;
    width: 92%;
    p{
      padding-top: 1em;
    }
  }
`

export default EventsStyleDescription
