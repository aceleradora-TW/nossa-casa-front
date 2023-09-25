import EventsStyleDescription from './styled'
import { useState, useEffect } from 'react'
import { cms } from '../../service/client'
import { useParams } from 'react-router'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faUser,
  faPenToSquare,
  faLock,
  faHandHoldingDollar,
  faCalendarDays,
  faLocationDot
} from '@fortawesome/free-solid-svg-icons'
export const EventsPageDescription = () => {
  const [event, setEvent] = useState([])
  const { id } = useParams()
  useEffect(() => {
    cms.get(`api/events/${id}`).then((response) => {
      const { data } = response.data
      setEvent(data)
    })
  }, [])
  console.log(new Date(event.attributes?.data).toLocaleDateString('pt-BR'))
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

  const dataEmObjDate = new Date(event?.attributes?.data_inicio)
  const indexWeek = dataEmObjDate.getDay()
  const daysWeek = [
    'Domingo',
    'Segunda-Feira',
    'Terça-Feira',
    'Quarta-Feira',
    'Quinta-Feira',
    'Sexta-Feira',
    'Sabado'
  ]

  return (
    <>
      <section>
        <EventsStyleDescription>
          <ul>
            <li>
              <h1 className="title">{event?.attributes?.nome}</h1>
              <p className="day">
                {daysWeek[indexWeek]} - {' '}
                {handleDay(new Date(event.attributes?.data))}
              </p>
              <div className="data-inicio">
                <p className="data-inicio">
                  <FontAwesomeIcon icon={faCalendarDays} />{' '}
                  <div className="spacingDate">
                    {handleDate(new Date(event?.attributes?.data_inicio))} •{' '}
                    {event?.attributes?.horario_inicio} {'> '}
                    {handleDate(new Date(event?.attributes?.data_fim))} •{' '}
                    {event?.attributes?.horario_fim}
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
                      '--fa-primary-opacity': '1'
                    }}
                  />
                  <div className="spacingMoney">{event?.attributes?.preco}</div>
                </p>
              </div>
              <div className="div-local">
                <p className="local">
                  <FontAwesomeIcon icon={faLocationDot} />
                  <div className="spacingLocal">
                    Oficina presencial em {event?.attributes?.local}
                  </div>
                </p>
              </div>
              <div className="oficinaType">
                <p className="type">
                  <FontAwesomeIcon icon={faLock} />
                  <div className="spacingType">{event?.attributes?.tipo}</div>
                </p>
              </div>
              <div className="parceires">
                <p className="parceire">
                  <FontAwesomeIcon icon={faUser} />
                  <div className="parce">
                    {event?.attributes?.parceires?.data.map((parceire, index) => {
                      return (
                        <p key={index} className="spacing-parceires">
                          {parceire.attributes?.nome}{' '}
                        </p>
                      )
                    })}
                  </div>
                </p>
              </div>
              <p className="description">Descrição da oficina</p>
              <p className="descricaoCMS">{event?.attributes?.descricao}</p>
              {event?.attributes?.url_inscricao !== null && (
                <a
                  className="button-inscricao"
                  href={event?.attributes?.url_inscricao}
                  target="_blank"
                  rel="noreferrer"
                >
                  Inscreva-se
                </a>
              )}
              {event?.attributes?.url_inscricao == null && (
                <>
                  <div className="inscricaoIcon">
                    <FontAwesomeIcon icon={faPenToSquare} />
                    <p className="inscricao"> Inscrição não é necessária</p>
                  </div>
                </>
              )}
            </li>
          </ul>
        </EventsStyleDescription>
      </section>
    </>

  )
}
