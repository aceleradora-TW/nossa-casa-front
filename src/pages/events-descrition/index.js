// import React, { useEffect, useState } from 'react'
// import EventsComponent from './styled'
// import { cms } from '../../service/client'

export const EventsPageDescription = ({ events }) => {
  // const indexWeek = events.date.getDay()
  // const daysWeek = ['Domingo', 'Segunda-Feira', 'Terça-Feira', 'Quarta-Feira', 'Quinta-Feira', 'Sexta-Feira', 'Sabado']

  // const dateFormat = (date) => {
  //   return date.slice(0, 5)
  // }

  // const handleDate = (date) => {
  //   const day = date.toLocaleDateString(undefined, { day: 'numeric', timeZone: 'UTC' })
  //   const month = date.toLocaleDateString('pt-BR', { month: 'long' })
  //   const year = date.toLocaleDateString(undefined, { year: 'numeric' })
  //   return [day, month, year].join(' ')
  // }

  // function handleShow(breakpoint) {
  //   setFullscreen(breakpoint)
  //   setShow(true)
  // }
  // const [attributesEvents, setAttributesEvents] = useState([])
  // const urlCms = env.URL_CMS
  // useEffect(() => {
  //   cms.get('api/events/?populate=foto_divulgacao').then((response) => {
  //     const { data } = response.data
  //     const events = data.map((data) => {
  //       if (data) {
  //         return {
  //           name: data.attributes.nome,
  //           date: new Date(data.attributes.data),
  //           image_url: data.attributes.foto_divulgacao.data.attributes.url,
  //           time_start: data.attributes.horario_inicio,
  //           time_end: data.attributes.horario_fim,
  //           type: data.attributes.tipo,
  //           location: data.attributes.local,
  //           price: data.attributes.preco,
  //           description: data.attributes.descricao
  //         }
  //       }
  //       return null
  //     })
  //     const eventsOrdered = events.filter(event => event !== null).sort((a, b) => a.date - b.date)
  //     setAttributesEvents(eventsOrdered)
  //   })
  // }, [])
  return (
    <>
      <p>hello</p>
    </>
    // <EventsComponent>
    //   <<ul>
    //     {attributesEvents.map((events, key) =>
    //       <li key={key}>
    //         <h1>{events}</h1>
    //       </li>
    //     )}
    //   </ul>>
    // </EventsComponent>
  )
}
