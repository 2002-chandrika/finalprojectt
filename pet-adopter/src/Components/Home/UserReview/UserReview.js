"use client"

import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import './UserReview.css'

import { EffectCoverflow, Autoplay, Pagination, } from 'swiper/modules';
import Image from 'next/image';
import axios from 'axios';
import StarRatings from 'react-star-ratings';

const UserReview = () => {

    const [review, setReview] = useState([])
    console.log(review);

    useEffect(() => {
        axios.get('https://finalprojectt-delta.vercel.app//api/v1/Feedbacks')
            .then(res => setReview(res.data))
    }, [])


    return (
        <div className='py-16  dark:bg-[#1B2430]'>

            <div className='text-center'>
                <h4 className='text-base font-semibold text-[#F04336] dark:bg-clip-text dark:text-transparent dark:bg-gradient-to-r from-[#5edae8] to-[#12fbff]'>Users opinions</h4>
                <h1 className='text-3xl lg:text-5xl text-center font-bold pb-6 dark:text-white'>Users Review</h1>
                <p className="font-medium text-center pb-6 dark:text-white">Discover what our users have to say about their heartwarming adoption experiences!<br /> Read real-life stories of companionship, joy, and the unbreakable bond formed with their new furry family members.</p>
            </div>


            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={true}
                modules={[EffectCoverflow, Autoplay, Pagination]}
                className="mySwiper"
            >

                {
                    review.map((item) =>
                        <SwiperSlide key={item?._id} className='bg-pink-100'>
                            <div className='text-center'>
                                <Image className='ml-[106px] h-24 w-24 object-cover' width={200} height={200} src={item?.image} alt="" />

                                <div>
                                    <h1 className='text-xl mt-2'>{item?.name}</h1>

                                    <StarRatings
                                        starEmptyColor="orange"
                                        numberOfStars={item?.rating}
                                        starDimension="25px"
                                        starSpacing="5px"
                                        name='rating'
                                    />
                                    <p>{item?.review}</p>
                                </div>
                            </div>
                        </SwiperSlide>)
                }
            </Swiper>
        </div>
    );
};

export default UserReview;