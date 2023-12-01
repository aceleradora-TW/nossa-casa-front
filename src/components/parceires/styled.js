import styled from 'styled-components'

const ParceireComponents = styled.section`
  h2 {
    color: black;
    display: flex;
    justify-content: center;
    font-size: 2.5rem;
    padding-top: 20px;
    margin-bottom: 10px;
  }

  .description-parceires {
    color: black;
    margin-bottom: 40px;
    display: flex;
    justify-content: center;
  }

  .swiper-slide {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .swiper-button-next,
  .swiper-button-prev {
    color: white;
  }

  .perfil {
    padding: 10px 0;
    width: 100%;
    max-width: 500px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .perfil > div {
    display: flex;
    justify-content: center;
  }

  .img-perfil {
    object-fit: cover;
    object-position: center;
    height: 150px;
    width: 150px;
    margin-bottom: 20px;
    border-radius: 50%;
  }

  h3 {
    color: black;
    text-align: center;
    margin-bottom: 3px;
  }

  .perfil p {
    margin: 1px;
    padding: 2%;
    color: black;
    text-align: center;
    box-sizing: border-box;
  }

  .perfil > .perfil-descricao {
    max-width: 100%;
    word-wrap: break-word;
  }

  .icones-rede-sociais {
    display: flex;
    justify-content: center;
    border-radius: none;
    margin-top: 5%;

    a {
      color: black;
      display: flex;
      justify-content: center;
      height: 20px;
      width: 20px;
      margin-left: 10px;
    }
  }

  .styled-button {
    display: flex;
    justify-content: center;
    padding: 25px 0 ;

      .button-parceire{
        background: #516B84;
        border-radius: 3px;
        border: none;
        font-size: 14px;
        width: 200px;
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
  @media (max-width: 1440px) {
    .description-parceires {
      padding-left: 10px;
    }
  }

  @media (max-width: 767px) {
    .swiper-button-next,
    .swiper-button-prev {
      display: block !important;
      color: white;
    }
  }
`
export default ParceireComponents
