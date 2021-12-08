import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Rating from 'react-rating';

const DisplayReview = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch("https://tranquil-cove-79684.herokuapp.com/review")
        .then(res => res.json())
        .then(data => setReviews(data))
    },[])
    return (
        <div className="container py-5">
        <h1 className=" title mb-3 text-center">
        What our customers say
        </h1>
            <div className="row">
                {
                    reviews.map(review => <div className="col-lg-4">
                    <div style={{height:"300px"}} class="card m-5 p-3 text-center border-0 bg-transparent">
                    <img src={review.img}
                     class="rounded-circle mx-auto" 
                     width="75px"
                     height="75px"
                     alt="..."/>
                    <div class="card-body">
                    <Rating
                    className="start-icon"
                    initialRating={review.star}
                    readonly
                    emptySymbol="fa fa-star-o fa-2x fs-6"
                    fullSymbol="fa fa-star fa-2x fs-6"
                     />
                        <h5>{review.name}</h5>
                      <p class="card-text">"{review.dec}"</p>
                    </div>
                  </div>
                  </div>)
                }
            </div>
            
        </div>
    );
};

export default DisplayReview;