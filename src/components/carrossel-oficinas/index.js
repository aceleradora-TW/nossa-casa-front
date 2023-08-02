import Workshops from "./styled";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { useState, useEffect } from "react";
import env from "react-dotenv";
import { cms } from "../../service/client";
import NavBar from "../../components/navbar";

const WorkshopsCarrossel = () => {
  const [attributes, setAttributes] = useState([]);
  const urlCms = env.URL_CMS;

  useEffect(() => {
    cms.get("api/workshops/?populate=fotos").then((response) => {
      const { data } = response.data;
      const workshops = data.map((data) => {
        return data.attributes;
      });
      console.log(workshops);
      setAttributes(workshops);
    });
  }, []);

  return (
    <Workshops
      tyle={{
        background: "#F5BC4A",
      }}
    >
      <NavBar />
      <main>
        <div>
          <h1>Oficinas</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            accumsan accumsan elit vel ullamcorper. Vestibulum ante ipsum primis
            in faucibus orci luctus et ultrices posuere cubilia curae; Nullam
            eget ligula et libero volutpat tristique. Duis tincidunt dolor
            dolor, vel pulvinar tellus mattis id.
          </p>
        </div>
        <section className="carrossel">
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            navigation={true}
            breakpoints={{
              "@0.00": {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              "@0.75": {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              "@1.00": {
                slidesPerView: 3,
                spaceBetween: 40,
              },
            }}
            modules={Navigation}
            className="mySwiper"
          >
            <section className="oficinas">
              <div className="swiper-slide">
                <ul>
                  {attributes.map((workshops) => (
                    <li key={workshops.nome}>
                      <SwiperSlide key={workshops.nome}>
                        <div className="imagem-oficina">
                          <div>
                            {workshops?.foto_divulgacao?.data?.map((foto) => (
                              <img
                                className="img-oficina"
                                src={
                                  urlCms +
                                  foto.foto_divulgacao.data.attributes.url
                                }
                              />
                            ))}
                          </div>
                        </div>
                        <p className="nome-oficina">{workshops.nome}</p>
                        <div className="botao-ver-mais">
                          <input
                           type="text"
                            placeholder="Ver mais"
                            className="verMais-input"
                          ></input>
                        </div>
                      </SwiperSlide>
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          </Swiper>
        </section>
      </main>
    </Workshops>
  );
};
export default WorkshopsCarrossel;
