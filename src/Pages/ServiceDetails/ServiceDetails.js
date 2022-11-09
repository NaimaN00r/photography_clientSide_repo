import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import Review from '../Review/Review';
import ServiceDiv from '../ServiceDiv/ServiceDiv';

const ServiceDetails = () => {
const {user}=useContext(AuthContext)


const {title,facility,img,_id} = useLoaderData();
    const id=_id;
    const {name,details}=facility[0];
    const {name2,details2}=facility[1];
    const {Workshop,details3}=details2[0];
    const {Workshop2,details4}=details2[1];


const handlePlaceOrder = event => {
    event.preventDefault();
    console.log(user)
    const form = event.target;
    // const name = `${form.firstName.value} ${form.lastName.value}`;
    // const email = user?.email || 'unregistered';
    // const phone = form.phone.value;
    const review = form.review.value;

    const reviews = {
        service: _id,
        email:user.email,
        name:user.displayName,
        img:user.photoURL,
        review
    }

    // if(phone.length > 10){
    //     alert('Phone number should be 10 characters or longer')
    // }
    // else{

    // }

    fetch('http://localhost:4500/reviews', {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            authorization: `Bearer ${localStorage.getItem('genius-token')}`
        },
        body: JSON.stringify(reviews)
    })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.acknowledged){
                alert('Review added successfully')
                form.reset();
                
            }
        })
        .catch(er => console.error(er));


}


const menuItems=<>
    {
        user?.email ?
            <>
            <form onSubmit={handlePlaceOrder}>
                <h2 className="text-4xl">You are about to add review: {title}</h2>
                {/* <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                    <input name="firstName" type="text" placeholder="Review text" className="input input-ghost w-full  input-bordered" /> */}
                     {/* <input name="lastName" type="text" placeholder="Last Name" className="input input-ghost w-full  input-bordered" />
                    <input name="phone" type="text" placeholder="Your Phone" className="input input-ghost w-full  input-bordered" required />
                    <input name="email" type="text" placeholder="Your email" defaultValue={user?.email} className="input input-ghost w-full  input-bordered" readOnly />
                </div> */} 
                <textarea name="review" className="textarea textarea-bordered h-24 w-full" placeholder="Your Message" required></textarea>

                <input className='btn' type="submit" value="Add" />
            </form>
                
                
            </>
            :
            <p>Please {<Link to='/login'>Login</Link>} to add a review</p>
    }
</>

const [feedbacks, setfeedback] = useState([]);
    
    useEffect( () =>{
        fetch(`http://localhost:4500/reviews?service=${id}`)
        .then(res =>res.json())
        .then(data => setfeedback(data))
    },
     []);

    

    return (
        <div className='m-8'>
            <div>
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
       <div>
       <h1>Review Section</h1>
       <div className='flex lg:flex-col-2 sm:flex-col-1 '>
       {
        
        feedbacks.map(feedback=><Review key={feedback._id} feedback={feedback}></Review>)
      }
       </div>
      

     
        
       </div>
       {/* <button className='btn btn-warning' onClick={addreview()}>Add Review</button> */}
       {menuItems}
        </div>

    );
};

export default ServiceDetails;