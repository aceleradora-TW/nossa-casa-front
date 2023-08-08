import styled from "styled-components";

const Workshops = styled.div`
  main {
    height: 300vh;

    .mySwiper{
  position: relative;
  z-index: 0;
}

    h1 {
        padding-left: 140px;
        padding-top: 3em;
        font-size: 2em;
    }

    .div-descricao {
      padding-top:   3em;
      padding-left: 140px;
      line-height: 1.5em;
      width: 90%;
      text-align: justify;
    }

    .nome-oficina{
      font-family: 'Inter', sans-serif;
      font-size: 20px;
      padding-top: 20px;
      padding-left: 140px;
      padding-bottom:20px;
    }

    .botao-ver-mais{
      padding-left: 140px;
    }

    button{
      text-align: center;
      color: black;
      display: flex;
      justify-content: center;
      background-color: #f5bc4a;
      width: 100px;
      height: 50px;
      font-size: 16px;
      border-radius: 3px;
      border-color: #f5bc4a;
      border: none;
      padding-top:15px;
    }

    .img-oficina {
      display: flex;
      justify-content: center;
      width: 45vh;
      height: 35vh;
      padding-left: 140px;
      padding-top: 60px;
      padding-bottom:30px;
    }
  }
`

export default Workshops;
