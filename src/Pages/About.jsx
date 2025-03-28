import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function About() {
    return (
        <div className="w-1200px">
        <div className="position-relative text-center opacity-75">

            {/* about top start */}
            {/* Background Image */}
            <img
                src="https://wphtml.com/html/tf/chorbi/assets/img/bg/section-bg.jpg"
                alt="Background"
                className="img-fluid w-100"
                style={{ height: "200px", objectFit: "cover" }}
            />

            {/* Overlay Text */}
            <div className="position-absolute top-50 start-50 translate-middle text-white">
                <h1 className="fw-bold text-center">About Page</h1>

            </div>
            {/* about top start */}
</div>
            {/* content start */}
            <div className='bg-secondary-subtle py-3'>
                <h1 className='fw-bold text-2xl text-center '>Awesome Feature</h1>
                <p className='text-center'>It is a long established fact that a reader will be distracted by the readable content of a page when
                    <br />
                    looking at its layout established fact that a reader will.</p>
            </div>
            {/* content end */}

            {/* box start */}

            <div className="row p-3 bg-secondary-subtle">
                <div className="col-lg-3 px-3 ">
                    <div className='shadow border bg-light '>
                        <img className='mx'  src="https://wphtml.com/html/tf/chorbi/assets/img/service-icon/icon-1.png" alt="" />
                        <h4 className='text-center'>Full Responsive</h4>
                        <p className='px-3'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque autem enim molestias repellendus architecto praesentium nobis incidunt non, ab commodi.</p>
                    </div>
                </div>
                <div className="col-lg-3">
                    <div className='shadow border bg-light '>
                        <img className='mx'  src="https://wphtml.com/html/tf/chorbi/assets/img/service-icon/icon-2.png" alt="" />
                        <h4 className='text-center'>Perfect for all</h4>
                        <p className='px-3'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi eligendi, exercitationem dolorem possimus magni porro distinctio ipsam ad vero quos! Lorem ipsum dolor sit amet</p>
                    </div>
                </div>
                <div className="col-lg-3">
                    <div className='shadow border bg-light '>
                        <img className='mx'  src="https://wphtml.com/html/tf/chorbi/assets/img/service-icon/icon-3.png" alt="" />
                        <h4 className='text-center'>Easy To Customize</h4>
                        <p className='px-3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. In laudantium voluptatem dolorum eligendi, dolores tenetur fugiat reiciendis architecto perferendis sequi!</p>
                    </div>
                </div>
                <div className="col-lg-3">
                <div className='shadow border bg-light '>
                        <img className='mx' src="https://wphtml.com/html/tf/chorbi/assets/img/service-icon/icon-3.png" alt="" />
                        <h4 className='text-center'>Easy To Customize</h4>
                        <p className='px-3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. In laudantium voluptatem dolorum eligendi, dolores tenetur fugiat reiciendis architecto perferendis sequi!</p>
                    </div>
                </div>
            </div>

            {/* box end */}
            
        </div >
    );
}

export default About;
