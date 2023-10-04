const FULL_DATE_FORMATTER = Intl.DateTimeFormat('pt-BR', {
  dateStyle: 'full',
  timeZone: 'America/Sao_Paulo',
})

export const formattedDate = (cmsEvent) => {
  const eventDate = new Date(cmsEvent?.attributes?.data)

  const fullDateAsString = FULL_DATE_FORMATTER.format(eventDate)

  return {
    fullDate: fullDateAsString,
    startTime: cmsEvent?.attributes?.horario_inicio,
    endTime: cmsEvent?.attributes?.hora_fim,
  }
}
