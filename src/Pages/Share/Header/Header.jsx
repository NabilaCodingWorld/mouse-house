import React from 'react';
import { FaHome, FaSignInAlt, FaSignOutAlt, FaStreetView, FaBorderAll } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Tooltip as ReactTooltip } from 'react-tooltip'


const Header = () => {
    return (
        <div>

            <ul className="flex gap-10 ml-[570px]">

            <a data-tooltip-id="my-tooltip" data-tooltip-content="Home"><Link  to="/"><li><a><FaHome className='h-6 w-6 text-blue-700'></FaHome></a></li></Link></a>

            <a data-tooltip-id="my-tooltip" data-tooltip-content="Login Please"><Link to="/login"><li><a><FaSignInAlt className='h-6 w-6 text-blue-700'></FaSignInAlt></a></li></Link></a>

            <a data-tooltip-id="my-tooltip" data-tooltip-content="Review"><Link to="/"><li><a><FaStreetView className='h-6 w-6 text-blue-700'></FaStreetView></a></li></Link></a>

            <a data-tooltip-id="my-tooltip" data-tooltip-content="Dashboard"><Link to="/"><li><a><FaBorderAll className='h-6 w-6 text-blue-700'></FaBorderAll></a></li></Link></a>

            <a data-tooltip-id="my-tooltip" data-tooltip-content="LogOut Please"><Link to="/"><li><a><FaSignOutAlt className='h-6 w-6 text-blue-700'></FaSignOutAlt></a></li></Link></a>

            

            <ReactTooltip id="my-tooltip" place="top" effect="solid" />


            </ul> <br />
        </div>
    );
};

export default Header;