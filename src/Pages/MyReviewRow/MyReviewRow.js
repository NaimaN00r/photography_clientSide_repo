import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';

const MyReviewRow = ({ view, handleDelete, handleStatusUpdate }) => {
    const { _id, serviceName, review,service,name} = view;
   


    

    
    const navigate = useNavigate();
    const handleEdit = (id) => {
      navigate(`reviews/edit/${id}`)
    }

    return (
        <tr>
            <th>
                <label>
                    <button onClick={() => handleDelete(_id)} className='btn btn-ghost'>X</button>
                </label>
            </th>
            <td>
                {serviceName}
                <br />
                
            </td>
            <td>
                {review}
                <br />
               
            </td>
            <td>{name}</td>
            <th>
                <button 
                onClick={() => handleEdit(_id)}
                className="btn btn-ghost btn-xs">
                Edit</button>
            </th>
        </tr>
    );
};

export default MyReviewRow;