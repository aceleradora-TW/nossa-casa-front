import styled from 'styled-components'

const NavBarComponent = styled.nav.attrs((props) => ({
  className: props.className || ''
}))`
  top: 0;
  position: fixed;
  z-index: 5;
  overflow: hidden;
  background-color: black;
  width: 100%;
  height: 100px;
  padding: 0 30px;
  align-items: center;
  color: white;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;

  .container-logo{
    img{
      width: 10vw;
      max-width: 100px;
    }
  }

  .redirecionamento-false {
    display: flex;
    width: 60vw;
    height: 50px;
    align-items: center;
    justify-content: space-around;
  
  .be-partner {
    background-color: #f5bc4a;
    height: 4vw;
    max-height: 50px;
    width: 9rem;
    display: grid;
    place-items: center;
    font-weight: bold;
    border-radius: 5px;
    color: black;
    &:active {
      background: linear-gradient(
        360deg,
        rgba(81, 107, 132, 1) 0%,
        rgba(187, 197, 207, 1) 50%,
        rgba(255, 255, 255, 1) 100%
      );
    }
  }
}

  a {
    color: #ffffff;
    text-decoration: none;
    text-align: center;
    font-size: 1rem;
    line-height: 14px;
  }

  a.active {
    color: #f5bc4a;
    font-weight: bold;
  }

  .icon-menu {
    font-size: 30px;
    cursor: pointer;
    display: none;
  }

  .aparece {
    display: flex !important;
    flex-direction: column;
  }

  @media ((min-width: 320px) and (max-width: 767px)) {
      display: flex;
      align-items: center;
      justify-content: space-between;

    .container-logo {
      img {
      min-width: 80px;
      }
    }

    .icon-menu {
      display: block;
      grid-area: icon;
      justify-self: end;
    }

    .redirecionamento-true {
      display: grid;
      grid-area: menu;
      gap: 0;
      padding-top: 15px;
      background-color: black;
      width: 100vw;
      z-index: 5;
      position: fixed;
      top: 100px;
      left: 0;
      a {
        width: 100%;
        text-align: left;
        padding: 15px;
        border-top: 1px solid darkgray;
      }
    }

    .redirecionamento-false {
      display: none !important;
    }

    .ser-parceire {
      text-align: center !important;
      font-weight: bold;
      border-radius: 5px;
      background-color: #f5bc4a;
      color: black;
      padding: 15px;
    .redirecionamento {
      flex-wrap: wrap;
      align-items: center;
      a {
        border: none;
        width: auto;
      }
    }
  }
  }
`
export default NavBarComponent
