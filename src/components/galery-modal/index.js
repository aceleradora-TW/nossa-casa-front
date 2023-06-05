import { ModalContainer } from './styled'
import { useState } from 'react'
import closeIcon from './close-icon.svg'

const ModalGallery = () => {
  const [toggleGallery, setToggleGallery] = useState(false)

  const toggleGalleryHandler = () => {
    setToggleGallery(!toggleGallery)
  }

  return <>
    <button onClick={toggleGalleryHandler}>Ver mais</button>
    {toggleGallery &&
      <ModalContainer>
        <img className='exit' src={closeIcon} onClick={toggleGalleryHandler}/>
      </ModalContainer>}
  </>
}

export default ModalGallery
