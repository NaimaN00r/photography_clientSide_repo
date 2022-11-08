import React from 'react';
import { Link } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const ServiceCard = ({ service }) => {
    const { _id, img, price, title,description } = service;
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <PhotoProvider>
      <PhotoView src={img}>
      <img style={{height:300}} src={img} alt="" />
         </PhotoView>
    </PhotoProvider>
            
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>
                    {
                        description.length > 250 ?
                            <>{description.slice(0, 100) + '...'} </>
                            :
                            description
                    }
                </p>
                <p className='text-2xl text-orange-600 font-semibold'>Price: ${price}</p>
                <div className="card-actions justify-center">
                    <Link to={`/details/${_id}`}>
                        <button className="btn btn-primary">View Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;