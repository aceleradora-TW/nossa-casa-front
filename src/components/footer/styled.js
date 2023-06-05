import styled from 'styled-components'

const FooterComponent = styled.nav`

footer {
  background-color: #000;
  height: 155px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  color: #fff;

  .logo{
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }

  div {
    width: 155px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
}
`
export default FooterComponent
