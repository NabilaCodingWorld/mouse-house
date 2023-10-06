import React, { useEffect, useState } from 'react';
import Mouse from './Mouse';
import Pagination from '../../Pagination/Pagination';

const MouseHouse = () => {

    const [mouse, setMouse] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(6);

    useEffect(() => {
        fetch('journal.json')
            .then(res => res.json())
            .then(data => setMouse(data))
    }, [])

    const lastPageIndex = currentPage * postsPerPage;
    const firstPostIndex = lastPageIndex - postsPerPage;
    const currentPosts = mouse.slice(firstPostIndex, lastPageIndex);

    return (
        <div>
            <div className='grid md:grid-cols-3 gap-10 mx-10'>
                {
                    currentPosts.map(mice => <Mouse key={mice._id} mice={mice} ></Mouse>)
                }
            </div> <br />

            <Pagination
                totalPosts={mouse.length}
                postsPerPage={postsPerPage}
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}
            ></Pagination>

        </div>
    );
};

export default MouseHouse;