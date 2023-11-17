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
  align-items: center;
  color: white;

  .ser-parceire {
    background-color: #f5bc4a;
    font-weight: bold;
    border-radius: 5px;
    &:hover {
      color: #e4e7eb;
    }
    &:active {
      background: linear-gradient(
        360deg,
        rgba(81, 107, 132, 1) 0%,
        rgba(187, 197, 207, 1) 50%,
        rgba(255, 255, 255, 1) 100%
      );
    }
  }

  a {
    color: #ffffff;
    text-decoration: none;
    text-align: center;
    font-weight: 400;
    font-size: 1.2rem;
    line-height: 14px;
    text-transform: uppercase;
    &:hover {
      color: #f5bc4a;
    }
  }
  a.active {
    color: #f5bc4a;
    font-weight: bold;
  }
  .container-logo {
    max-height: 100%;
    width: auto;
    height: 96%;
    display: flex;
  }

  .icon-menu {
    font-size: 30px;
    cursor: pointer;
  }

  .aparece {
    display: flex !important;
    flex-direction: column;
  }

  /* smartphones */
  @media (min-width: 320px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-areas:
      'logo . icon'
      'menu menu menu';

    .container-logo {
      grid-area: logo;
      justify-self: start;
    }

    .icon-menu {
      display: block;
      grid-area: icon;
      justify-self: end;
    }

    .redirecionamento {
      display: none;
      grid-area: menu;
      gap: 0;
      padding-top: 15px;
      a {
        width: 100%;
        text-align: left;
        padding: 15px;
        border-top: 1px solid darkgray;
      }

      .ser-parceire {
        text-align: center;
        border-top: none;
      }
    }
  }

  /* Desktop , PCs*/
  @media (min-width: 801px) {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    padding: 15px 60px;
    justify-content: space-between;
    z-index: 1000;

    .icon-menu {
      display: none;
    }

    .redirecionamento {
      display: flex;
      flex-direction: row;
    }

    .redirecionamento {
      flex-wrap: wrap;
      align-items: center;
      a {
        border: none;
        width: auto;
        text-transform: capitalize;
      }
    }

    .ser-parceire {
      color: black;
      padding: 15px;
    }

    img {
      height: 80px;
      left: 121px;
    }
    @media (min-width: 1023px) {
      .redirecionamento {
        gap: 40px;
      }
    }
  }
`

export default NavBarComponent
