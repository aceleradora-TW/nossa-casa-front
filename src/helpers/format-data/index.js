const daysOfWeekInPtBr = [
  'Domingo',
  'Segunda',
  'Terça',
  'Quarta',
  'Quinta',
  'Sexta',
  'Sábado'
]
const formatDate = (date) => {
  const day = date.toLocaleDateString(undefined, {
    day: 'numeric',
    timeZone: 'UTC'
  })
  const month = date.toLocaleDateString('pt-BR', { month: 'short' })
  const year = date.toLocaleDateString(undefined, {
    year: 'numeric',
    timeZone: 'UTC'
  })
  return `${daysOfWeekInPtBr[date.getDay()]}, ${day} ${month} ${year}`
}
const formatWorkshopDuration = (workshop) =>
  `, ${workshop.attributes?.horario_inicio} > ${workshop.attributes?.horario_fim}`

const endsOnSameDay = (workshop) =>
  workshop.attributes?.data_inicio === workshop.attributes?.data_fim

export const formatWorkshopDates = (workshop) => {
  if (workshop && workshop.attributes && workshop.attributes.data_inicio && workshop.attributes.data_fim) {
    return endsOnSameDay(workshop)
      ? formatDate(new Date(`${workshop.attributes?.data_inicio}T00:00:00-0300`))
      : `${formatDate(new Date(`${workshop.attributes?.data_inicio}T00:00:00-0300`))} 
      > ${formatDate(new Date(`${workshop.attributes?.data_fim}T00:00:00-0300`))}`
  }
}