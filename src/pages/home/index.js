import Home from './styled'
import image from './Background.png'
import foto from './fot.png'
import social from './Black.png'
import NavBar from '../../components/navbar'
import { useEffect, useState } from 'react'
import { cms } from '../../service/client'

export const HomePage = () => {
  const [images, setImages] = useState([])
  useEffect(() => {
    cms.get('api/eventos').then(async (response) => {
      const { data } = response.data
      setImages(data.map((data) => data.attributes))
    })
  }, [])
  console.log(image)
  return (
    <Home>
      <NavBar />
      <main>
        <section className='carrossel'>
          <h1>EVENTOS</h1>
          <tbody>
          {images.map((attributes, index) =>
          <tr key={index} >
            <td>
              <p>{attributes.titulo}</p>
              <p>{attributes.descricao}</p>
              <img src={attributes.imagem_url}/>
              </td>
          </tr>
          )
          }
          </tbody>
        </section>
        <section className='about'>
          <div className='content'>
            <div>
              <h2>SOBRE O NOSSA CASA</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis est eget mi condimentum, in dictum massa molestie. Vivamus mattis, mauris ac fringilla congue, massa nisi ultrices arcu, sit amet vestibulum turpis ipsum id enim. In sit amet nisi a tortor maximus egestas. Donec bibendum maximus leo. Aliquam volutpat ullamcorper mauris, sed vehicula leo vehicula ac. Aliquam erat volutpat. Quisque pulvinar diam ac velit imperdiet scelerisque in a eros.
              </p>
            </div>
            <img src={image}/>
          </div>
          <button>SAIBA MAIS</button>
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
          <button>Ver mais</button>
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
        <footer>
          <h3>Nossa Casa</h3>
          <div>
            <img src={social}/>
            <img src={social}/>
            <img src={social}/>
            <img src={social}/>
            <img src={social}/>
          </div>
          <p>©2018 - Form  |   All right reserved</p>
        </footer>
      </main>
    </Home>
  )
}
