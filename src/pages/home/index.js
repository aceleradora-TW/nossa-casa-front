import Home from './styled'
import foto from './fot.png'
import fotoNossaCasa from './nossacasa.png'
import NavBar from '../../components/navbar'
import Footer from '../../components/footer'
import ModalGallery from '../../components/galery-modal'

export const HomePage = () => {
  return (
    <Home>
      <NavBar />
      <main>
        <section className='carrossel'>
          <h1>EVENTOS</h1>
        </section>
        <section className='about'>
          <div className='content'>
            <div className='text'>
              <h2>SOBRE O NOSSA CASA</h2>
              <p>
                A Nossa Casa existe há 5 anos no Município de Guarulhos, a segunda maior cidade do Estado de São Paulo, com cerca de 1.379.182 habitantes, sendo destes 45% autodeclarados negros (soma de pretos e pardos), 51,3% mulheres e em sua maioria residentes de áreas periféricas da cidade e de alguma forma em situação de vulnerabilidade, seja financeira, social ou emocional. Guarulhos é gigante e tem muitas necessidades.
              </p>
            </div>
            <img className='foto-nossa-casa' src={fotoNossaCasa}/>
          </div>
          <ModalGallery type={'about'} />
        </section>
        <section className='galeria'>
          <h2>Galeria de fotos</h2>
          <div className='painel'>
            <img src={foto} />
            <img src={foto} />
            <img src={foto} />
            <img src={foto} />
            <img src={foto} />
            <img src={foto} />
          </div>
          <ModalGallery type={'gallery'} />
        </section>
        <section className='parceires'>
          <h2>Parceires</h2>
          <p>
            A Nossa Casa é uma Associação sem fins lucrativos, composta por profissionais, artistas e ativistas do Município de Guarulhos.
          </p>
          <div className='carrossel-perfis'>
            <div className='perfil'>
              <img />
              <h3>Fulano</h3>
              <p>CEO</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.
              </p>
            </div>
            <div className='perfil'>
              <img />
              <h3>Fulano</h3>
              <p>CEO</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.
              </p>
            </div>
            <div className='perfil'>
              <img />
              <h3>Fulano</h3>
              <p>CEO</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.
              </p>
            </div>
          </div>
        </section>
        <Footer/>
      </main>
    </Home>

  )
}
