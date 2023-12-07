import { StyledAbout } from './styled'
import NavBar from '../../components/navbar'
import { cms } from '../../client'
import { useEffect, useState } from 'react'
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'

const PageAbout = () => {
  const [about, setAbout] = useState([])
  const urlCms = process.env.REACT_APP_URL_CMS
  useEffect(() => {
    cms.get('api/sobre-nos/?populate=foto').then((response) => {
      const { data } = response.data

      const aboutDescription = {
        descricao: data.attributes?.descricao,
        foto: urlCms + data.attributes?.foto?.data?.attributes?.url
      }
      setAbout(aboutDescription)
    })
  }, [])
  return (
    <>
      <NavBar></NavBar>
      <StyledAbout>
        {!!about.foto ? <img src={about.foto} /> : <div>Não encontrado</div>}
        {!!about.descricao ?
        <div className="description">
          <ReactMarkdown rehypePlugins={[rehypeRaw]}>
            {about.descricao}
          </ReactMarkdown>
        </div>
        : <div>Não encontrado</div>}
      </StyledAbout>
    </>
  )
}

export default PageAbout
