import Modal from 'react-modal'
import { useState } from 'react'
import WorkshopsModal from './styled'
import closeIcon from '../galery-modal/close-icon.svg'

const ModalWorkshops = () => {
  const [modal, setModal] = useState(false)
  const handleClick = () => {
    setModal((modal) => !modal)
  }
  return (
    <>
      <WorkshopsModal>
        <button className="button-styled" onClick={handleClick}>
          Ver Mais
        </button>
        <Modal
          isOpen={modal}
          onRequestClose={handleClick}
          className="modal"
          overlayClassName="modal-overlay"
        >
          <img
            className="buttonModalOficinas"
            src={closeIcon}
            onClick={handleClick}
          />
        </Modal>
      </WorkshopsModal>
    </>
  )
}

export default ModalWorkshops
