import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

function MySwiper() {
    return (
        <div className="swiper">
            <Swiper className="mySwiper">
                <SwiperSlide>
                    <img src="https://www.film.ru/sites/default/files/styles/thumb_1024x450/public/filefield_paths/the_gentlemen.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://www.film.ru/sites/default/files/styles/thumb_1024x450/public/filefield_paths/the_gentlemen.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://www.film.ru/sites/default/files/styles/thumb_1024x450/public/filefield_paths/the_gentlemen.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://www.film.ru/sites/default/files/styles/thumb_1024x450/public/filefield_paths/the_gentlemen.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://www.film.ru/sites/default/files/styles/thumb_1024x450/public/filefield_paths/the_gentlemen.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://www.film.ru/sites/default/files/styles/thumb_1024x450/public/filefield_paths/the_gentlemen.jpg" />
                </SwiperSlide>
            </Swiper>
        </div>
    );
}

export default MySwiper;
