import React from 'react'
import {Swiper, SwiperSlide } from 'swiper/react'
import {Autoplay} from 'swiper/modules'
import 'swiper/css';
import '../../css/Home.css'

const Home = () => {
  return (
    <section className='home'>
        <div className='row'>

            <div className='content'>
                <h3>upto 75% off</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia doloremque corporis sunt quasi autem neque animi exercitationem placeat perspiciatis sapiente, sed ratione eligendi nam dolorem! Ea illum iure vitae ex.</p>
                <a href="#" className='btn'>shop now</a>
            </div>

            <div className='book-slider'>
                <Swiper className='book-swiper'
                modules={[Autoplay]}
                centeredSlides={true}
                spaceBetween={40}
                slidesPerView={3}
                loop={true}
                autoplay={{ delay: 2000, disableOnInteraction: false }}
                breakpoints={{
                  0: { slidesPerView: 1 },
                  640: { slidesPerView: 2 },
                  1024: { slidesPerView: 3}}}
                >
                   <SwiperSlide><a href='#'><img src='/book1.jpg'></img></a></SwiperSlide>
                   <SwiperSlide><a href='#'><img src='/book2.jpg'></img></a></SwiperSlide>
                   <SwiperSlide><a href='#'><img src='/book3.jpg'></img></a></SwiperSlide>
                   <SwiperSlide><a href='#'><img src='/book4.png'></img></a></SwiperSlide>
                   <SwiperSlide><a href='#'><img src='/book5.png'></img></a></SwiperSlide>
                   <SwiperSlide><a href='#'><img src='/book6.png'></img></a></SwiperSlide>
                </Swiper>
            </div>
        </div>
    </section>
  )
}

export default Home