import Home from './styled'
import image from './Background.png'
import foto from '../../components/parceires/fot.png'
import NavBar from '../../components/navbar'
import Footer from '../../components/footer'
import ModalGallery from '../../components/galery-modal'
import Parceires from '../../components/parceires/index.js'
import fotoNossaCasa from './nossacasa.png'

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
              <p className='Textparagraph'>
                A Nossa Casa existe há 5 anos no Município de Guarulhos, a segunda maior cidade do Estado de São Paulo, com cerca de 1.379.182 habitantes, sendo destes 45% autodeclarados negros (soma de pretos e pardos), 51,3% mulheres e em sua maioria residentes de áreas periféricas da cidade e de alguma forma em situação de vulnerabilidade, seja financeira, social ou emocional. Guarulhos é gigante e tem muitas necessidades.
              </p>
              <ModalGallery type={'about'} />
            </div>
            <div className='foto'>
            <img src={fotoNossaCasa}/>
            </div>
            <img src={image} />
          </div>
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
        <Parceires />
        <Footer />
      </main>
    </Home >
  )
}
