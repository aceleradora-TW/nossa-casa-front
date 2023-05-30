import styled from 'styled-components'

export const ModalContainer = styled.div`
  width: 100%;
  height: 1080px;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 1;
  overflow: auto;
  background-color: #516B84;

  .exit {
    display: block;
    width: 80px;
    margin-left: 90%;
    margin-top: 5px;
    margin-bottom: 5px;
    cursor: pointer;
  }
`
