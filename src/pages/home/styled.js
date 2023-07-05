import styled from 'styled-components'

const Home = styled.div`

  background-color: white;
  width: 100%;
  height: 100vh;

  main {

    height: 100vh;

    .carrossel {
      height: 652px;
      background-color: #e9eef1;

      h1 {
        padding-left: 140px;
        padding-top: 60px;
        font-size: 2em;
      }
    }


      .content {

        display: grid;
        grid-template-columns: 1fr 1fr;
        align-items: center;

      }
     

      button {

        background: #F5BC4A;
        box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.4);
        border-radius: 3px;
        color: #000000;
        border: none;
        font-size: 1rem;
        width: 163px;
        height: 56px;
        font-weight: 600;
        cursor: pointer;
        padding: 10px;
        margin-top: 1.6rem;
        margin-bottom: 1.6rem;
      }
 
      
    }

    .galeria {
      height: 1036px;
      background-color: #516b84;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      align-items: center;

      h2 {
        text-align: center;
        font-size: 3.125rem;
        color: #516B84;
      }

      .painel {
        height: 55%;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: repeat(3, 1fr);
        grid-column-gap: 10px;
        grid-row-gap: 10px;
      }

      button {
        background: linear-gradient(180deg, #516b848f 0%, #ffffff 100%);
        box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.4);
        border-radius: 3px;
        color: #000000;
        border: none;
        font-size: 0.75rem;
        width: 182px;
        height: 40px;
        cursor: pointer;
       
      }
    }

    .parceires {
      background-color: aliceblue;
      height: 697px;
      display: flex;
      flex-direction: column;
      align-items: center;

      h2 {
        font-size: 2.5rem;
        margin-top: 30px;
        margin-bottom: 10px;
      }

      p {
        margin-bottom: 40px;
      }

      .carrossel-perfis {
        height: 60%;
        display: flex;
        justify-content: center;
        gap: 20px;

        .perfil {
          background-color: cadetblue;
          width: 30%;

          h3 {
            text-align: center;
          }

          p {
            text-align: center;
          }
        }
      }
    }
    .about {
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  box-sizing: border-box;
  align-items: center;
  height: 627px;
}

main .about {
  height: auto;
  padding: 10px;
}

main .about .content {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  flex-direction: row;
  margin-top: 5rem;
  margin-bottom: 4rem;
}

.content .text {
  box-sizing: border-box;
  text-align: justify;
  width: 40%;
  margin-bottom: auto;
}

.foto img {
  width: 110%;
  max-width: auto;
  margin-left: 3%;
  border-radius: 3px;
  margin-bottom: 4.6rem;
}

@media screen and (min-width: 720px) and (max-width:2920px) {
  .content > div {
    width: auto;
    max-width: auto;
  }

  .content h2 {
    font-size: 2.25rem;
    margin-bottom: 30px;
  }

  .content .Textparagraph {
    font-size: 1.4rem;
    font-weight: 500;
    line-height: 35px;
  }

  .content .text h2 {
    font-size: 2rem;
    color: #516B84;
  }

  .content .text .Textparagraph {
    font-size: 25px;
    color: #54636F;
  }
}

  

`

export default Home
