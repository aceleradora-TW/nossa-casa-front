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
    cms.get('api/plural-sobre-nos/?populate=foto').then((response) => {
      const { data } = response.data
      if (data) {
        const aboutDescription = data.map((description) => {
          return {
            descricao: description.attributes?.descricao,
            foto: description.attributes?.foto?.data?.attributes?.url
          }
        })
        setAbout(aboutDescription)
      }
    })
  }, [])
  return (
    <>
      <NavBar></NavBar>
      <StyledAbout>
        {about.length > 0 ? <img src={urlCms + about[0].foto} /> : <div></div>}
        <div className='description'>
          <ReactMarkdown rehypePlugins={[rehypeRaw]}>
            {about.length > 0 ? about[0].descricao : ''}
          </ReactMarkdown>
        </div>
      </StyledAbout>
    </>
  )
}

export default PageAbout
