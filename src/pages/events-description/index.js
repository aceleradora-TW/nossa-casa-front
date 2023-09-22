import EventsStyleDescription from './styled'
import { useState, useEffect } from 'react'
import { cms } from '../../service/client'
import { useParams } from 'react-router'

export const EventsPageDescription = () => {
  const [event, setEvent] = useState([])
  const { id } = useParams()
  useEffect(() => {
    cms.get(`api/events/${id}`).then((response) => {
      const { data } = response.data
      setEvent(data)
    })
  }, [id])

  return (
    <>
      <section>
        <EventsStyleDescription>
          <p>{console.log(event.attributes.nome)}</p>
          <p>{event.attributes.nome}</p>
        </EventsStyleDescription>
      </section>
    </>
  )
}
