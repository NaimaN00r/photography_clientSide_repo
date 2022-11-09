import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import MyReviewRow from '../MyReviewRow/MyReviewRow';

const MyReviews = () => {
    const { user, logOut } = useContext(AuthContext);
    const [review, setReview] = useState([])

    useEffect(() => {
        fetch(`http://localhost:4500/reviews?email=${user?.email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('genius-token')}`
            }
        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    return logOut();
                }
                return res.json();
            })
            .then(data => {
                setReview(data);
            })
    }, [user?.email, logOut])

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure, you want to cancel this order');
        if (proceed) {
            fetch(`http://localhost:5000/reviews/${id}`, {
                method: 'DELETE',
                headers: {
                    authorization: `Bearer ${localStorage.getItem('genius-token')}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('deleted successfully');
                        const remaining = review.filter(odr => odr._id !== id);
                        setReview(remaining);
                    }
                })
        }
    }

    const handleStatusUpdate = id => {
        fetch(`http://localhost:5000/reviews/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('genius-token')}`
            },
            body: JSON.stringify({ status: 'Approved' })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    const remaining = review.filter(odr => odr._id !== id);
                    const approving = review.find(odr => odr._id === id);
                    approving.status = 'Approved'

                    const newReview = [approving, ...remaining];
                    setReview(newReview);
                }
            })
    }

    return (
        <div>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>
                            </th>
                            <th>Name</th>
                            <th>review</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            review.map(view => <MyReviewRow
                                key={view._id}
                                view={view}
                                handleDelete={handleDelete}
                                handleStatusUpdate={handleStatusUpdate}
                            ></MyReviewRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyReviews;