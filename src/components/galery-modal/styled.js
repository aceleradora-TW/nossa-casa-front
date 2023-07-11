import styled from 'styled-components'

export const ModalContainer = styled.div`
  width: 100%;
  height: 100%;
  max-width:auto;
  max-height:auto;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 1;
 
  background-color: ${props => props.theme === 'about' ? '#FFFFFF' : '#A49D9D'};
                                                          
   .exit {
    display: block;
    width: 73px;
    margin-left: 90%;
    margin-top: 5px;
    margin-bottom: 5px;
    cursor: pointer;
  }

  .about-title {
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

    .exit {
      margin-left: 40%;
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
 width: 100%; 
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

.exit {
  
margin-left: 95%;
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
//modal galerias
.topo {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 25px;
    padding-right: 20px;
  }

  .topo > .h2-modal-galery {
    margin: 0;
    margin-left: 25%;
    font-size: 2.25rem;
  }

  .exit {
    display: inline;
  }
.swiper {
    width: 100%;
    height: 300px;
    margin-left: auto;
    margin-right: auto;
  }

  .swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #A49D9D;
    display: flex;
    justify-content: center;
    align-items: center;
    background-size: cover;
    background-position: center;
  }

  .swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .swiper-slide-view {
    height: 65%;
    width: 50%;
  }

  .swiper-thumbnails {
    height: 13%;
    width: 50%;
    box-sizing: border-box;
    padding: 10px 0;
  }

  .swiper-thumbnails .swiper-slide {
    width: 25%;
    height: 100%;
    opacity: 0.4;
  }

  .swiper-thumbnails .swiper-slide-thumb-active {
    opacity: 1;
    border: 4px solid #F5BC4A;
  }

  @media (max-width: 1280px) {

    .topo {
      margin-bottom: 30px;
    }

    .topo > .h2-modal-galery {
      margin-left: 20%;
    }
    .swiper-slide-view {
      height: 65%;
      width: 60%;
    }

    .swiper-thumbnails {
      height: 12%;
      width: 60%;
      box-sizing: border-box;
      padding: 10px 0;
    }
  }

  @media (min-width: 1281px) {

    .topo > .h2-modal-galery {
      margin-left: 20%;
    }
    .swiper {
      margin-top: 25px;
    }
    .swiper-slide-view {
      height: 65%;
      width: 60%;
    }

    .swiper-thumbnails {
      height: 12%;
      width: 60%;
      box-sizing: border-box;
      padding: 10px 0;
    }
  }
`
