import React from 'react'
import '../../css/FeatureSection.css'
import {Swiper, SwiperSlide } from 'swiper/react'
import {Pagination, Navigation} from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination';
import 'swiper/css/navigation';;
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faHeart, faEye, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
 

const FeatureSection = () => {
  return (
    <section className="featured" id="feature">
        <h1 className="heading">
            <span>Featured books</span>
        </h1>
        <div className="featured-slider">
            <div className="swipe-prev">
                <FontAwesomeIcon icon={faChevronLeft}/>
            </div>
            <Swiper className="wrapper"
            modules={[Pagination, Navigation]}
            centeredSlides={true}
            spaceBetween={10}
            slidesPerView={3}
            loop={true}
            navigation={{
                prevEl:'.swipe-prev',
                nextEl:'.swipe-next',
            }}
            pagination={{clickable: true}}
            autoplay={{ delay: 2000, disableOnInteraction: false }}
            breakpoints={{
            0: { slidesPerView: 1 },
            450: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 }}}
            >
                <SwiperSlide>
                <div className="box">
                    <div className="icon">
                        <a href= '#' className=''><FontAwesomeIcon icon={faSearch}/></a>
                        <a href= '#' className=''><FontAwesomeIcon icon={faHeart}/></a>
                        <a href= '#' className=''><FontAwesomeIcon icon={faEye}/></a>
                    </div>
                    <div className="image">
                        <img src='./book1.jpg' alt=''/>
                    </div>
                    <div className="content">
                        <h3>featured book</h3>
                        <div className="price">$15.99<span>$20,99</span></div>
                        <a href='#' className='btn'>add to cart</a>
                    </div>
                </div>
                </SwiperSlide>
                 <SwiperSlide>
                <div className="box">
                    <div className="icon">
                        <a href= '#' className=''><FontAwesomeIcon icon={faSearch}/></a>
                        <a href= '#' className=''><FontAwesomeIcon icon={faHeart}/></a>
                        <a href= '#' className=''><FontAwesomeIcon icon={faEye}/></a>
                    </div>
                    <div className="image">
                        <img src='./book2.jpg' alt=''/>
                    </div>
                    <div className="content">
                        <h3>featured book</h3>
                        <div className="price">$15.99<span>$20,99</span></div>
                        <a href='#' className='btn'>add to cart</a>
                    </div>
                </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="box">
                    <div className="icon">
                        <a href= '#' className=''><FontAwesomeIcon icon={faSearch}/></a>
                        <a href= '#' className=''><FontAwesomeIcon icon={faHeart}/></a>
                        <a href= '#' className=''><FontAwesomeIcon icon={faEye}/></a>
                    </div>
                    <div className="image">
                        <img src='./book3.jpg' alt=''/>
                    </div>
                    <div className="content">
                        <h3>featured book</h3>
                        <div className="price">$15.99<span>$20,99</span></div>
                        <a href='#' className='btn'>add to cart</a>
                    </div>
                </div>
                </SwiperSlide>
                 <SwiperSlide>
                <div className="box">
                    <div className="icon">
                        <a href= '#' className=''><FontAwesomeIcon icon={faSearch}/></a>
                        <a href= '#' className=''><FontAwesomeIcon icon={faHeart}/></a>
                        <a href= '#' className=''><FontAwesomeIcon icon={faEye}/></a>
                    </div>
                    <div className="image">
                        <img src='./book4.png' alt=''/>
                    </div>
                    <div className="content">
                        <h3>featured book</h3>
                        <div className="price">$15.99<span>$20,99</span></div>
                        <a href='#' className='btn'>add to cart</a>
                    </div>
                </div>
                </SwiperSlide>
                 <SwiperSlide>
                <div className="box">
                    <div className="icon">
                        <a href= '#' className=''><FontAwesomeIcon icon={faSearch}/></a>
                        <a href= '#' className=''><FontAwesomeIcon icon={faHeart}/></a>
                        <a href= '#' className=''><FontAwesomeIcon icon={faEye}/></a>
                    </div>
                    <div className="image">
                        <img src='./book5.png' alt=''/>
                    </div>
                    <div className="content">
                        <h3>featured book</h3>
                        <div className="price">$15.99<span>$20,99</span></div>
                        <a href='#' className='btn'>add to cart</a>
                    </div>
                </div>
                </SwiperSlide>
                 <SwiperSlide>
                <div className="box">
                    <div className="icon">
                        <a href= '#' className=''><FontAwesomeIcon icon={faSearch}/></a>
                        <a href= '#' className=''><FontAwesomeIcon icon={faHeart}/></a>
                        <a href= '#' className=''><FontAwesomeIcon icon={faEye}/></a>
                    </div>
                    <div className="image">
                        <img src='./book6.png' alt=''/>
                    </div>
                    <div className="content">
                        <h3>featured book</h3>
                        <div className="price">$15.99<span>$20,99</span></div>
                        <a href='#' className='btn'>add to cart</a>
                    </div>
                </div>
                </SwiperSlide>
                 <SwiperSlide>
                <div className="box">
                    <div className="icon">
                        <a href= '#' className=''><FontAwesomeIcon icon={faSearch}/></a>
                        <a href= '#' className=''><FontAwesomeIcon icon={faHeart}/></a>
                        <a href= '#' className=''><FontAwesomeIcon icon={faEye}/></a>
                    </div>
                    <div className="image">
                        <img src='./book7.png' alt=''/>
                    </div>
                    <div className="content">
                        <h3>featured book</h3>
                        <div className="price">$15.99<span>$20,99</span></div>
                        <a href='#' className='btn'>add to cart</a>
                    </div>
                </div>
                </SwiperSlide>
                 <SwiperSlide>
                <div className="box">
                    <div className="icon">
                        <a href= '#' className=''><FontAwesomeIcon icon={faSearch}/></a>
                        <a href= '#' className=''><FontAwesomeIcon icon={faHeart}/></a>
                        <a href= '#' className=''><FontAwesomeIcon icon={faEye}/></a>
                    </div>
                    <div className="image">
                        <img src='./book1.jpg' alt=''/>
                    </div>
                    <div className="content">
                        <h3>featured book</h3>
                        <div className="price">$15.99<span>$20,99</span></div>
                        <a href='#' className='btn'>add to cart</a>
                    </div>
                </div>
                </SwiperSlide>
                 <SwiperSlide>
                <div className="box">
                    <div className="icon">
                        <a href= '#' className=''><FontAwesomeIcon icon={faSearch}/></a>
                        <a href= '#' className=''><FontAwesomeIcon icon={faHeart}/></a>
                        <a href= '#' className=''><FontAwesomeIcon icon={faEye}/></a>
                    </div>
                    <div className="image">
                        <img src='./book2.jpg' alt=''/>
                    </div>
                    <div className="content">
                        <h3>featured book</h3>
                        <div className="price">$15.99<span>$20,99</span></div>
                        <a href='#' className='btn'>add to cart</a>
                    </div>
                </div>
                </SwiperSlide>
                 <SwiperSlide>
                <div className="box">
                    <div className="icon">
                        <a href= '#' className=''><FontAwesomeIcon icon={faSearch}/></a>
                        <a href= '#' className=''><FontAwesomeIcon icon={faHeart}/></a>
                        <a href= '#' className=''><FontAwesomeIcon icon={faEye}/></a>
                    </div>
                    <div className="image">
                        <img src='./book3.jpg' alt=''/>
                    </div>
                    <div className="content">
                        <h3>featured book</h3>
                        <div className="price">$15.99<span>$20,99</span></div>
                        <a href='#' className='btn'>add to cart</a>
                    </div>
                </div>
                </SwiperSlide>
            </Swiper>
            <div className="swipe-next">
                <FontAwesomeIcon icon={faChevronRight}/>
            </div>
        </div>
    </section>
  )
}

export default FeatureSection