import styled from 'styled-components'

const ParceireComponents = styled.section`


.parceires {
  background-color: yellow;
  height: 697px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

  h2 {
    display:flex;
    justify-content: center;
    font-size: 2.5rem;
    padding-top:20px;
    margin-bottom: 10px;
  }
  
  p {
    margin-bottom: 40px;
    display:flex;
    justify-content: center;
  }


  .img-perfil{
    width: 45%;
    height: 40%;
    border-radius: 80%;
    margin-bottom: 20px;
    margin-left: 28%;
  }

  h3 {
    text-align: center;
    margin-bottom: 20px;
    }

    p {
      padding: 20px;
      text-align: center;
    }

    
    .icones-rede-sociais{
      display:flex;
      justify-content: center;
      border-radius: none;
      
      a{
        display: flex;
        justify-content: center;
        height: 20px;
        width: 20px;
        margin-left: 10px;     
      }
    }     
      

    .styled-button{
    display: flex;
     justify-content: center;
     padding:30px;

      .button-parceire{
        background: #516B84;
        border-radius: 3px;
        border: none;
        font-size: 14px;
        width: 182px;
        height: 40px;
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
  
        a{
          text-decoration: none;
          color: white;
          display: flex;
        justify-content: center;
        }
      }
    }

    @media (max-width: 760px) {
      .swiper-button-next {
        right: 20px;
        transform: rotate(90deg);
      }
  
      .swiper-button-prev {
        left: 20px;
        transform: rotate(90deg);
      }
    }  

`
export default ParceireComponents
