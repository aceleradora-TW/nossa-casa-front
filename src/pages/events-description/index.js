// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import EventsStyleDescription from './styled'
import { useState, useEffect } from 'react'
import { cms } from '../../service/client'
// import {
//   faUser,
//   faPenToSquare,
//   faLock,
//   faHandHoldingDollar,
//   faCalendarDays,
//   faLocationDot
// } from '@fortawesome/free-solid-svg-icons'
import { useParams } from 'react-router'

export const EventsPageDescription = () => {
  const [attributes, setAttributes] = useState([])
  const { id } = useParams()
  useEffect(() => {
    cms
      .get(`api/events/${id}`)
      .then((response) => {
        const { data } = response.data
        const events = data.map((data) => {
          return data.attributes
        })
        const parceires = events.map((a) =>
          a.parceires?.data.map((b) => b.attributes.nome)
        )
        setAttributes(events, parceires)
      })
  }, [])

  // const handleDate = (date) => {
  //   const day = date.toLocaleDateString(undefined, { day: 'numeric' })
  //   const month = date.toLocaleDateString('pt-BR', { month: 'long' })
  //   const year = date.toLocaleDateString(undefined, { year: 'numeric' })
  //   return [day, month, year].join(' ')
  // }

  // const handleMonth = (date) => {
  //   const month = date.toLocaleDateString('pt-BR', { month: 'numeric' })
  //   return [month].join(' ')
  // }

  // const handleDay = (date) => {
  //   const day = date.toLocaleDateString('pt-BR', { day: 'numeric' })
  //   return [day].join(' ')
  // }

  // const dataEmObjDate = new Date(attributes.data_inicio)
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
        <EventsStyleDescription>
          <ul>
            {attributes.map((events, key) => (
              <li key={key}>
                {events.name}
                {/* <h1 className="title">{events.nome}</h1>
                <p className="day">
                  {daysWeek[indexWeek]} -{' '}
                  {handleDay(new Date(events.data_inicio))}/
                  {handleMonth(new Date(events.data_inicio))}
                </p>
                <div className="data-inicio">
                  <p className="data-inicio">
                    <FontAwesomeIcon icon={faCalendarDays} />{' '}
                    <div className="spacingDate">
                      {handleDate(new Date(events.data_inicio))} •{' '}
                      {events.horario_inicio} {'> '}
                      {handleDate(new Date(events.data_fim))} •{' '}
                      {events.horario_fim}
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
                    <div className="spacingMoney">{events.preco}</div>
                  </p>
                </div>
                <div className="div-local">
                  <p className="local">
                    <FontAwesomeIcon icon={faLocationDot} />
                    <div className="spacingLocal">
                      Oficina presencial em {events.local}
                    </div>
                  </p>
                </div>
                <div className="oficinaType">
                  <p className="type">
                    <FontAwesomeIcon icon={faLock} />
                    <div className="spacingType">{events.tipo}</div>
                  </p>
                </div>
                <div className="parceires">
                  <p className="parceire">
                    <FontAwesomeIcon icon={faUser} />
                    <div className="parce">
                      {events.parceires?.data.map((parceire, index) => {
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
                <p className="descricaoCMS">{events.descricao}</p>
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
                )} */}
              </li>
            ))}
          </ul>
        </EventsStyleDescription>
      </section>
    </>
  )
}
