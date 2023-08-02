import styled from "styled-components";

const Workshops = styled.div`
  main {
    height: 300vh;

    h1 {
      font-family: 'Inter', sans-serif;
      font-size: 20px;
      padding-left: 140px;
      padding-top: 70px;
    }

    p {
      font-family: 'Inter', sans-serif;
      width:90%;
      padding-left: 140px;
      padding-top: 40px;
      padding-bottom:30px;
    }

    .nome-oficina{
      font-family: 'Inter', sans-serif;
      font-size: 20px;
    }

    .botao-ver-mais{
      padding-left: 140px;
    }

    .verMais-input{
      text-align: center;
      text-color: black;
      display: flex;
      justify-content: center;
      background-color: #f5bc4a;
      width: 100px;
      height: 50px;
      font-size: 16px;
      border-radius: 3px;
      border-color: #f5bc4a;
      border: none;
    }

    .img-oficina {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-template-rows: 1fr;
      grid-column-gap: 5px;
      grid-row-gap: 0px;
      justify-content: center;
      width: 80%;
      height: 300px;
      padding-left: 140px;
      padding-top: 60px;
    }

    .search-box {
      height: 100px;
      display: flex;
      justify-content: center;
      align-items: center;

      .search-input {
        display: flex;
        justify-content: center;
        border-color: black;
        width: 780px;
        height: 40px;
        font-size: 16px;
        border-radius: 26px;
        padding-left: 20px;
      }
    }
  }
`;

export default Workshops;
