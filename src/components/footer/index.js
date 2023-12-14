import FooterComponent from './styled'
import Instagram from './instagram.png'
import Whatsapp from './whatsapp.png'
import Facebook from './facebook.png'
import NossaCasa from './nossa_casa_logo_nova.png'
import Spotify from './spotify.png'
import Linktree from './linktree.png'
const Footer = () => {
  return (
    <FooterComponent>
    <footer>
      <img className='logo' src={NossaCasa}/>
      <div>
      <a href={'https://chat.whatsapp.com/BndMXO2VZY7CS04IiJ9An2'}><img src={Whatsapp}/></a>
      <a href={'https://open.spotify.com/playlist/0ww2odZFyDmLVaz7Cfho4x?si=0578cc6f81c142c6'}><img src={Spotify}/></a>
      <a href={'https://www.facebook.com/nossacasaarteseterapias'}><img src={Facebook}/></a>
      <a href={'https://www.instagram.com/nossacasa_at/'}><img src={Instagram}/></a>
      <a href={'https://linktr.ee/nossacasaartes'}><img src={Linktree}/></a>

      </div>
      <p>©2023 - Nossa Casa | Todos os direitos reservados</p>
    </footer>
    </FooterComponent>
  )
}

export default Footer
