import React from 'react';

const ServiceDiv = ({
    Workshop,details3
    }) => {
    return (
        <div className='border-2 border-black bg-red-50 pt-10 pb-10 pr-5 pl-5 mb-5 flex flex-col items-center '>
           <p>{Workshop}</p>
        </div>
    );
};

export default ServiceDiv;