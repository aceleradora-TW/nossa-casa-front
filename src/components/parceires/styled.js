import styled from 'styled-components'

const ParceireComponents = styled.section`
  .parceires {
    height: 697px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  h2 {
    color: black;
    display: flex;
    justify-content: center;
    font-size: 2.5rem;
    padding-top: 20px;
    margin-bottom: 10px;
  }

  .titulo {
    color: black;
    margin-bottom: 40px;
    display: flex;
    justify-content: center;
  }

  div .img-perfil {
    width: 40%;
    height: 150px;
    margin-bottom: 10px;
    border-radius: 50%;
    margin-left: 30%;
  }

  h3 {
    color: black;
    text-align: center;
    margin-bottom: 3px;
  }

  p {
    color: black;
    text-align: center;
  }

  .icones-rede-sociais {
    display: flex;
    justify-content: center;
    border-radius: none;

    a {
      color: black;
      display: flex;
      justify-content: center;
      height: 20px;
      width: 20px;
      margin-left: 10px;
    }
  }
  .cointainer-description {
    width: 19rem;
    height: 17rem;
    padding: 20px;

    p{
    width: 100%;
    text-align: center;
    height: 100%;
    overflow: auto;
    box-sizing: border-box;
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
      font-size: 14px;
      width: 182px;
      height: 40px;
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;

      a {
        color: black;
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
