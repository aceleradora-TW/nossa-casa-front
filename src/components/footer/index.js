import FooterComponent from './styled'
import Instagram from './instagram_logo.png'
import NossaCasa from './nossa_casa_logo.png'
import Whatsapp from './whatsapp_logo.png'
import Twitter from './twitter_logo.png'
import Facebook from './facebook_logo.png'

const Footer = () => {
  return (
    <FooterComponent>
    <footer>
      <img className='logo' src={NossaCasa}/>
      <div>
      <a href={'https://chat.whatsapp.com/BndMXO2VZY7CS04IiJ9An2'}><img src={Whatsapp}/></a>
      <img src={Twitter}/>
      <img src={Facebook}/>
      <a href={'https://www.instagram.com/nossacasa_at/'}><img src={Instagram}/></a>
      </div>
      <p>©2018 - Form  |   All right reserved</p>
    </footer>
    </FooterComponent>
  )
}

export default Footer
