import styled from 'styled-components'
const Detalhes = styled.div`
  * {
    margin: 0;
    padding: 0;
  }

  .title {
    font-weight: 900;
    font-size: 40px;
    padding-left: 60px;
    padding-bottom: 40px;
  }

  .data-inicio,
  .data-fim {
    font-weight: 500;
    padding-left: 30px;
    font-size: 20px;
  }

  .local,
  .parceires {
    font-weight: 500;
    padding-left: 60px;
    font-size: 20px;
    padding-top: 40px;
    padding-bottom: 12px;
  }

  .description {
    font-weight: 900;
    font-size: 30px;
    padding-left: 60px;
    padding-top: 60px;
    padding-bottom: 20px;
  }

  .descricaoCMS {
    padding-left: 60px;
    font-size: 17px;
    text-align: justify;
    width: 85%;
    font-weight: bold;
  }

  .button-close,
  .button-container {
    padding-left: 90px;
  }

  .div-preco,
  .oficinaType {
    margin-top: -2%;
    padding-left: 70%;
  }

  .inscricaoIcon {
    margin-top: -12em;
    padding-left: 70%;
  }

  .inscricao {
    margin-top: -1em;
    padding-left: 30px;
  }

  .spacingMoney,
  .spacingType {
    margin-left: 30px;
    margin-top: -14px;
    font-weight: bold;
  }

  .spacingDate,
  .spacingLocal {
    margin-left: 25px;
    margin-top: -20px;
    font-weight: bold;
  }

  .parce {
    margin-left: 16px;
    margin-top: -20px;
    font-weight: bold;
  }

  .spacing-parceires {
    display: inline-block;
    padding-left: 8px;
  }

  .day {
    padding-bottom: 30px;
    padding-left: 60px;
    padding-top: 20px;
    font-weight: 400;
    font-size: 23px;
    font-weight: bold;
  }

  .button-inscricao {
    background: #f5bc4a;
    border-radius: 3px;
    border: none;
    font-size: 14px;
    width: 10%;
    height: 40px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 43%;
    margin-top: 200px;
    font-weight: bold;
    text-decoration: none;
    color: black;
  }
`
export default Detalhes
