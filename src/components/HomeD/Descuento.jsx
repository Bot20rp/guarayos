// Descuento.js
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules'; // Importa el módulo Autoplay
import 'swiper/swiper-bundle.css'; // Asegúrate de incluir los estilos


export const Descuento = () => {
  return (
    <div className="descuento">
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        autoplay={{ delay: 3000 }} // Cambia automáticamente cada 1 segundo
        loop={true} // Habilita el bucle infinito
        modules={[Autoplay]} // Activa el módulo de Autoplay
      >
        <SwiperSlide>
          <img src="./img/promo1.jpg" alt="Promo 1" />

        </SwiperSlide>
        <SwiperSlide>
          <img src="./img/promo2.jpg" alt="Promo 2" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
