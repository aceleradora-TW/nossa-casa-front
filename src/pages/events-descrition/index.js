import React, { useState, useEffect } from 'react'
import EventsComponent from './styled'
import { cms } from '../../service/client'
import {
  faUser,
  faPenToSquare,
  faLock,
  faHandHoldingDollar,
  // faCalendarDays,
  faLocationDot
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const EventsPageDescription = () => {
  const [event, setEvent] = useState([])
  useEffect(() => {
    cms.get('api/events/?populate=foto_divulgacao').then((response) => {
      const { data } = response.data
      const events = data.map((data) => {
        if (data) {
          return {
            name: data.attributes.nome,
            date: new Date(data.attributes.data),
            image_url: data.attributes.foto_divulgacao.data.attributes.url,
            time_start: data.attributes.horario_inicio,
            time_end: data.attributes.horario_fim,
            type: data.attributes.tipo,
            location: data.attributes.local,
            price: data.attributes.preco,
            description: data.attributes.descricao
          }
        }
        return null
      })
      setEvent(event)
    })
  }, [])

  console.log(events.date)
  // const indexWeek = dataEmObjDate.getDay()
  // const daysWeek = [
  //   'Domingo',
  //   'Segunda-Feira',
  //   'Terça-Feira',
  //   'Quarta-Feira',
  //   'Quinta-Feira',
  //   'Sexta-Feira',
  //   'Sabado'
  // ]

  return (
    <>
      <section>
        <EventsComponent>
          <ul>
            {event.map((events, key) =>
              <li key={key}>
                <h1 className="title">{events.name}</h1>
                <p className="day">
                  {/* {daysWeek[indexWeek]} */}
                </p>
                <div className="data-inicio">
                  <p>
                  {events.date}
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
                    <div className="spacingMoney">{events.price}</div>
                  </p>
                </div>
                <div className="div-local">
                  <p className="local">
                    <FontAwesomeIcon icon={faLocationDot} />
                    <div className="spacingLocal">
                      Oficina presencial em {events.location}
                    </div>
                  </p>
                </div>
                <div className="oficinaType">
                  <p className="type">
                    <FontAwesomeIcon icon={faLock} />
                    <div className="spacingType">{events.type}</div>
                  </p>
                </div>
                <div className="parceires">
                  <p className="parceire">
                    <FontAwesomeIcon icon={faUser} />
                  </p>
                </div>
                <p className="description">Descrição da oficina</p>
                <p className="descricaoCMS">{events.description}</p>
                {events.url_inscricao !== null && (
                  <a
                    className="button-inscricao"
                    href={events.url_inscricao}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Inscreva-se
                  </a>
                )}
                {events.url_inscricao == null && (
                  <>
                    <div className="inscricaoIcon">
                      <FontAwesomeIcon icon={faPenToSquare} />
                      <p className="inscricao"> Inscrição não é necessária</p>
                    </div>
                  </>
                )}
              </li>
            )}

          </ul>
        </EventsComponent>
      </section>
    </>
  )
}
