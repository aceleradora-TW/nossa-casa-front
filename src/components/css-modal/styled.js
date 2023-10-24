import styled from 'styled-components'

const CssModalGlobal = styled.div`
  width: 100%;
  height: 100%;
  max-width: auto;
  max-height: auto;
  left: 0;
  top: 0;

  .button-styled {
    background-color: #f5bc4a;
    width: 146px;
    height: 40px;
    border: none;
    margin-top: 1rem;
    cursor: pointer;
  }

  .button-modal{
    right: 100%;
  }

  .title {
    background-color: pink;
    font-size: 10%;
}
`
export default CssModalGlobal
