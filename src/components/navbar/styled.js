import styled from 'styled-components'

const NavBarComponent = styled.nav`
  background-color: black;
  height: 4em;
  display: flex;
  align-items: center;
  padding: 0 5%;

  div {
    width: 100%;
    display: flex;
    justify-content: center;
  }
  
  a {
    color: #ffffff;
    text-decoration: none;
    text-align: center;
    padding: 20px;
    font-family: 'Ubuntu';
    font-weight: 400;
    font-size: 16px;
    line-height: 14px;
    text-transform: uppercase;

    &:hover {
      color: #F5BC4A;
    }
  }

  button {
    background: linear-gradient(180deg, rgba(81, 107, 132, 1) 0%, rgba(187, 197, 207, 1) 50%, rgba(255, 255, 255, 1) 100%);
    width: 146px;
    height: 40px;
    border-radius: 3px;

    &:active {
      background: linear-gradient(360deg, rgba(81, 107, 132, 1) 0%, rgba(187, 197, 207, 1) 50%, rgba(255, 255, 255, 1) 100%);
    }
  }

  .container-logo {
    max-height: 100%;
    width: auto;
    height: 96%;
    display: flex;
  }

  img {
    height: 63px;
    width: 65px;
    left: 121px;
    border-radius: 250px;

  }

  @media screen and (max-width: 768px) {
    /* Estilos para telas menores que 768px */
    padding: 0 2%;

    div {
      padding: 0;
    }

    button {
      width: 120px;
    }
  }

  @media screen and (max-width: 480px) {
    /* Estilos para telas menores que 480px */
    padding: 0 1%;

    div {
      padding: 0;
    }

    button {
      width: 100px;
    }
  }
`

export default NavBarComponent
