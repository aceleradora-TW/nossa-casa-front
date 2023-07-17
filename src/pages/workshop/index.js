import Workshops from './styled'
import foto from './fot.png'
import NavBar from '../../components/navbar/index'
import Parceires from '../../components/parceires'
import Footer from '../../components/footer'

export const WorkshopsPage = () => {
  return (
    <Workshops>
      <NavBar />
      <main>
        <section className='carrossel'>
          <h1>OFICINAS</h1>
        </section>

        <section className='search'>
          <div className='search-box'>
            <div>
              <input type='text' placeholder='Busca' className='search-input'></input>
            </div>
          </div>
        </section>

      <section className='oficinas'>
        <h1>Oficinas</h1>
        <div >
          <ul className='painel'>
             <li >
                <img src={foto} />
                <p>Impact Of Extrinsic Motivation On Intrinsic Motivation</p>
                <button>ver mais</button>
             </li>

             <li>
                <img src={foto} />
                <p>Impact Of Extrinsic Motivation On Intrinsic Motivation</p>
                <button>ver mais</button>
             </li>

             <li>
                <img src={foto} />
                <p>Impact Of Extrinsic Motivation On Intrinsic Motivation</p>
                <button>ver mais</button>
             </li>
         </ul>
        </div>
      </section>
        <Parceires />
        <Footer />
        </main>
    </Workshops>
  )
}
