import Modal from 'react-modal'
import { useState } from 'react'
import closeIcon from '../galery-modal/close-icon.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarDays } from '@fortawesome/free-regular-svg-icons'

const ModalEvents = ({ events = {} }) => {
  const indexWeek = events.date.getDay()
  const daysWeek = ['Domingo', 'Segunda-Feira', 'Terça-Feira', 'Quarta-Feira', 'Quinta-Feira', 'Sexta-Feira', 'Sabado']
  const [showModal, setShowModal] = useState(false)
  const handleClick = () => {
    setShowModal(!showModal)
  }
  const dateFormat = (date) => {
    return date.slice(0, 5)
  }

  const handleDate = (date) => {
    const day = date.toLocaleDateString(undefined, { day: 'numeric', timeZone: 'UTC' })
    const month = date.toLocaleDateString('pt-BR', { month: 'long' })
    const year = date.toLocaleDateString(undefined, { year: 'numeric' })
    return [day, month, year].join(' ')
  }
  return (
    <>
      <button className='button' onClick={handleClick}>Ver Mais</button>
      <Modal
        isOpen={showModal}
        onRequestClose={handleClick}
        className="modal"
        overlayClassName="modal-overlay"
      >
        <header>
          <img className='exitModalEvents' src={closeIcon} onClick={handleClick} />
          <div className='container-description'>
            <div className='title-events'>
              <h1>{events.name}</h1>
            </div>
            <div className='dia-events'>
              <p>{`${daysWeek[indexWeek]} - ${dateFormat(events.date.toLocaleDateString('pt-br', { timeZone: 'UTC' }))}`}</p>
            </div>
            <div className='dia-hora-eventos'>
              <div>
              <p>
                <FontAwesomeIcon icon={faCalendarDays} />{` ${handleDate(events.date)} ${events.time_start} ${events.time_end}`}</p>
              </div>
            </div>
            <p className='local-events'>{events.location}</p>
            <p>nome dos parceires</p>
            <p className='preco-events'>{events.price}</p>
            <p>{events.type}</p>
            <p>{events.description}</p>
          </div>
        </header>
      </Modal>
    </>)
}

export default ModalEvents
