import React, { useContext } from 'react';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const AddServices = () => {
    const { user } = useContext(AuthContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        const form=e.target;
        const service = {
          title: form.title.value,
          price: parseInt(form.price.value),
          img: form.image.value,
          description:form.description.value,
        };
    
        fetch("http://localhost:4500/services", {
          method: "POST",
          headers: {
            "content-type": "application/json"
          },
          body: JSON.stringify(service)
        }).then(res => res.json())
        .then(data => {
            console.log(data)
          if(data.success){
          form.reset();
           alert(data.message)
          } else {
            alert(data.error);
          }
        })
        .catch(err => {
          toast.error(err.message);
        })
        
      };

    return (
        <div className="py-32 px-10 min-h-screen w-full">
        <div className=" bg-red-50 p-10 md:w-3/4 lg:w-1/2 mx-auto items-center">
          <form onSubmit={handleSubmit}>
            <div className="flex items-center mb-5">
              <label className="inline-block w-40 mr-6 text-right font-bold text-gray-600">
                Service Name
              </label>
              <input
                type="text"
                name="title"
                placeholder="Name"
                className="flex-1 py-2 border-b-2 border-gray-400 focus:border-green-400 text-gray-600 placeholder-gray-400 outline-none"
              />
            </div>

            <div className="flex items-center mb-10">
              <label className="inline-block w-40 mr-6 text-right font-bold text-gray-600">
                Image
              </label>
              <input
                type="text"
                name="image"
                placeholder="url"
                className="flex-1 py-2 border-b-2 border-gray-400 focus:border-green-400 text-gray-600 placeholder-gray-400 outline-none"
              />
            </div>
  
            <div className="flex items-center mb-5">
              <label className="inline-block w-40 mr-6 text-right font-bold text-gray-600">
                Price
              </label>
              <input
                type="text"
                name="price"
                placeholder="price"
                className="flex-1 py-2 border-b-2 border-gray-400 focus:border-green-400 text-gray-600 placeholder-gray-400 outline-none"
              />
            </div>
  
            <div className="flex items-center mb-10">
              <label className="inline-block w-40 mr-6 text-right font-bold text-gray-600">
                Description
              </label>
              <input
                type="text"
                name="description"
                placeholder="description"
                className="flex-1 py-2 border-b-2 border-gray-400 focus:border-green-400 text-gray-600 placeholder-gray-400 outline-none"
              />
            </div>
  
            <div className="text-right items-center">
              <button className="py-3 px-8 bg-green-500 text-white font-bold btn btn-error ">Add</button>
            </div>
          </form>
        </div>
      </div>
    );
};

export default AddServices;