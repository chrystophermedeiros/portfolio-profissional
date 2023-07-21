import { Container, ContainerItems, Card } from "./style";
import { certificates } from "../../data/dadosCertificados";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaSistrix } from "react-icons/fa";
// import { Button } from "../Button";
import React, { useState } from "react";

export function Certificates() {
  const imagens = Image;
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredProjects = certificates.filter(
    (certificate) =>
      certificate.name.toLowerCase().includes(searchTerm.toLowerCase()) 
  );

  return (
    <Container>
      <h1>Certificados</h1>
      <div className="input">
        <input
          type="text"
          placeholder="Procure um certificado"
          value={searchTerm}
          onChange={handleSearch}
        />{" "}
        <FaSistrix />
      </div>

      <ContainerItems>
        {filteredProjects.length > 0 ? (
          <Swiper
            slidesPerView={"1"}
            spaceBetween={10}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={false}
            modules={[Autoplay, Pagination, Navigation]}
            className="swiper"
          >
            {filteredProjects &&
              filteredProjects.map((obj, index) => (
                <SwiperSlide key={index.id}>
                  <Card>
                    <img src={obj.img} alt="" />
                    <p>{obj.name}</p>
                    <p>{obj.date}</p>
                    <div className="teste">
                      {obj.tag.map((tag) => {
                        return (
                          <div key={tag.id}>
                            <img src={tag.img} alt="" />
                          </div>
                        );
                      })}
                    </div>
                  </Card>
                </SwiperSlide>
              ))}
          </Swiper>
        ) : (
          <p>Certificado não encontrado 🙁</p>
        )}
      </ContainerItems>
    </Container>
  );
}
