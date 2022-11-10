import React from 'react';

const Review = ({feedback}) => {
    const {service,email,name,img,review}=feedback;
    
    return (
        <div className="card w-60 h-25 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={img} alt='' className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{name}</h2>
    <p>{review}</p>
  </div>
</div>
    );
};

export default Review;