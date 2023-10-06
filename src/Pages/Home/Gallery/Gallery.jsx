import React from 'react';
import img1 from '../../../assets/images (1).jfif'
import img2 from '../../../assets/images (1).png'
import img3 from '../../../assets/images (2).jfif'
import img4 from '../../../assets/images (3).jfif'
import img5 from '../../../assets/images (5).jfif'
import img6 from '../../../assets/images (6).jfif'
import img7 from '../../../assets/images (7).jfif'
import img8 from '../../../assets/images.jfif'
import img9 from '../../../assets/images.png'
import img10 from '../../../assets/images (8).jfif'
import Marquee from 'react-fast-marquee';


const Gallery = () => {
    return (
        <div className='overflow-y-hidden'> <br />
            <Marquee className='flex gap-10 overflow-hidden'>
            <img className='w-28 h-28 rounded-full mr-10 hover:translate-y-2 duration-700' src={img1} alt="" />
            <img className='w-28 h-28 rounded-full mr-10  hover:translate-y-2 duration-700' src={img2} alt="" />
            <img className='w-28 h-28 rounded-full mr-10 hover:translate-y-2 duration-700' src={img3} alt="" />
            <img className='w-28 h-28 rounded-full mr-10 hover:translate-y-2 duration-700' src={img4} alt="" />
            <img className='w-28 h-28 rounded-full mr-10  hover:translate-y-2 duration-700' src={img5} alt="" />
            <img className='w-28 h-28 rounded-full mr-10 hover:translate-y-2 duration-700' src={img6} alt="" />
            <img className='w-28 h-28 rounded-full mr-10 hover:translate-y-2 duration-700' src={img7} alt="" />
            <img className='w-28 h-28 rounded-full mr-10 hover:translate-y-2 duration-700' src={img8} alt="" />
            <img className='w-28 h-28 rounded-full mr-10 hover:translate-y-2 duration-700' src={img9} alt="" />
            <img className='w-28 h-28 rounded-full mr-10 hover:translate-y-2 duration-700' src={img10} alt="" />
            
            </Marquee>

            
        </div>
    );
};

export default Gallery;