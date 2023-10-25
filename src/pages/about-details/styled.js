import styled from 'styled-components'

export const StyledAbout = styled.div`
  max-width:auto;
  max-height:auto;
  z-index: 10;
  background-color: ${props => props.theme === 'about' ? '#FFFFFF' : '#fff'};


  .about-title {
    margin-top: 5%;
    color:#54636E;
    font-size: 2.25rem;
    text-align: left;
    margin-bottom: 90px;
    margin-left:0px;
  }
  body {
    overflow-x: hidden;
}

  .content-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr ;
    height: 70%;
    width: 90%;
    margin: auto;
    grid-row-gap: 30px;
    grid-column-gap: 50px;
  }
  .topic {
    height: 100%;
    width: 100%;
    margin: 0 0px;;

    h3 {
      color:#54636E;
      font-size: 1rem;
      margin-bottom: 10px;
    }

    p {
      color:#000;
      font-size:1rem;
      text-align:justify;
    }
  } 

//IOS
  @media (max-width: 720px) {
    .content-container {
      height: 90%; 
      grid-template-columns: 1fr;
      grid-template-rows: auto;
      grid-row-gap: 25px;
      grid-column-gap: 20px;
    }
    

    .about-title {
      align-items: center;

      width: 38%;
      font-size: 1.9rem;
      margin-bottom: 5%;
    }

    .topic {
    width: 48%;
    margin: 0 -30px;

      h3 {
        width: 70%; 
        font-size: 1.3rem;
        margin-bottom: 8px;
      }

      p {
        
        font-size: 1.5rem;
      }
    }
  }

@media screen and (min-width: 780px) and (max-width: 2920px)  {

.content-container   {
text-align:justify;
grid-template-columns: 1fr 1fr ;
grid-template-rows: auto;
grid-row-gap: 55px;
grid-column-gap: 20px;
margin: 0 150px;
padding: 10px;
overflow: hidden;
}

.about-title   {

display: block;
text-align: left;
width: 38%;
margin-left: 11.3rem;
font-size: 1.9rem;
margin-bottom:3%; 

}


.topic {
width: 70%; 
margin: 0 20px;

h3 { 

  font-size: 1.3rem;
  margin-bottom: 15px;
}

p {
  font-size: 1rem;
  line-height:1.5rem;
}
}   
  }

`
