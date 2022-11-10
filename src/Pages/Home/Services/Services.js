import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ServiceCard from '../../Shared/ServiceCard/ServiceCard';


const Services = () => {
    const [services, setServices] = useState([]);
    
    useEffect( () =>{
        fetch('https://photography-client-server.vercel.app/services')
        .then(res =>res.json())
        .then(data => setServices(data))
    }, []);

    return (
        <div>
            <div className='text-center mb-4'>
               
                <h2 className="text-5xl font-semibold pt-12">Service Area</h2>
                
            </div>
            <div className='pl-5 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    services.map(service => <ServiceCard
                        key={service._id}
                        service={service}
                    ></ServiceCard>)
                }
            </div>
            <div className='items-center'>
            <Link to="/servicessall"><button className="btn btn-error mt-5 ml-96">See All</button></Link>
            </div>

        </div>
    );
};

export default Services;