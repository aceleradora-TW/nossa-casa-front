import Workshops from './styled'
import NavBar from '../../components/navbar/index'
import Parceires from '../../components/parceires'
import Footer from '../../components/footer'
import { Workshopscarrossel } from '../../components/carrossel-oficinas'

export const WorkshopsPage = () => {
  return (
    <Workshops>
      <NavBar />
      <main>
        <section className='carrossel'>
          <h1>Oficinas</h1>
          <p>era uma vez uma oficinaa era uma vez uma oficinaa era uma vez uma oficinaa era uma vez uma oficinaa era uma vez uma oficinaa</p>
          <div className='search-box'>
              <input type='text' placeholder='Buscar Eventos' className='search-input'></input>
            </div>
        </section>
        <Workshopscarrossel />
        <Parceires />
        <Footer />
        </main>
    </Workshops>
  )
}
