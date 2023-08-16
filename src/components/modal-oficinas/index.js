import Modal from 'react-modal'
import { useState, useEffect } from 'react'
import CssModalGlobal from '../css-modal/styled'
import closeIcon from '../galery-modal/close-icon.svg'
import { cms } from '../../service/client'
import CssModal from './styled'

const ModalWorkshops = () => {
  const [attributes, setAttributes] = useState([])

  useEffect(() => {
    cms.get('api/workshops/?populate=foto_divulgacao').then((response) => {
      const { data } = response.data
      const workshops = data.map((data) => {
        return data.attributes
      })
      setAttributes(workshops)
    })
  }, [])
  const [showModal, setShowModal] = useState(false)
  const handleClick = () => {
    setShowModal(!showModal)
  }
  return (
    <>
      <CssModalGlobal>
        <button className="button-styled" onClick={handleClick}>
          Ver Mais
        </button>
        <CssModal>
        <Modal
          isOpen={showModal}
          onRequestClose={handleClick}
          className="modal"
          overlayClassName="modal-overlay"
        >
          <img className="button-modal" src={closeIcon} onClick={handleClick} />
        <section>
          <div className="detalhes">
            <ul>
              {attributes.map((workshops, key) => (
                <li key={key}>
                      <div>
                      <h1 className="title">{workshops.nome}</h1>
                      <h1 className="horario">{workshops.carga_horaria}</h1>
                      <h1 className="local">{workshops.local}</h1>
                      <h1 className="data-inicio">{workshops.data_inicio}</h1>
                      <h1 className="data-fim">{workshops.data_fim}</h1>
                      <h1 className="horario-inicio">{workshops.horario_inicio}</h1>
                      <h1 className="horario-fim">{workshops.horario_fim}</h1>
                      <h1 className="preco">{workshops.preco}</h1>
                      <p className="descricao">{workshops.descricao}</p>
                      </div>
                </li>
              ))}
            </ul>
          </div>
        </section>
        </Modal>
        </CssModal>
      </CssModalGlobal>
    </>
  )
}

export default ModalWorkshops
