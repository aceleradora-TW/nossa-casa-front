import styled from 'styled-components'

const NavBarComponent = styled.nav`
  background-color: black;
  display: flex;
  align-items: center;
  color: white;
  flex-wrap: wrap;
  padding: 15px 10px;
  justify-content: space-between;

  div {
    display: flex;
    justify-content: center;
  }

  .redirecionamento {
    gap: 20px;
    flex-wrap: wrap;
    align-items: center;
    a{
      text-transform: capitalize;
    }
  }
  
  .ser-parceire{
    background-color: #F5BC4A;
    color: black;
    padding: 15px;
    border-radius: 5px;
  }

  a {
    color: #ffffff;
    text-decoration: none;
    text-align: center;
    font-family: 'Arial';
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
  
  .icon-menu {
    font-size: 30px;
    cursor: pointer;
  }

  .aparece{
    display: flex !important;
    flex-direction: column;
    
  }

  /* smartphones, portrait iPhone, portrait 480x320 phones (Android) */
  @media (min-width:320px)  { 
    .icon-menu {
      display: block;
    }

    .redirecionamento {
      display: none;
    }
  }
  /* smartphones, Android phones, landscape iPhone */
  @media (min-width:480px)  {
    
  }
  /* portrait tablets, portrait iPad, e-readers (Nook/Kindle), landscape 800x480 phones (Android) */
  @media (min-width:600px)  {
    .icon-menu {
      display: none;
    }

    .redirecionamento {
      display: flex;
    }
  }
  @media (min-width:801px)  { /* tablet, landscape iPad, lo-res laptops ands desktops */ }
  @media (min-width:1025px) { /* big landscape tablets, laptops, and desktops */ }
  @media (min-width:1281px) { /* hi-res laptops and desktops */ }
`

export default NavBarComponent
