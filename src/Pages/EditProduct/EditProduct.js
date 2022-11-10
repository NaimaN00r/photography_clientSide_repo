import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import { toast } from 'react-toastify';

const EditProduct = () => {
    const router = useParams();
  const [product, setProduct] = useState({});
  const { id } = router;
  console.log(router);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:4500/reviews/${id}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setProduct(data.data);
        } else {
          toast.error(data.error);
        }
      })
      .catch((err) => toast.error(err.message));
  }, [id]);


  const handleSubmit = async (e) => {
    e.preventDefault();
    const review = {
      review: e.target.review.value,
    }

    fetch(`https://photography-client-server-naiman00r.vercel.app/reviews/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(review)
    }).then(res => res.json())
    .then(data => {
      if(data.success){
        toast.success(data.message);
        navigate("/myreviews")
      } else {
        toast.err(data.error)
      }
    })
    .catch(err => toast.error(err.message))
  }
  
  return (
    <div className="py-32 px-10 min-h-screen w-full">
      <div className="bg-white p-10 md:w-3/4 lg:w-1/2 mx-auto">
      <form onSubmit={handleSubmit}>
                <h2 className="text-4xl">You are about to edit review</h2>
                {/* <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                    <input name="firstName" type="text" placeholder="Review text" className="input input-ghost w-full  input-bordered" /> */}
                     {/* <input name="lastName" type="text" placeholder="Last Name" className="input input-ghost w-full  input-bordered" />
                    <input name="phone" type="text" placeholder="Your Phone" className="input input-ghost w-full  input-bordered" required />
                    <input name="email" type="text" placeholder="Your email" defaultValue={user?.email} className="input input-ghost w-full  input-bordered" readOnly />
                </div> */} 
                <textarea name="review" className="textarea textarea-bordered h-24 w-full" placeholder="Your Message" required></textarea>

                <input className='btn' type="submit" value="Add" />
            </form>
      </div>
    </div>
  );
};

export default EditProduct;