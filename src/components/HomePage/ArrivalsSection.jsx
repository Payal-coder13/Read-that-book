import React from 'react'
import '../../css/ArrivalsSection.css'

import {Swiper, SwiperSlide } from 'swiper/react'
import {Pagination, Navigation, Autoplay} from 'swiper/modules'
import 'swiper/css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons'

const ArrivalsSection = () => {
  return (
    <section className="arrivals" id="arrivals">
        <h1 className='heading'><span>new arrivals</span></h1>
        <div className='arrivals-slider'>
            <Swiper className='wraper'
            modules={[Autoplay]}
                centeredSlides={true}
                spaceBetween={40}
                slidesPerView={3}
                loop={true}
                autoplay={{ delay: 9500, disableOnInteraction: false }}
                breakpoints={{
                  0: { slidesPerView: 1 },
                  640: { slidesPerView: 2 },
                  1024: { slidesPerView: 3}}}
                  >
                <SwiperSlide>
                <a href="#" className="box">
                    <div className="image">
                        <img src='/book1.jpg' alt=''/>
                    </div>
                    <div className="content">
                        <h3>new arrivals</h3>
                        <div className="price">$15.99<span>$20.99</span></div>
                        <div className="stars">
                            <FontAwesomeIcon icon={faStar}/>
                            <FontAwesomeIcon icon={faStar}/>
                            <FontAwesomeIcon icon={faStar}/>
                            <FontAwesomeIcon icon={faStar}/>
                            <FontAwesomeIcon icon={faStarHalfAlt}/>
                        </div>
                    </div>
                </a>
                </SwiperSlide>
                <SwiperSlide>
                <a href="#" className="box">
                    <div className="image">
                        <img src='/book2.jpg' alt=''/>
                    </div>
                    <div className="content">
                        <h3>new arrivals</h3>
                        <div className="price">$15.99<span>$20.99</span></div>
                        <div className="stars">
                            <FontAwesomeIcon icon={faStar}/>
                            <FontAwesomeIcon icon={faStar}/>
                            <FontAwesomeIcon icon={faStar}/>
                            <FontAwesomeIcon icon={faStar}/>
                            <FontAwesomeIcon icon={faStarHalfAlt}/>
                        </div>
                    </div>
                </a>
                </SwiperSlide>
                <SwiperSlide>
                <a href="#" className="box">
                    <div className="image">
                        <img src='/book3.jpg' alt=''/>
                    </div>
                    <div className="content">
                        <h3>new arrivals</h3>
                        <div className="price">$15.99<span>$20.99</span></div>
                        <div className="stars">
                            <FontAwesomeIcon icon={faStar}/>
                            <FontAwesomeIcon icon={faStar}/>
                            <FontAwesomeIcon icon={faStar}/>
                            <FontAwesomeIcon icon={faStar}/>
                            <FontAwesomeIcon icon={faStarHalfAlt}/>
                        </div>
                    </div>
                </a>
                </SwiperSlide>
                <SwiperSlide>
                <a href="#" className="box">
                    <div className="image">
                        <img src='/book4.png' alt=''/>
                    </div>
                    <div className="content">
                        <h3>new arrivals</h3>
                        <div className="price">$15.99<span>$20.99</span></div>
                        <div className="stars">
                            <FontAwesomeIcon icon={faStar}/>
                            <FontAwesomeIcon icon={faStar}/>
                            <FontAwesomeIcon icon={faStar}/>
                            <FontAwesomeIcon icon={faStar}/>
                            <FontAwesomeIcon icon={faStarHalfAlt}/>
                        </div>
                    </div>
                </a>
                </SwiperSlide>
                <SwiperSlide>
                <a href="#" className="box">
                    <div className="image">
                        <img src='/book5.png' alt=''/>
                    </div>
                    <div className="content">
                        <h3>new arrivals</h3>
                        <div className="price">$15.99<span>$20.99</span></div>
                        <div className="stars">
                            <FontAwesomeIcon icon={faStar}/>
                            <FontAwesomeIcon icon={faStar}/>
                            <FontAwesomeIcon icon={faStar}/>
                            <FontAwesomeIcon icon={faStar}/>
                            <FontAwesomeIcon icon={faStarHalfAlt}/>
                        </div>
                    </div>
                </a>
                </SwiperSlide>
                </Swiper>
                <Swiper className='wraper'
                modules={[Autoplay]}
                centeredSlides={true}
                spaceBetween={40}
                slidesPerView={3}
                loop={true}
                autoplay={{ delay: 9500, disableOnInteraction: false }}
                breakpoints={{
                  0: { slidesPerView: 1 },
                  640: { slidesPerView: 2 },
                  1024: { slidesPerView: 3}}}
                  >
                <SwiperSlide>
                 <a href="#" className="box">
                    <div className="image">
                        <img src='/book6.png' alt=''/>
                    </div>
                    <div className="content">
                        <h3>new arrivals</h3>
                        <div className="price">$15.99<span>$20.99</span></div>
                        <div className="stars">
                            <FontAwesomeIcon icon={faStar}/>
                            <FontAwesomeIcon icon={faStar}/>
                            <FontAwesomeIcon icon={faStar}/>
                            <FontAwesomeIcon icon={faStar}/>
                            <FontAwesomeIcon icon={faStarHalfAlt}/>
                        </div>
                    </div>
                </a>
                </SwiperSlide>
                <SwiperSlide>
                 <a href="#" className="box">
                    <div className="image">
                        <img src='/book7.png' alt=''/>
                    </div>
                    <div className="content">
                        <h3>new arrivals</h3>
                        <div className="price">$15.99<span>$20.99</span></div>
                        <div className="stars">
                            <FontAwesomeIcon icon={faStar}/>
                            <FontAwesomeIcon icon={faStar}/>
                            <FontAwesomeIcon icon={faStar}/>
                            <FontAwesomeIcon icon={faStar}/>
                            <FontAwesomeIcon icon={faStarHalfAlt}/>
                        </div>
                    </div>
                </a>
                </SwiperSlide>
                <SwiperSlide>
                <a href="#" className="box">
                    <div className="image">
                        <img src='/book1.jpg' alt=''/>
                    </div>
                    <div className="content">
                        <h3>new arrivals</h3>
                        <div className="price">$15.99<span>$20.99</span></div>
                        <div className="stars">
                            <FontAwesomeIcon icon={faStar}/>
                            <FontAwesomeIcon icon={faStar}/>
                            <FontAwesomeIcon icon={faStar}/>
                            <FontAwesomeIcon icon={faStar}/>
                            <FontAwesomeIcon icon={faStarHalfAlt}/>
                        </div>
                    </div>
                </a>
                </SwiperSlide>
                <SwiperSlide>
                <a href="#" className="box">
                    <div className="image">
                        <img src='/book2.jpg' alt=''/>
                    </div>
                    <div className="content">
                        <h3>new arrivals</h3>
                        <div className="price">$15.99<span>$20.99</span></div>
                        <div className="stars">
                            <FontAwesomeIcon icon={faStar}/>
                            <FontAwesomeIcon icon={faStar}/>
                            <FontAwesomeIcon icon={faStar}/>
                            <FontAwesomeIcon icon={faStar}/>
                            <FontAwesomeIcon icon={faStarHalfAlt}/>
                        </div>
                    </div>
                </a>
                </SwiperSlide>
                <SwiperSlide>
                <a href="#" className="box">
                    <div className="image">
                        <img src='/book3.jpg' alt=''/>
                    </div>
                    <div className="content">
                        <h3>new arrivals</h3>
                        <div className="price">$15.99<span>$20.99</span></div>
                        <div className="stars">
                            <FontAwesomeIcon icon={faStar}/>
                            <FontAwesomeIcon icon={faStar}/>
                            <FontAwesomeIcon icon={faStar}/>
                            <FontAwesomeIcon icon={faStar}/>
                            <FontAwesomeIcon icon={faStarHalfAlt}/>
                        </div>
                    </div>
                </a>
                </SwiperSlide>
            </Swiper>
        </div>
    </section>
  )
}

export default ArrivalsSection