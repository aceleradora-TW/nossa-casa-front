import { StyledAbout } from "./styled"
import NavBar from '../../components/navbar'
import { cms } from '../../client'
import { useEffect, useState } from "react"

const PageAbout = () => {
  const [about, setAbout] = useState([])
  useEffect(() => {
    cms.get('api/plural-sobre-nos/?populate=foto').then((response) => {
      const { data } = response.data
      setAbout(data)
      console.log(data.attributes)
    })
  })
  return (
    <>
      <NavBar />
      <StyledAbout>
        <div className="container">
          <div>
            <ul>
              <li>teste</li>
            </ul>
          </div>
          <img src="" />
          <p>teste</p>
          <div>

          </div>
        </div>
      </StyledAbout>
    </>
  )
}

export default PageAbout