import Therapies from './styled'
// import foto from './fot.png'
import NavBar from '../../components/navbar/index'
import Parceires from '../../components/parceires'
import Footer from '../../components/footer'
import TherapyCarousel from '../../components/therapy-carousel'

export const TherapiesPage = () => {
  return (
    <Therapies>
      <NavBar />
      <main>
        <section className='terapias-carrossel'>
        <h1>Terapias</h1>
          <p className='resumo-terapias'>Ao analisarmos a história, percebemos que os lugares destinados ao autocuidado, bem-estar e saúde preventiva sempre estiveram relacionados às pessoas com alto poder aquisitivo. Infelizmente, apenas uma parcela da população, até hoje, tem acesso a esses espaços.
          Para a população negra, LGBTs, mulheres e moradores de periferias, restava e continua restando apenas o lugar de sobrevivência: o trabalho, a rotina maçante e a exclusão.
          É nesse sentido que a Nossa Casa organiza a Clínica Social, visando transgredir essa lógica e tornar acessível e democrático serviços como psicoterapia, massoterapia, yoga, reiki, entre outros.
          A Clínica conta com profissionais que oferecem seus serviços a preços acessíveis, incentivando e proporcionando saúde e bem-estar para todes.
          Entendemos que é preciso repolitizar, ampliar as perspectivas e romper com sistemas que excluem, marginalizam e continuam oprimindo grande parte da população.
          Construímos, assim, um espaço seguro, acessível, de troca e construção individual e coletiva, nos fortalecendo em conjunto em nossos processos.
          A Clínica Social da Nossa Casa, através dos serviços oferecidos, busca contemplar a todes em suas esferas psíquicas e sociais, buscando promover qualidade de vida, bem-estar, autonomia e dignidade.
          O coletivo de terapeutas da Nossa Casa é composto por psicólogos, terapeutas, pedagogos, psicopedagogos, massoterapeutas, entre outros. Você pode conhecer um pouco mais sobre nós aqui e entrar em contato conosco.
          </p>
        <TherapyCarousel/>
        </section>
      <section className='post'>
        <h1>Terapias</h1>
      </section>
        <Parceires />
        <Footer />
        </main>
    </Therapies>
  )
}
