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

  p {
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

  .profile {
    padding: 10px 0;
    width: 100%;
    max-width: 500px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .profile > div {
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

  .profile p {
    margin: 1px;
    padding: 2%;
    color: black;
    text-align: center;
    box-sizing: border-box;
  }

  .profile > .perfil-descricao {
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
    padding: 30px;

    .button-parceire {
      background: #516b84;
      border-radius: 3px;
      border: none;
      width: 182px;
      height: 56px;
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;

      a {
        font-weight: 900;
        color: #fafafa;
        text-decoration: none;
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