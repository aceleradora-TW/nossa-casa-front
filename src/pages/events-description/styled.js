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
  padding-top: 1em;
  .style-icon{
  margin-right: 1em;
 }
 p{
  margin-right: 1em;
 }
 }
 .title{
  font-size: 40px;
  margin-left: 2.7em;
  margin-bottom: 1em;
  p{
    font-size: 30px;
    padding-top: 5px;
  }
 }
 .text-title-description{
  font-size: 30px;
  font-weight: bold
 }
 .description{
  text-align: justify;
  padding-top: 9em;
  font-size: 20px;
  padding-left: 5em;
  width: 92%;
  p{
    padding-top: 1em;
  }
 }
`

export default EventsStyleDescription
