const formatDate = (date) => {
  const dateFormated = new Intl.DateTimeFormat('pt-BR', {
    timeZone: 'UTC',
    day: '2-digit',
    month: 'short',
    year: 'numeric',
    weekday: 'long'
  }).format(date)
  return dateFormated[0].toUpperCase() + dateFormated.slice(1)
}

export const formatWorkshopDuration = (workshop) =>
  `, ${workshop.attributes?.horario_inicio} > ${workshop.attributes?.horario_fim}`

const endsOnSameDay = (workshop) =>
  workshop.attributes?.data_inicio === workshop.attributes?.data_fim

export const formatWorkshopDates = (workshop) => {
  if (
    workshop?.attributes?.data_inicio &&
    workshop?.attributes?.data_fim
  ) {
    return endsOnSameDay(workshop)
      ? formatDate(new Date(workshop.attributes?.data_inicio))
      : `${formatDate(new Date(workshop.attributes?.data_inicio))} 
      > ${formatDate(new Date(workshop.attributes?.data_fim))}`
  }
}
