import React from 'react';
import img1 from '../../../Assets/banner/img1.jpeg'
import img2 from '../../../Assets/banner/img2.jpeg'
import img3 from '../../../Assets/banner/img3.jpeg'
import img4 from '../../../Assets/banner/img4.jpeg'

const Banner = () => {
    return (
        <div className="carousel w-full">
  <div id="slide1" className="carousel-item relative w-full">
    <img src={img1} alt='' className="w-full rounded-xl" />
    <div className="absolute flex justify-end transform -translate-y-1/2 right-24 top-2/4">
                    <h1 className='text-6xl font-bold text-white'>
                        Lets Create<br />
                        Moments to<br />
                        Remember
                    </h1>
                </div>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src={img2} alt='' className="w-full rounded-xl" />
    <div className="absolute flex justify-end transform -translate-y-1/2 right-24 top-2/4">
                    <h1 className='text-6xl font-bold text-white'>
                        I Photographs <br />
                        Weddings with<br />
                        Style & Beauty
                    </h1>
                </div>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src={img3} alt='' className="w-full rounded-xl" />
    <div className="absolute flex justify-end transform -translate-y-1/2 right-24 top-2/4">
                    <h1 className='text-6xl font-bold text-white'>
                        I Capture <br />
                        Emotions Not<br />
                        Images
                    </h1>
                </div>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
    <img src={img4} alt='' className="w-full rounded-xl" />
    <div className="absolute flex justify-end transform -translate-y-1/2 right-24 top-2/4">
                    <h1 className='text-6xl font-bold text-white'>
                        Capture Love <br />
                        Joy and Everything<br />
                        between
                    </h1>
                </div>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
    );
};

export default Banner;