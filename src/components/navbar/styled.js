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
    gap: 40px;
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

  .icon-menu {
    font-size: 30px;
    cursor: pointer;
  }

  .aparece{
    display: flex !important;
    flex-direction: column;
    
  }

  /* smartphones */
  @media (min-width:320px)  { 
    display:grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-areas: 
    "logo . icon" 
    "menu menu menu";
    
    .container-logo{
      grid-area: logo;
      justify-self:start;
    }


    .icon-menu {
      display: block;
      grid-area: icon;
      justify-self:end;

    }

    .redirecionamento {
      display: none;
      grid-area: menu;
      gap:0;
      padding-top:15px;
      a {
        width:100%;
        text-align:left;
        padding:10px 0;
        border-top:1px solid darkgray;
      }

      .ser-parceire{
        text-align:center;
        border-top:none;
      }
    }

    .aparece{
      
    }
  }

  /* Desktop , PCs*/
  @media (min-width:600px)  {
    background-color: black;
    display: flex;
    align-items: center;
    color: white;
    flex-wrap: wrap;
    padding: 15px 60px;
    justify-content: space-between;

    .icon-menu {
      display: none;
    }

    .redirecionamento {
      display: flex;
      flex-direction:row;
    }

    .redirecionamento {
    gap: 20px;
    flex-wrap: wrap;
    align-items: center;
    a{
      border:none;
      width:auto;
      text-transform: capitalize;
    }
  }
  
  .ser-parceire{
    background-color: #F5BC4A;
    color: black;
    padding: 15px;
    border-radius: 5px;
  }

  
  img {
    height: 80px;
    left: 121px;
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
      color: #F5BC4A;
    }
  }
  }

`

export default NavBarComponent
