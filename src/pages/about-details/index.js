import { StyledAbout } from "./styled"
import NavBar from '../../components/navbar'
import { cms } from '../../client'
import { useEffect, useState } from "react"

const PageAbout = () => {
  const [about, setAbout] = useState([])
  useEffect(() => {
    cms.get('api/plural-sobre-nos/?populate=foto').then((response) => {
      const { data } = response.data
      const aboutDescription = data.map(description => description.attributes)
      setAbout(aboutDescription)
      console.log(aboutDescription)
    })

  }, [])
  return (
    <>
      <StyledAbout>
        <div className="container">
          <div>
            <ul>
              {about.map((index, key) =>
                <li key={key}>{index}</li>
              )}
            </ul>
          </div>
          <div>
            <p>teste</p>
          </div>
        </div>
      </StyledAbout>
    </>
  )
}

export default PageAbout