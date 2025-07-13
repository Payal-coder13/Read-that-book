import React from 'react'
import '../../css/ReviewSection.css'
import {Swiper, SwiperSlide } from 'swiper/react'
import {Autoplay} from 'swiper/modules'
import 'swiper/css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons'

const ReviewSection = () => {
  return (
    <section className="reviews">
        <h1 className="heading"><span>client's review</span></h1>

        <div className="reviews-slider">
            <Swiper className="wrap"
                modules={[Autoplay]}
                grabCursor={true}
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
                <div className="box">
                    <img src="./client1.jpg" alt="" />
                    <h3>john doe</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia porro quis, corporis explicabo, voluptas, temporibus maiores amet sequi voluptate atque ad cum eum ratione facere soluta magnam quasi modi culpa.</p>
                    <div className="stars">
                        <FontAwesomeIcon icon={faStar}/>
                        <FontAwesomeIcon icon={faStar}/>
                        <FontAwesomeIcon icon={faStar}/>
                        <FontAwesomeIcon icon={faStar}/>
                        <FontAwesomeIcon icon={faStarHalfAlt}/>
                    </div>
                </div>
                </SwiperSlide>
                 <SwiperSlide>
                <div className="box">
                    <img src="./client2.jpg" alt="" />
                    <h3>john doe</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia porro quis, corporis explicabo, voluptas, temporibus maiores amet sequi voluptate atque ad cum eum ratione facere soluta magnam quasi modi culpa.</p>
                    <div className="stars">
                        <FontAwesomeIcon icon={faStar}/>
                        <FontAwesomeIcon icon={faStar}/>
                        <FontAwesomeIcon icon={faStar}/>
                        <FontAwesomeIcon icon={faStar}/>
                        <FontAwesomeIcon icon={faStarHalfAlt}/>
                    </div>
                </div>
                </SwiperSlide>
                 <SwiperSlide>
                <div className="box">
                    <img src="./client3.jpg" alt="" />
                    <h3>john doe</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia porro quis, corporis explicabo, voluptas, temporibus maiores amet sequi voluptate atque ad cum eum ratione facere soluta magnam quasi modi culpa.</p>
                    <div className="stars">
                        <FontAwesomeIcon icon={faStar}/>
                        <FontAwesomeIcon icon={faStar}/>
                        <FontAwesomeIcon icon={faStar}/>
                        <FontAwesomeIcon icon={faStar}/>
                        <FontAwesomeIcon icon={faStarHalfAlt}/>
                    </div>
                </div>
                </SwiperSlide>
                 <SwiperSlide>
                <div className="box">
                    <img src="./client4.jpg" alt="" />
                    <h3>john doe</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia porro quis, corporis explicabo, voluptas, temporibus maiores amet sequi voluptate atque ad cum eum ratione facere soluta magnam quasi modi culpa.</p>
                    <div className="stars">
                        <FontAwesomeIcon icon={faStar}/>
                        <FontAwesomeIcon icon={faStar}/>
                        <FontAwesomeIcon icon={faStar}/>
                        <FontAwesomeIcon icon={faStar}/>
                        <FontAwesomeIcon icon={faStarHalfAlt}/>
                    </div>
                </div>
                </SwiperSlide>
                 <SwiperSlide>
                <div className="box">
                    <img src="./client5.jpg" alt="" />
                    <h3>john doe</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia porro quis, corporis explicabo, voluptas, temporibus maiores amet sequi voluptate atque ad cum eum ratione facere soluta magnam quasi modi culpa.</p>
                    <div className="stars">
                        <FontAwesomeIcon icon={faStar}/>
                        <FontAwesomeIcon icon={faStar}/>
                        <FontAwesomeIcon icon={faStar}/>
                        <FontAwesomeIcon icon={faStar}/>
                        <FontAwesomeIcon icon={faStarHalfAlt}/>
                    </div>
                </div>
                </SwiperSlide>
            </Swiper>
        </div>

    </section>
  )
}

export default ReviewSection