import TherapyCarouselComponent from './styled.js'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import { cms } from '../../service/client'
import { Navigation } from 'swiper'
import { useState, useEffect } from 'react'

const TherapyCarousel = () => {
  const [slides, setSlides] = useState([])

  useEffect(() => {
    cms.get('api/therapies/?populate=foto_divulgacao').then((response) => {
      const { data } = response.data
      const therapy = data.map((data) => {
        console.log(data.attributes)
        return data.attributes
      })
      setSlides(therapy)
    })
  }, [])

  return (
    <TherapyCarouselComponent>
      
    </TherapyCarouselComponent>
  )
}

export default TherapyCarousel
