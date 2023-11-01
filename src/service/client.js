import axios from 'axios'
import env from 'react-dotenv'

export const client = axios.create({
  baseURL: env.URL_BACKEND,
})

export const cms = axios.create({
  baseURL: env.URL_CMS,
})

const getAllEvents = async () => {
  const { data } = await cms.get('api/events/?populate=foto_divulgacao')

  return data?.filter((event) => event !== null && event !== undefined) ?? []
}

const getHomeGaleryImages = async () => {
  const { data } = await cms.get('api/gallery/?populate=fotos')

  return (
    data?.data?.attributes?.fotos?.data?.map((image) => ({
      name: '????',
      url: `${env.URL_CMS}/${image.attributes.url}`,
    })) ?? []
  )
}

const getHighlightedEvents = async () => {
  const events = await getAllEvents()

  return events
    .filter((event) => event.attributes.destaque)
    .map((event) => ({
      id: event.id,
      name: event.attributes.nome,
      description: event.attributes.descricao,
      imageUrl: `${env.URL_CMS}/${event.attributes.foto_divulgacao.data.attributes.url}`,
    }))
}

const getEventsOrderedByDate = async () => {
  const events = await getAllEvents()

  return events
    .map((event) => ({
      id: event.id,
      name: event.attributes.nome,
      date: new Date(event.attributes.data_inicio),
      imageUrl: `${env.URL_CMS}/${event.attributes.foto_divulgacao.data.attributes.url}`,
      type: event.attributes.tipo,
      location: event.attributes.local,
      price: event.attributes.preco,
      description: event.attributes.descricao,
      duration: {
        start: event.attributes.horario_inicio,
        end: event.attributes.horario_fim,
      },
    }))
    .sort((a, b) => a.date - b.date)
}

export const cmsApi = {
  getEventsOrderedByDate,
  getHighlightedEvents,
  getHomeGaleryImages,
}
