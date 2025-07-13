import React from 'react'
import '../../css/BlogsSection.css'
import {Swiper, SwiperSlide } from 'swiper/react'
import {Autoplay} from 'swiper/modules'
import 'swiper/css'

const BlogsSection = () => {
  return (
    <section className="blogs">
        <h1 className="heading"><span>our blogs</span></h1>
        <div className="blogs-slider">
            <Swiper className="wrapper"
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
                        <div className="image">
                            <img src="/Read-that-book/blog1.jpg" alt="" />
                        </div>
                        <div className="content">
                            <h3>blog title goes here</h3>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur veniam molestias aut tenetur corrupti, hic officia, alias repellat neque non deleniti eum ex totam voluptatum quidem? Expedita doloribus excepturi quod?</p>
                            <a href="#" className='btn'>read more</a>
                        </div>
                    </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div className="box">
                        <div className="image">
                            <img src="/Read-that-book/blog2.jpg" alt="" />
                        </div>
                        <div className="content">
                            <h3>blog title goes here</h3>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur veniam molestias aut tenetur corrupti, hic officia, alias repellat neque non deleniti eum ex totam voluptatum quidem? Expedita doloribus excepturi quod?</p>
                            <a href="#" className='btn'>read more</a>
                        </div>
                    </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div className="box">
                        <div className="image">
                            <img src="/Read-that-book/blog3.jpg" alt="" />
                        </div>
                        <div className="content">
                            <h3>blog title goes here</h3>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur veniam molestias aut tenetur corrupti, hic officia, alias repellat neque non deleniti eum ex totam voluptatum quidem? Expedita doloribus excepturi quod?</p>
                            <a href="#" className='btn'>read more</a>
                        </div>
                    </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div className="box">
                        <div className="image">
                            <img src="/Read-that-book/blog4.jpg" alt="" />
                        </div>
                        <div className="content">
                            <h3>blog title goes here</h3>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur veniam molestias aut tenetur corrupti, hic officia, alias repellat neque non deleniti eum ex totam voluptatum quidem? Expedita doloribus excepturi quod?</p>
                            <a href="#" className='btn'>read more</a>
                        </div>
                    </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div className="box">
                        <div className="image">
                            <img src="/Read-that-book/blog5.jpg" alt="" />
                        </div>
                        <div className="content">
                            <h3>blog title goes here</h3>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur veniam molestias aut tenetur corrupti, hic officia, alias repellat neque non deleniti eum ex totam voluptatum quidem? Expedita doloribus excepturi quod?</p>
                            <a href="#" className='btn'>read more</a>
                        </div>
                    </div>
                    </SwiperSlide>
                </Swiper>
        </div>
    </section>
  )
}

export default BlogsSection