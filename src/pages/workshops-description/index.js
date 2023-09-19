import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Detalhes from './styled'
import { useState, useEffect } from 'react'
import { cms } from '../../service/client'
import {
  faUser,
  faPenToSquare,
  faLock,
  faHandHoldingDollar,
  faCalendarDays,
  faLocationDot,
} from '@fortawesome/free-solid-svg-icons'

export const DetailsWorkshops = ({ workshops = {} }) => {
  const [attributes, setAttributes] = useState([])
  useEffect(() => {
    cms
      .get('api/workshops/?populate=foto_divulgacao, parceires, foto_oficina')
      .then((response) => {
        const { data } = response.data
        const workshops = data.map((data) => {
          return data.attributes
        })
        const parceires = workshops.map((a) =>
          a.parceires?.data.map((b) => b.attributes.nome)
        )
        const workshopsSortedByName = workshops.sort((a, b) =>
          a.nome < b.nome ? -1 : 1
        )
        setAttributes(workshopsSortedByName, parceires)
      })
  }, [])

  const handleDate = (date) => {
    const day = date.toLocaleDateString(undefined, { day: 'numeric' })
    const month = date.toLocaleDateString('pt-BR', { month: 'long' })
    const year = date.toLocaleDateString(undefined, { year: 'numeric' })
    return [day, month, year].join(' ')
  }

  const handleMonth = (date) => {
    const month = date.toLocaleDateString('pt-BR', { month: 'numeric' })
    return [month].join(' ')
  }

  const handleDay = (date) => {
    const day = date.toLocaleDateString('pt-BR', { day: 'numeric' })
    return [day].join(' ')
  }

  const dataEmObjDate = new Date(workshops.data_inicio)
  const indexWeek = dataEmObjDate.getDay()
  const daysWeek = [
    'Domingo',
    'Segunda-Feira',
    'Terça-Feira',
    'Quarta-Feira',
    'Quinta-Feira',
    'Sexta-Feira',
    'Sabado',
  ]

  return (
    <>
      <section>
        <Detalhes>
          <ul>
            {attributes.map((workshops, key) => (
              <li key={key}>
                <h1 className="title">{workshops.nome}</h1>
                <p className="day">
                  {daysWeek[indexWeek]} -{' '}
                  {handleDay(new Date(workshops.data_inicio))}/
                  {handleMonth(new Date(workshops.data_inicio))}
                </p>
                <div className="data-inicio">
                  <p className="data-inicio">
                    <FontAwesomeIcon icon={faCalendarDays} />{' '}
                    <div className="spacingDate">
                      {handleDate(new Date(workshops.data_inicio))} •{' '}
                      {workshops.horario_inicio} {'> '}
                      {handleDate(new Date(workshops.data_fim))} •{' '}
                      {workshops.horario_fim}
                    </div>
                  </p>
                </div>
                <div className="div-preco">
                  <p className="preco">
                    <FontAwesomeIcon
                      icon={faHandHoldingDollar}
                      size="xl"
                      style={{
                        '--fa-secondary-color': '#ffffff',
                        '--fa-primary-opacity': '1',
                      }}
                    />
                    <div className="spacingMoney">{workshops.preco}</div>
                  </p>
                </div>
                <div className="div-local">
                  <p className="local">
                    <FontAwesomeIcon icon={faLocationDot} />
                    <div className="spacingLocal">
                      Oficina presencial em {workshops.local}
                    </div>
                  </p>
                </div>
                <div className="oficinaType">
                  <p className="type">
                    <FontAwesomeIcon icon={faLock} />
                    <div className="spacingType">{workshops.tipo}</div>
                  </p>
                </div>
                <div className="parceires">
                  <p className="parceire">
                    <FontAwesomeIcon icon={faUser} />
                    <div className="parce">
                      {workshops.parceires?.data.map((parceire, index) => {
                        return (
                          <p key={index} className="spacing-parceires">
                            {parceire.attributes.nome}{' '}
                          </p>
                        )
                      })}
                    </div>
                  </p>
                </div>
                <p className="description">Descrição da oficina</p>
                <p className="descricaoCMS">{workshops.descricao}</p>
                {workshops.url_inscricao !== null && (
                  <a
                    className="button-inscricao"
                    href={workshops.url_inscricao}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Inscreva-se
                  </a>
                )}
                {workshops.url_inscricao == null && (
                  <>
                    <div className="inscricaoIcon">
                      <FontAwesomeIcon icon={faPenToSquare} />
                      <p className="inscricao"> Inscrição não é necessária</p>
                    </div>
                  </>
                )}
              </li>
            ))}
          </ul>
        </Detalhes>
      </section>
    </>
  )
}
