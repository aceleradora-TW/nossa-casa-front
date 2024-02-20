import { Link } from 'react-router-dom'
import styled from 'styled-components'

const AboutSection = styled.section`
  display: flex;
  justify-content: center;
  width: 100% !important;
  margin: 5rem 0;
`

const AboutContainer = styled.div`
    width: 100%;
    max-width: 1440px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 60px;
    gap: 35px;

    align-items: stretch;

`

const AboutDescription = styled.div`

  box-sizing: border-box;
  text-align: justify;
  height: 100%;
  width: 100%;
  max-width: 800px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  h2 {
    font-size: 26px;
    margin-bottom: 25px;
  }

  p {
    margin-bottom: 25px;
  }

  a {
    background: #f5bc4a;
    display: inline-block;
    box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.4);
    border-radius: 3px;
    color: #000000;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
    padding: 15px;
    text-decoration: none;

    &:visited, &:active {
      text-decoration: none;
    }
  }
`

const AboutImageContainer = styled.div`
  display: flex;
  width: 100%;
  max-width: 800px;
  border-radius: 3px;
  height: 100%;

  img {
    width: 100%;
    max-width: 100%;
  }
`

export const About = ({ image }) => {
  return (
    <AboutSection>
      <AboutContainer>
        <AboutDescription>
          <h2>SOBRE O NOSSA CASA</h2>
          <p>
            A Nossa Casa existe há 5 anos no Município de
            Guarulhos, a segunda maior cidade do Estado de
            São Paulo, com cerca de 1.379.182 habitantes,
            sendo destes 45% autodeclarados negros
            (soma de pretos e pardos), 51,3% mulheres e em
            sua maioria residentes de áreas periféricas da
            cidade e de alguma forma em situação de
            vulnerabilidade, seja financeira, social ou
            emocional. Guarulhos é gigante e tem muitas
            necessidades.
          </p>
          <div>
            <Link to="/sobre">Ver mais</Link>
          </div>

        </AboutDescription>
        <AboutImageContainer>
          <img src={image} alt="titulo da imagem" />
        </AboutImageContainer>
      </AboutContainer>
    </AboutSection>
  )
}