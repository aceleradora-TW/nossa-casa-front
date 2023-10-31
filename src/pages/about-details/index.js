import { StyledAbout } from "./styled"
import NavBar from '../../components/navbar'

const PageAbout  = () => {
  return(
    <>
    <NavBar/>
    <StyledAbout>
    <h2 className="about-title">
      Sobre Nossa Casa
      </h2>
       <div className="content-container">
                <div className="topic">
                  <h3>Nossa história até aqui</h3>
                  <p>
                    Em 2018, a Nossa Casa nasce com o intuito de oferecer à
                    população acesso a serviços, produtos e atividades nas áreas, produtos e atividades nas áreas
                    de saúde mental, terapias integrativas, cultura e arte,
                    entendendo tais ações como promoção e garantia de direitos a
                    todes, com foco na acessibilidade à pessoas em situação de
                    vulnerabilidade.
                  </p>
                </div>
                <div className="topic">
                  <h3>Como somos conhecidos</h3>
                  <p>
                    A Nossa Casa passa então a ser reconhecida como um centro
                    cultural, de formação, fomentação e garantia de direitos a
                    todes, sobretudo à população negra, mulheres e LGBTQIAP+,
                    articulando e promovendo eventos, lançamentos musicais,
                    saraus, exposições áudio visuais, palestras, oficinas, etc.
                  </p>
                </div>
                <div className="topic">
                  <h3>Nosso início</h3>
                  <p>
                    No primeiro ano de funcionamento, a Nossa Casa atendeu
                    centenas de pessoas nos serviços de psicoterapia,
                    massoterapia, yoga, nutrição, psicopedagogia, arte terapia,
                    rodas de conversa, formações, entre outros, a valores
                    acessíveis ou ainda em parceria com entidades do terceiro
                    setor do município atendendo seus usuários.
                  </p>
                </div>
                <div className="topic">
                  <h3>Curiosidades</h3>
                  <p>
                    No ano de 2022 a Nossa Casa foi contratada pela Secretaria
                    de Igualdade Racial para organização da Festa Preta oficial
                    da cidade, em comemoração ao dia da Consciência Negra.
                  </p>
                </div>
                <div className="topic">
                  <h3>Profissionais</h3>
                  <p>
                    Os profissionais que compõem a Nossa Casa atuam também
                    de maneira autônoma, gerando renda para si e contribuindo
                    para a manutenção do coletivo.
                  </p>
                </div>
                <div className="topic">
                  <h3>Como funciona</h3>
                  <p>
                    Funcionando de maneira independente e colaborativa, o
                    coletivo, embora tenha estabelecido parcerias com algumas
                    entidades e outros atores de coletivos semelhantes na
                    cidade, não estabeleceu nenhuma forma de conveniamento ou
                    parceria contínua com qualquer órgão público nesse período.
                  </p>
                </div>
              </div>
              </StyledAbout>
              </>
  )
}

export default PageAbout