import FooterComponent from './styled'
import Instagram from './instagram.png'
import Whatsapp from './whatsapp.png'
import Facebook from './facebook.png'
import NossaCasa from './nossa_casa_logo_nova.png'
import Spotify from './spotify.png'

const Footer = () => {
  return (
    <FooterComponent>
    <footer>
      <img className='logo' src={NossaCasa}/>
      <div>
      <a href={'https://chat.whatsapp.com/BndMXO2VZY7CS04IiJ9An2'}><img src={Whatsapp}/></a>
      <img src={Spotify}/>
      <img src={Facebook}/>
      <a href={'https://www.instagram.com/nossacasa_at/'}><img src={Instagram}/></a>
      </div>
      <p>©2023 - Nossa Casa | All rights reserved</p>
    </footer>
    </FooterComponent>
  )
}

export default Footer
