import React from 'react';
import './Navbar.css'
import img from '../../../assets/mouse-autumn-umbrella_962764-20118.jpg'

const Navbar = () => {
    return (
        <div>
            <div className='bg-color h-40'></div>

            
                <center>
                    <img className='h-40 rounded-full relative -top-24 border-2 p-2 hover:shadow-2xl' src={img} alt="" />
                </center>

            <div className="divider text-4xl font-bold relative -top-16"> Welcome To The <span className='text-orange-700 animate-pulse'>Mouse House</span> </div>

        </div>
    );
};

export default Navbar;