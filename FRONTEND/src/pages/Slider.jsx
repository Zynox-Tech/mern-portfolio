import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Pagination, Navigation } from 'swiper/modules';
import './slider.css';

export const Slider = () => {
    return (
        <>
        <div className="heading">
            <h1>projects</h1>
        </div>
        <section className="slide-container">
    
            <Swiper
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className="card-article">
                        <div className="card-img">
                            <img src="./images/img.jpg" alt="Image 1" className="img" />
                        </div>
                        <div className="card-data">
                            <h3 className="card-name">img 1</h3>
                            <p className="card-description">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit nihil quod tempora ullam nobis in.</p>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="card-article">
                        <div className="card-img">
                            <img src="./images/img.jpg" alt="Image 2" className="img" />
                        </div>
                        <div className="card-data">
                            <h3 className="card-name">img 2</h3>
                            <p className="card-description">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit nihil quod tempora ullam nobis in.</p>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="card-article">
                        <div className="card-img">
                            <img src="./images/img.jpg" alt="Image 3" className="img" />
                        </div>
                        <div className="card-data">
                            <h3 className="card-name">img 3</h3>
                            <p className="card-description">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit nihil quod tempora ullam nobis in.</p>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="card-article">
                        <div className="card-img">
                            <img src="./images/img.jpg" alt="Image 4" className="img" />
                        </div>
                        <div className="card-data">
                            <h3 className="card-name">img 4</h3>
                            <p className="card-description">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit nihil quod tempora ullam nobis in.</p>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="card-article">
                        <div className="card-img">
                            <img src="./images/img.jpg" alt="Image 5" className="img" />
                        </div>
                        <div className="card-data">
                            <h3 className="card-name">img 5</h3>
                            <p className="card-description">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit nihil quod tempora ullam nobis in.</p>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </section>
        </>
    );
};
