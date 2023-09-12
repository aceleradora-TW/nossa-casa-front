// import { useState } from 'react'

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

  return (
    <>
    {console.log(events)}
      <h1>{events}</h1>
    </>
  )
}
