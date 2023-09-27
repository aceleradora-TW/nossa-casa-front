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
    margin-top: -15%;
    padding-left: 70%;
  }

  .inscricao {
    margin-top: -4%;
    padding-left: 30px;
  }

  .spacingMoney,
  .spacingType {
    margin-left: 30px;
    margin-top: -14px;
  }

  .spacingDate,
  .spacingLocal {
    margin-left: 25px;
    margin-top: -20px;
  }

  .parce {
    margin-left: 16px;
    margin-top: -20px;
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
  }

  @media screen and (max-width: 720px) {
    .title {
      padding-top: -20%;
      font-size: 30px;
      padding-left: 30px;
      padding-bottom: 20px;
    }

    .data-inicio,
    .data-fim {
      font-weight: 500;
      padding-left: 15px;
      font-size: 17px;
      padding-bottom: 20px;
    }

    .local,
    .parceires {
      font-weight: 500;
      padding-left: 30px;
      font-size: 17px;
      padding-bottom: 50px;
      padding-top: 14px;
    }

    .description {
      font-weight: 900;
      padding-left: 30px;
      padding-top: 20px;
    }

    .descricaoCMS {
      padding-left: 30px;
    }

    .div-preco,
    .oficinaType {
      margin-top: -6%;
    }

    .inscricaoIcon {
      margin-top: -16.5%;
    }

    .inscricao {
      margin-top: -4%;
    }

    .spacingMoney,
    .spacingType {
      margin-left: 30px;
      margin-top: -14px;
    }

    .spacingDate,
    .spacingLocal {
      margin-left: 21px;
      margin-top: -16px;
    }

    .parce {
      margin-top: -16px;
    }

    .spacing-parceires {
      padding-left: 5px;
    }

    .day {
      padding-bottom: 20px;
      padding-left: 30px;
    }

    .button-inscricao {
      margin-top: 50px;
    }
  }
`
export default Detalhes
