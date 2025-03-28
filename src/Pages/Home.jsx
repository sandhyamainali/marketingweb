
import React, { useRef, useState } from 'react';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { IoCall } from "react-icons/io5";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import './index.css'
function Home() {
  return (
    <>
      <div className="w-1200 bg">
        {/* swiper start */}
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper opacity-75 "
        >
          <SwiperSlide>
            <div>
              <img className='animate' src="https://wphtml.com/html/tf/chorbi/assets/img/bg/2.jpg" alt="" />
            </div>
            <div className="text">
              <p className='fw-bold fs-2'>Welcome to Chorbi</p>
              <h1 className='fw-bold fs-2 '>We are Solution Driven Company</h1>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae, magnam.</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img src="https://wphtml.com/html/tf/chorbi/assets/img/bg/3.jpg" alt="" />
            </div>
            <div className="text">
              <p className='fw-bold fs-2'>Welcome to Chorbi</p>
              <h1 className='fw-bold fs-2 '>We are Solution Driven Company</h1>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae, magnam.</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img src="https://wphtml.com/html/tf/chorbi/assets/img/bg/2.jpg" alt="" />
            </div>
            <div className="text">
              <p className='fw-bold fs-2'>Welcome to Chorbi</p>
              <h1 className='fw-bold fs-2 '>We are Solution Driven Company</h1>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae, magnam.</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img src="https://wphtml.com/html/tf/chorbi/assets/img/bg/3.jpg" alt="" />
            </div>
            <div className="text">
              <p className='fw-bold fs-2'>Welcome to Chorbi</p>
              <h1 className='fw-bold fs-2 '>We are Solution Driven Company</h1>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae, magnam.</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img src="https://wphtml.com/html/tf/chorbi/assets/img/bg/1.jpg" alt="" />
            </div>
            <div className="text">
              <p className='fw-bold fs-2'>Welcome to Chorbi</p>
              <h1 className='fw-bold fs-2 '>We are Solution Driven Company</h1>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae, magnam.</p>
            </div>
          </SwiperSlide>

        </Swiper>

        {/* swiper end */}

        {/* content start */}
        <div className="row bg-secondary-subtle z-3">
          <div className="col-lg-3 ">
            <img className="w py-5" src="https://wphtml.com/html/tf/chorbi/assets/img/about.png" alt="" />
          </div>
          <div className="col-lg-6 offset-3 py-3">
            <p className='text-blue py-2'>Best Digital Agency Based on USA</p>
            <h4 className='fw-bold py-2 fs-1'>We are expert web Agency <span>since 2003</span></h4>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis sequi quibusdam, beatae saepe enim unde fuga
              libero! Perspiciatis voluptas, sint repellat amet explicabo esse ipsam cupiditate quaerat saepe voluptatibus recusandae?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam magni odit fuga omnis sunt perspiciatis quas eos provident, ducimus voluptatum.
              At ut voluptates porro fuga labore? Delectus quo tenetur minima?</p>
            <div className='d-flex py-3'>
              <div className='bg-primary rounded-circle fs-2 text-center d-flex w-90'>
              <div><IoCall className=' text-white fs-2'/></div>
              </div>
              <div className='px-3'>
                <span>+9779876543210</span>
              </div>
            </div>
          </div>
        </div>

        {/* content end */}

      </div>
    </>
  )
}

export default Home
