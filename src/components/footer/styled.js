import styled from 'styled-components'

const FooterComponent = styled.nav`

footer {
  background-color: #000;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  color: #fff;

  .logo{
    height: 90px;
    margin-bottom: 20px;
  }

  div {
    color: white;
    width: 180px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
}
`
export default FooterComponent
