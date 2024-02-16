import React from 'react';
import productStore from "../../store/ProductStore.js";
import StarRatings from "react-star-ratings/build/star-ratings.js";

const Reviews = () => {

    const {ReviewList}=productStore();

    return (
        <div>
            <ul className="list-group list-group-flush mt-4">
                {
                    ReviewList!==null?(ReviewList.map((item,i)=>{
                        return <li key={i} className="list-group-item bg-transparent">
                            <h6 className="m-0 p-0"><i className="bi bi-person"></i> {item['profile']['cus_name']}</h6>
                            <StarRatings rating={parseFloat(item['rating'])} starRatedColor="red" starDimension="15px" starSpacing="2px" />
                            <p> {item['des']}</p>
                        </li>
                    })):(<span></span>)
                }
            </ul>
        </div>
    );
};

export default Reviews;