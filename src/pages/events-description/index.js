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
    cms.get(`api/events/${id}/?populate=parceires&populate=foto_divulgacao`).then((response) => {
      const { data } = response.data
      setEvent(data)
    })
  }, [])
  const handleDate = (date) => {
    const day = date.toLocaleDateString(undefined, { day: 'numeric', Timezone: 'UTF' })
    const month = date.toLocaleDateString('pt-BR', { month: 'long' })
    const year = date.toLocaleDateString(undefined, { year: 'numeric', Timezone: 'UTF' })
    return [day, month, year].join(' ')
  }

  const dataEmObjDate = new Date(event?.attributes?.data)
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
      <EventsStyleDescription>
        <section>
          <div className='title'>
            <h1>{event?.attributes?.nome}</h1>
          </div>
          <div className='container'>
            <div className='text'>
              <ul>
                <li>
                  <p>
                    {daysWeek[indexWeek]} - {' '}
                    {new Date(event.attributes?.data).toLocaleDateString()}
                  </p>
                </li>
                <li>
                  <div className='style-icon'>
                    <FontAwesomeIcon icon={faCalendarDays} />{' '}
                  </div>
                  {handleDate(new Date(event?.attributes?.data))}   ●{' '}
                  {event?.attributes?.horario_inicio} {'> '}
                  {handleDate(new Date(event?.attributes?.data))}   ●{' '}
                  {event?.attributes?.horario_fim}
                </li>
                <li>
                  <div className='style-icon'>
                    <FontAwesomeIcon icon={faLocationDot} />
                  </div>
                  Oficina presencial em {event?.attributes?.local}
                </li>
                <li className='parceires'>
                  <div className='style-icon'>
                    <FontAwesomeIcon icon={faUser} />
                  </div>
                  {event?.attributes?.parceires?.data.map((parceire) => {
                    return (
                      <p key={parceire.id}>
                        {console.log(event)}
                        {parceire.attributes?.nome}
                      </p>
                    )
                  })}
                </li>
              </ul>
            </div>
            <div className='text2'>
              <ul>
                <li>
                  <div className='style-icon'>
                    <FontAwesomeIcon icon={faHandHoldingDollar} />
                  </div>
                  {event?.attributes?.preco !== null ? (event?.attributes?.preco) : 'Evento Gratuíto'}
                </li>
                <li>
                  <div className='style-icon'>
                    <FontAwesomeIcon icon={faLock} />
                  </div>
                  {event?.attributes?.tipo}
                </li>
                <li>
                  {event?.attributes?.url_inscricao === null && (
                    <div>
                      <div className='style-icon'>
                        <FontAwesomeIcon icon={faPenToSquare} />
                      </div>
                      Inscrição não é necessária
                    </div>
                  )}
                </li>
              </ul>
            </div>
          </div>
          <div className='description'>
            <p className='text-title-description'>Descrição da oficina</p>
            <p>{event?.attributes?.descricao}</p>
          </div>
          <div className='Container-button'>
            {event.attributes?.url_inscricao !== null && (
              <a
                className="button-enrollment"
                href={event.attributes?.url_inscricao}
                target="_blank"
                rel="noreferrer"
              >
                Inscreva-se
              </a>
            )}
          </div>
        </section>
        <section>
        </section>
      </EventsStyleDescription >
    </>

  )
}
