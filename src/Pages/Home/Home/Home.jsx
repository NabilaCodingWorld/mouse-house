import React from 'react';
import './Home.css';
import audioHome from '../../../assets/songHome.mp3';
import MouseHouse from '../MouseHouse/MouseHouse';
import Gallery from '../Gallery/Gallery';

const Home = () => {
    return (
        <div className='overflow-hidden'>

            <audio autoPlay loop style={{ display: 'none' }}>
                <source src={audioHome} type='audio/mpeg'></source>
            </audio>
            <Gallery></Gallery> <br />

            <div className='mouse'>
                <MouseHouse></MouseHouse>
            </div>
        </div>
    );
};

export default Home;
