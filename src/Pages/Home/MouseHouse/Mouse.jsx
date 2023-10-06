import React from 'react';
import { Link } from 'react-router-dom';
import './Mouse.css'

const Mouse = ({ mice }) => {

    const { name, description, img, date, _id } = mice;

    // Define a maximum character limit for the description
    const maxDescriptionLength = 200;

    // Truncate the description if it exceeds the maximum length
    const truncatedDescription = description.length > maxDescriptionLength
        ? description.slice(0, maxDescriptionLength) + '...' // Add ellipsis
        : description;

    return (
        <div className='bg-white bg-opacity-10 p-10 rounded-xl mt-10 shadow-xl hover:shadow-2xl'>
            <div className='divider text-2xl text-white mt-10'>{name}</div> <br />
            <img className='rounded-xl' src={img} alt="" />

            <p className='text-center text-gray-300'>Date: {date} </p> 

            <p className='my-5 md:text-xl text-sm text-white bg-white p-5 bg-opacity-10 rounded-2xl'>{truncatedDescription} <span className='text-blue-600'> <Link to={`/novel/${_id}`}> See More </Link> </span> </p>
        </div>
    );
};

export default Mouse;