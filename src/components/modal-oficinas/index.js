import Modal from 'react-modal'
import { useState } from 'react'
import CssModalGlobal from '../css-modal/styled'
import closeIcon from '../galery-modal/close-icon.svg'
import { styled } from 'styled-components'

const Detalhes = styled.div`
  * {
    margin: 0;
    padding: 0;
  }
  .title {
    color: purple;
    font-size: 30px;
    padding-left: 30px;
    padding-bottom: 50px;
  }

  .data-inicio, .data-fim{
    padding-left: 30px;
    font-size: 20px;
    padding-bottom: 20px;
  }
`
const ModalWorkshops = ({ workshops = {} }) => {
  const [showModal, setShowModal] = useState(false)
  const handleClick = () => {
    setShowModal(!showModal)
  }
  const handleDate = (date) => {
    const day = date.toLocaleDateString(undefined, { day: 'numeric' })
    const month = date.toLocaleDateString('pt-BR', { month: 'long' })
    const year = date.toLocaleDateString(undefined, { year: 'numeric' })
    return [day, month, year].join(' ')
  }
  return (
    <>
      <CssModalGlobal>
        <button className="button-styled" onClick={handleClick}>
          Ver Mais
        </button>
        <Modal
          isOpen={showModal}
          onRequestClose={handleClick}
          className="modal"
          overlayClassName="modal-overlay"
        >
          <img className="button-modal" src={closeIcon} onClick={handleClick} />
          <section>
            <Detalhes>
              <ul>
                <li>
                  <h1 className="title">{workshops.nome}</h1>
                  <h1 className="horario">{workshops.carga_horaria}</h1>
                  <h1 className="data-inicio">
                    {handleDate(new Date(workshops.data_inicio))}
                  </h1>
                  <h1 className="data-fim">{handleDate(new Date(workshops.data_fim))}</h1>
                  <h1 className="horario-inicio">{workshops.horario_inicio}</h1>
                  <h1 className="horario-fim">{workshops.horario_fim}</h1>
                  <h1 className="preco">{workshops.preco}</h1>
                  <p className="descricao">{workshops.descricao}</p>
                  <h1 className="local">{workshops.local}</h1>
                </li>
              </ul>
            </Detalhes>
          </section>
        </Modal>
      </CssModalGlobal>
    </>
  )
}

export default ModalWorkshops
