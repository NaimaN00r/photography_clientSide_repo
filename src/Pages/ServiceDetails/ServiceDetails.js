import React from 'react';
import { useLoaderData } from 'react-router';
import ServiceDiv from '../ServiceDiv/ServiceDiv';

const ServiceDetails = () => {
    const {title,facility,img,} = useLoaderData();
    const {name,details}=facility[0];
    const {name2,details2}=facility[1];
    const {Workshop,details3}=details2[0];
    const {Workshop2,details4}=details2[1];

    return (
        <div className='m-8'>
            <h2 className='text-center p-5 font-black'>{title} Services</h2>
            <div className='border-2 border-black bg-red-50 pt-10 pb-10 pr-5 pl-5 mb-5 flex flex-col items-center '>
                <h3 className='text-center font-medium-500'>{name}</h3>
                <p>{details}</p>
                 <img style={{height:400}} src={img}></img>
            </div>
            <div className='border-2 border-black bg-red-50 pt-9'>
                 <h2 className='text-center'>{name2}</h2>
                <div className='p-5'>
                <li>{Workshop}</li>
                <p>{details3}</p>
                </div>
                <div className='p-5'>
                <li>{Workshop2}</li>
                <p>{details4}</p>
                </div>




            </div>
            
        </div>
    );
};

export default ServiceDetails;