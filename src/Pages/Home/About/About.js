import React from 'react';
import image from '../../../Assets/me.jpeg'

const About = () => {
    return (
        <div className="hero min-h-screen ">
        <div className="hero-content flex-col lg:flex-row-reverse ml-20 mr-20">
          <img style={{height:500,width:600}} src={image} alt='' className='pl-5' />
          <div className='pr-5'>
            <h1 className="text-5xl font-bold">About Me</h1>
            <p className="py-6">I'm a freelance photographer based in New York who specializes in people and wedding photography. I love putting ideas into beautiful pictures, and I want to help you do the same. Are you searching for a photographer who is passionate, caring, and creative? I am that photographer!</p>
           
          </div>
        </div>
      </div>
    );
};

export default About;